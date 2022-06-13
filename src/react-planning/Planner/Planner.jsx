import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import LayoutGrid from '../Components/LayoutGrid/LayoutGrid';

import classes from './Planner.module.css';
import { damageTypes, targets } from '../../cooldowns/constants';


// Component
export const Planner = props => {

    const baseIndex = 100000000;
    const PlannerRef = useRef();
    const borderSize = 1;
    const secWidth = 20;

    const [items, setItems] = useState( [] );
    const [PlannerWidth, setPlannerWidth] = useState( 0 );

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
        setPlannerWidth( 300 * secWidth - ( borderSize * 2 ));

    }

    const canDropItem = (item) => {
        let conflict = false;
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
                    conflict = true;
                }
            }
        });

        return !conflict;
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
                if (item.startTime < time && item.endTime >= time)
                {
                    if (item.damageType == damageTypes.ALL)
                    {
                        if (item.target == targets.PARTY ||
                            item.target == targets.ENEMY)
                        {
                            mit.partyMit.all *= (100 - item.value) / 100;
                            mit.selfMit.all *= (100 - item.value) / 100;
                        }
                        else if (props.activePartyMember == item.partyMemberId)
                        {
                            mit.selfMit.all *= (100 - item.value) / 100;
                        }
                    }
                    if (item.damageType == damageTypes.MAGIC)
                    {
                        if (item.target == targets.PARTY ||
                            item.target == targets.ENEMY)
                        {
                            mit.partyMit.magic *= (100 - item.value) / 100;
                            mit.selfMit.magic *= (100 - item.value) / 100;
                        }
                        else if (props.activePartyMember == item.partyMemberId)
                        {
                            mit.selfMit.magic *= (100 - item.value) / 100;
                        }
                    }
                    if (item.damageType == damageTypes.PHYS)
                    {
                        if (item.target == targets.PARTY ||
                            item.target == targets.ENEMY)
                        {
                            mit.partyMit.phys *= (100 - item.value) / 100;
                            mit.selfMit.phys *= (100 - item.value) / 100;
                        }
                        else if (props.activePartyMember == item.partyMemberId)
                        {
                            mit.selfMit.phys *= (100 - item.value) / 100;
                        }
                    }
                }
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
        onPartyMemberClick: props.options.callBacks.onPartyMemberClick
    }
    return (
        <>
            <div
                className={`${props.className}`}
                style={{
                    border: `${borderSize}px solid #ccc`, 
                    overflowX: props.scroll ? 'scroll' : 'hidden',
                    ...props.style
                }}
                ref={PlannerRef}
            >
                <LayoutGrid {...propagatedProps} />
                
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
