import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import { ELEMENT } from '../../Constants/UIConstants';
import classes from './DropZone.module.css';

const DropZone = props => {

    const [{ isOver }, drop] = useDrop({
        accept: ELEMENT,
        drop: (item, monitor) => {
            const pardiv = document.getElementById("DropZone" + props.partyMemberId);
            if (monitor.getClientOffset() != null)
            {
                const startTime = Math.ceil((monitor.getClientOffset().x - pardiv.getBoundingClientRect().x) / 20) + props.prepullTime;
                let updatedItem = item;
                if (!item.resizing && !item.moving) {
                    updatedItem = initItem(item, startTime);
                }

                props.onDrop(updatedItem);
                console.log("drop");
            }
        },
        hover: (item, monitor) => {
            const pardiv = document.getElementById("DropZone" + props.partyMemberId);
            const startTime = Math.ceil((monitor.getClientOffset().x - pardiv.getBoundingClientRect().x) / 20) + props.prepullTime;
            if (item.partyMemberId == props.partyMemberId)
            {
                console.log("moving");
                console.log(hovered);
                console.log(item.moving);
                if (item.moving) {
                    let updatedItem = item;
                    if (item.moving) {
                        updatedItem = moveItem(item, startTime);
                    }
                    console.log("getClientOffset ", monitor.getClientOffset());
                    console.log("getDifferenceFromInitialOffset ", monitor.getDifferenceFromInitialOffset());

                    props.onDrop(updatedItem);
                    setHovered(true);
                }
            }
        },
        collect: monitor => ({
            isOver: !!monitor.isOver() && props.partyMemberId == props.activePartyMember,
        }),
    });

    const [hovered, setHovered] = useState(false);
    const [canDropItem, setCanDrop] = useState(false);


    useEffect(() => {
        setHovered(false);
        setCanDrop(true);
    }, [isOver]);

    // Update the item on drop and propagate to host element
    const moveItem = (item, startTime) => {
        let diff = item.startTime ? startTime - item.startTime : 0;
        item.startTime = startTime;
        item.effects.forEach(effect => {
            effect.endTime += diff;
        })
        return item;
    }

    const initItem = (item, startTime) => {
        let newItem = structuredClone(item);
        newItem.effects = structuredClone(item.effects);
        newItem.startTime = startTime;
        newItem.effects.forEach(effect => {
            effect.endTime = startTime + effect.duration;
        })
        newItem.partyMemberId = props.activePartyMember;

        return newItem;
    }

    const overClass = isOver ? classes.DropZoneOver : null;

    return (
        <div
            ref={drop}
            className={[classes.DropZone, overClass].join(' ')}
            style={{...props.style, width: '100%', height: '100%'}}
        >
            <div
                className={classes.InnerZone}
                style={{ color: isOver ? 'white' : '#7787a8' }}
            >
            </div>
        </div>
    )
}

DropZone.defaultProps = {
    includeWeekend: false
};

DropZone.propTypes = {
    style: PropTypes.object,
    onDrop: PropTypes.func.isRequired,
    includeWeekend: PropTypes.bool,
    time: PropTypes.number
}

export default DropZone;