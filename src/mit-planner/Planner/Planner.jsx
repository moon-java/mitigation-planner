import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import LayoutGrid from '../Components/LayoutGrid/LayoutGrid';

import classes from './Planner.module.css';
import { damageTypes, targets, effects } from '../../cooldowns/constants';
import { PARTY_VIEW_SIDEBAR_WIDTH } from '../Constants/Constants';


// Component
export const Planner = props => {

    const baseIndex = 100000;
    const PlannerRef = useRef();
    const secWidth = 20;

    const [items, setItems] = useState( [] );
    const [PlannerWidth, setPlannerWidth] = useState( 0 );
    const [timelineHeight, setTimelineHeight] = useState();

    const syncTimelineHeight = (height) => {
        setTimelineHeight(height)
    };

    // Get the higher id and increase
    const getNextId = () => {
        if (items.length > 0)
        {
            return Math.max.apply(Math, items.map(item => { return item.id; })) + 1
        }
        return baseIndex;
    }

    // Loop inside props.items to assign an ID if missing

    useEffect (() => {
        const verifiedItems = [];

        props.items.forEach(( item, index ) => {
            const tmpItem = {
                ...item,
                startTime: item.startTime ? item.startTime : null,
                endTime: item.endTime ? item.endTime : null
            }

            if ( item.id ){
                verifiedItems.push(tmpItem);
            }
            else{
                verifiedItems.push({
                    ...tmpItem,
                    id: baseIndex + index
                })
            }
        });

        setItems( verifiedItems );

    }, [props.items]);

    // Update boxes size on window resized
    useEffect(() => {
        let startTime = props.options.startTime;
        const endTime = props.options.endTime;

        updateScreenSizeHandler();

        window.addEventListener( 'resize', updateScreenSizeHandler );
        return () => window.removeEventListener( 'resize', updateScreenSizeHandler );
    }, [props.options.startTime, props.options.endTime]);


    const updateScreenSizeHandler = () => {
        // Get the Planner element size 
        const PlannerElement = PlannerRef.current.getBoundingClientRect();

        // Update the state with the width of the timneline width
        const width = props.partyView ? props.duration * secWidth + PARTY_VIEW_SIDEBAR_WIDTH + 2 :
                                        props.duration * secWidth;
        setPlannerWidth(width);

    }

    const canDropItem = (item) => {
        let instanceCount = 0;
        items.forEach( existingItem =>
        {
            if (item.id != existingItem.id &&
                item.skillId == existingItem.skillId &&
                item.partyMemberId == existingItem.partyMemberId)
            {
                let existingItemCooldown = existingItem.startTime + existingItem.cooldown;
                let itemCooldown = item.startTime + item.cooldown;
                if ((item.startTime < existingItem.startTime && itemCooldown > existingItem.startTime) ||
                    (item.startTime < existingItemCooldown && itemCooldown > existingItemCooldown) ||
                    (item.startTime == existingItem.startTime && itemCooldown == existingItemCooldown))
                {
                    instanceCount++;
                }
            }
        });
        if (!item.maxConcurrentUses) return instanceCount == 0;
        return instanceCount < item.maxConcurrentUses;
    }

    const onDropHandler = ( item, propagate ) => {

        // Parsing data from dropped component
        //const item = JSON.parse(event.dataTransfer.getData("text"));
        const newItems = [...items];
        let existingId = -1;
        let tmpItem = {
            ...item,
            id: item.id ? item.id : getNextId(), // Check if the item has an ID and if not assign one
        }
        let canDrop = canDropItem(item);

        if (canDrop)
        {
            //Check if the item is updated or created
            if ( item.id )
            {
                existingId = newItems.findIndex( i => i.id === item.id );
            }

            // Add the new item to the item array only if it is not already present
            if( existingId === -1 )
            {
                newItems.push( tmpItem );
                if ( props.options.callBacks.onAdd && propagate ) props.options.callBacks.onAdd({item: {...tmpItem}, items: [...newItems]});
            }
            else //Update item
            {
                newItems[existingId] = tmpItem;
                if ( props.options.callBacks.onUpdate && propagate ) props.options.callBacks.onUpdate({item: {...tmpItem}, items: [...newItems]});
            }

            // Update state with the updated items array
            setItems( newItems );
        }

    }

    const onRemoveItemHandler = itemID => {
        const newItems = [...items];
        let item = null;

        const found = newItems.findIndex(i => i.id === itemID );

        // Remove the item at the 'index' position if founded
        if ( found !== -1 )
        {
            item = newItems[found];
            newItems.splice( found, 1 );
            // Update state with the new array items
            setItems( newItems );
        }
        else 
        {
            console.log(`ID : ${itemID} not found`);
        }

        if ( props.options.callBacks.onRemove ) props.options.callBacks.onRemove({item: {...item}, items: [...newItems]});
    }

    const calculateMitigation = time => {
        let mit = {
            partyMit: { all: 100, magic: 100, phys: 100},
            selfMit: { all: 100, magic: 100, phys: 100}
        }
        items.forEach( item =>
        {
            item.effects.forEach ( effect =>
            {
                if (effect.effect == effects.BLOCK) {return;}
                if (item.startTime < time && effect.endTime >= time)
                {
                    if (effect.damageType == damageTypes.ALL)
                    {
                        if (effect.target == targets.PARTY ||
                            effect.target == targets.ENEMY)
                        {
                            mit.partyMit.all *= (100 - effect.value) / 100;
                            mit.selfMit.all *= (100 - effect.value) / 100;
                        }
                        else if (props.activePartyMember == item.partyMemberId)
                        {
                            mit.selfMit.all *= (100 - effect.value) / 100;
                        }
                    }
                    if (effect.damageType == damageTypes.MAGIC)
                    {
                        if (effect.target == targets.PARTY ||
                            effect.target == targets.ENEMY)
                        {
                            mit.partyMit.magic *= (100 - effect.value) / 100;
                            mit.selfMit.magic *= (100 - effect.value) / 100;
                        }
                        else if (props.activePartyMember == item.partyMemberId)
                        {
                            mit.selfMit.magic *= (100 - effect.value) / 100;
                        }
                    }
                    if (effect.damageType == damageTypes.PHYS)
                    {
                        if (effect.target == targets.PARTY ||
                            effect.target == targets.ENEMY)
                        {
                            mit.partyMit.phys *= (100 - effect.value) / 100;
                            mit.selfMit.phys *= (100 - effect.value) / 100;
                        }
                        else if (props.activePartyMember == item.partyMemberId)
                        {
                            mit.selfMit.phys *= (100 - effect.value) / 100;
                        }
                    }
                }
            });
        });
        return mit;
    }

    // Props list to pass to the Layout component

    const propagatedProps = {
        items: items,
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
        timelineHeight: timelineHeight
    }

    // stupid block for hiding part of timeline over party list in party list view
    let blockDiv = props.partyView ? <div style={{borderLeft: `2px solid #c0c0c0`,
                                                  borderRight: `2px solid #c0c0c0`,
                                                  borderBottom: `2px solid #c0c0c0`,
                                                  position: 'absolute',
                                                  zIndex: `50`,
                                                  backgroundColor: `#3e3f41`,
                                                  height: `${timelineHeight}px`,
                                                  width: `${PARTY_VIEW_SIDEBAR_WIDTH}px`}}/> : null;

    return (
        <>
        {blockDiv}
            <div style={{overflowX: props.scroll ? 'scroll' : 'hidden'}}>
            <div
                className={`${props.className}`}
                style={{
                    overflowY: 'clip',
                    ...props.style
                }}
                ref={PlannerRef}
            >
                <LayoutGrid {...propagatedProps} />
                </div>
            </div>
        </>
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
