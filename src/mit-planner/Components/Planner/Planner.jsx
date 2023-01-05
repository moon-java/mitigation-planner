import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import classes from './Planner.module.css';
import { damageTypes, targets, effects } from '../../../cooldowns/constants';
import { SEC_WIDTH, PARTY_VIEW_SIDEBAR_WIDTH, PARTY_MEMBER_ELEMENT_WIDTH } from '../../Constants/UIConstants';
import FightTimeline from '../FightTimeline/FightTimeline';
import PartyMemberTimelines from '../PartyMemberTimelines/PartyMemberTimelines';

import { useHorizontalScroll } from "../../Helpers/SideScrollHook";

// Component
export const Planner = props => {

    const baseIndex = 100000;

    const [items, setItems] = useState([]);
    const [PlannerWidth, setPlannerWidth] = useState(0);
    const [timelineHeight, setTimelineHeight] = useState();

    const syncTimelineHeight = (height) => {
        console.log("planner " + height);
        setTimelineHeight(height)
    };

    // Get the higher id and increase
    const getNextId = () => {
        if (items.length > 0) {
            return Math.max.apply(Math, items.map(item => { return item.id; })) + 1
        }
        return baseIndex;
    }

    // Loop inside props.items to assign an ID if missing

    useEffect(() => {
        const verifiedItems = [[], [], [] ,[] ,[] ,[] ,[], []];
        props.items.forEach((arr, ind) => {
            arr.forEach((item, index) => {
                const tmpItem = {
                    ...item,
                    startTime: item.startTime ? item.startTime : null,
                    endTime: item.endTime ? item.endTime : null
                }

                if (item.id) {
                    verifiedItems[ind][index] = tmpItem;
                }
                else {
                    verifiedItems[ind][index] = {
                        ...tmpItem,
                        id: baseIndex + index
                    };
                }
            });
        });

        setItems(verifiedItems);

    }, [props.items]);

    // Update boxes size on window resized
    useEffect(() => {
        updateScreenSizeHandler();

        window.addEventListener('resize', updateScreenSizeHandler);
        return () => window.removeEventListener('resize', updateScreenSizeHandler);
    }, [props.options.startTime, props.options.endTime, props.duration, props.partyView, props.prepullTime]);


    const updateScreenSizeHandler = () => {
        // Update the state with the width of the timneline width
        const width = /*props.partyView ? props.duration * SEC_WIDTH + PARTY_VIEW_SIDEBAR_WIDTH + 2 :*/
            (props.duration + Math.abs(props.prepullTime)) * SEC_WIDTH ;
        setPlannerWidth(width);

    }

    const canDropItem = (item) => {
        let instanceCount = 0;
        let pID = item.partyMemberId;
        items[pID].forEach(existingItem => {
            if (item.id !== existingItem.id &&
                item.skillId === existingItem.skillId &&
                item.partyMemberId === existingItem.partyMemberId) {
                let existingItemCooldown = existingItem.startTime + existingItem.cooldown;
                let itemCooldown = item.startTime + item.cooldown;
                if ((item.startTime < existingItem.startTime && itemCooldown > existingItem.startTime) ||
                    (item.startTime < existingItemCooldown && itemCooldown > existingItemCooldown) ||
                    (item.startTime === existingItem.startTime && itemCooldown === existingItemCooldown)) {
                    instanceCount++;
                }
            }
        });

        if (!item.maxConcurrentUses) return instanceCount === 0;
        return instanceCount < item.maxConcurrentUses;
    }

    const onDropHandler = (item) => {
        const newItems = [...items];
        let pID = item.partyMemberId;
        let existingId = -1;
        let tmpItem = {
            ...item,
            id: item.id ? item.id : getNextId(), // Check if the item has an ID and if not assign one
        }
        let canDrop = canDropItem(item);

        if (canDrop) {
            //Check if the item is updated or created
            if (item.id) {
                existingId = newItems[pID].findIndex(i => i.id === item.id);
            }
            // Add the new item to the item array only if it is not already present
            if (existingId === -1) {
                newItems[pID].push(tmpItem);
                if (props.options.callBacks.onAdd) props.options.callBacks.onAdd({ item: { ...tmpItem }, items: [...newItems] });
            }
            else //Update item
            {
                newItems[pID][existingId] = tmpItem;
                if (props.options.callBacks.onUpdate) props.options.callBacks.onUpdate({ item: { ...tmpItem }, items: [...newItems] });
            }
            // Update state with the updated items array
            setItems(newItems);
        }

    }

    const onRemoveItemHandler = item => {
        const newItems = [...items];
        let pID = item.partyMemberId;

        const found = newItems[pID].findIndex(i => i.id === item.id);

        // Remove the item at the 'index' position if found
        if (found !== -1) {
            item = newItems[pID][found];
            newItems[pID].splice(found, 1);
            // Update state with the new array items
            setItems(newItems);
        }

        if (props.options.callBacks.onRemove) props.options.callBacks.onRemove({ item: { ...item }, items: [...newItems] });
    }

    const calculateMitigation = time => {
        let mit = {
            partyMit: { all: 100, magic: 100, phys: 100 },
            selfMit: { all: 100, magic: 100, phys: 100 }
        }
        props.items.forEach(arr => {
            arr.forEach(item => {
                item.effects.forEach(effect => {
                    if (effect.effect === effects.BLOCK) { return; }
                    if (item.startTime < time && (effect.duration + item.startTime) >= time) {
                        if (effect.damageType === damageTypes.ALL) {
                            if (effect.target === targets.PARTY ||
                                effect.target === targets.ENEMY) {
                                mit.partyMit.all *= (100 - effect.value) / 100;
                                mit.selfMit.all *= (100 - effect.value) / 100;
                            }
                            else if (props.activePartyMember === item.partyMemberId) {
                                mit.selfMit.all *= (100 - effect.value) / 100;
                            }
                        }
                        if (effect.damageType === damageTypes.MAGIC) {
                            if (effect.target === targets.PARTY ||
                                effect.target === targets.ENEMY) {
                                mit.partyMit.magic *= (100 - effect.value) / 100;
                                mit.selfMit.magic *= (100 - effect.value) / 100;
                            }
                            else if (props.activePartyMember === item.partyMemberId) {
                                mit.selfMit.magic *= (100 - effect.value) / 100;
                            }
                        }
                        if (effect.damageType === damageTypes.PHYS) {
                            if (effect.target === targets.PARTY ||
                                effect.target === targets.ENEMY) {
                                mit.partyMit.phys *= (100 - effect.value) / 100;
                                mit.selfMit.phys *= (100 - effect.value) / 100;
                            }
                            else if (props.activePartyMember === item.partyMemberId) {
                                mit.selfMit.phys *= (100 - effect.value) / 100;
                            }
                        }
                    }
                });
            });
        });
        return mit;
    }

    const onPartyTimelineScroll = () =>
    {
        //debugger;
        let fightTimeline = document.getElementById("FightTimeline");
        let newScroll = fightTimeline.scrollLeft;
        for (let i = 0; i < 8; i++)
        {
            let partyTimeline = document.getElementById("SkillsTimeline" + i);
            if (partyTimeline.scrollLeft != fightTimeline.scrollLeft &&
                newScroll != partyTimeline.scrollLeft) {
                newScroll = partyTimeline.scrollLeft;
            }
        }
        for (let i = 0; i < 8; i++)
        {
            let partyTimeline = document.getElementById("SkillsTimeline" + i);
            partyTimeline.scrollLeft = newScroll;
        }
        fightTimeline.scrollLeft = newScroll;
    }

    const propagatedProps = {
        allItems: items,
        width: PlannerWidth,
        onRemove: onRemoveItemHandler,
        onDrop: onDropHandler,
        canDropItem: canDropItem,
        calculateMitigation: calculateMitigation,
        grouped: props.grouped,
        scroll: props.scroll,
        customInnerElementType: props.customInnerElementType,
        elementClassName: props.elementClassName,
        startTime: props.options.startTime,
        duration: props.duration,
        partyView: props.partyView,
        partyMembers: props.partyMembers,
        activePartyMember: props.activePartyMember,
        onPartyMemberClick: props.options.callBacks.onPartyMemberClick,
        onPartyMemberJobChange: props.options.callBacks.onPartyMemberJobChange,
        timeline: props.timeline,
        syncTimelineHeight: syncTimelineHeight,
        timelineHeight: timelineHeight,
        isGaugeViewEnabled: props.isGaugeViewEnabled,
        prepullTime: props.prepullTime,
        onScroll: onPartyTimelineScroll,
        activeJobSkills: props.activeJobSkills,
        fightLevel: props.fightLevel
    }

    const scrollRef = useHorizontalScroll();
    return (
            <div className={classes.Planner} style={{ width: '100%', overflowX: 'scroll'}}>
                <FightTimeline {...propagatedProps} />
                <PartyMemberTimelines {...propagatedProps} />
            </div>
    )
}


Planner.defaultProps = {
    items: [],
    options: {
        callBacks: {
            onAdd: null,
            onRemove: null,
            onUpdate: null
        },
        startTime: 0,
        endTime: 0
    },
    scroll: false,
    grouped: false,
    className: classes.PlannerDefault
};

Planner.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onDragClass: PropTypes.string,
    elementClassName: PropTypes.string,
    items: PropTypes.array,
    customInnerElementType: PropTypes.elementType,
    options: PropTypes.shape({
        callBacks: PropTypes.shape({
            onAdd: PropTypes.func,
            onRemove: PropTypes.func,
            onUpdate: PropTypes.func
        }),
        startTime: PropTypes.number.isRequired,
        endTime: PropTypes.number.isRequired
    }),
    scroll: PropTypes.bool,
    grouped: PropTypes.bool,
}
