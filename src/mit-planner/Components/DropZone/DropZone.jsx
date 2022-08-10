import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import { ELEMENT } from '../../Constants/UIConstants';
import classes from './DropZone.module.css';

const DropZone = props => {

    const [{ isOver }, drop] = useDrop({
        accept: ELEMENT,
        drop: item => {
            let updatedItem = item;
            if (!item.resizing && !item.moving) {
                updatedItem = initItem(item);
            }

            props.onDrop(updatedItem, true);
        },
        hover: (item, monitor) => {
            if (!hovered && item.moving) {
                let updatedItem = item;
                if (item.moving) {
                    updatedItem = moveItem(item);
                }

                props.onDrop(updatedItem);
                setHovered(true);
            }
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const [hovered, setHovered] = useState(false);
    const [canDropItem, setCanDrop] = useState(false);


    useEffect(() => {
        setHovered(false);
        setCanDrop(true);
    }, [isOver]);

    // Update the item on drop and propagate to host element
    const moveItem = item => {
        let diff = item.startTime ? props.time - item.startTime : 0;
        item.startTime = props.time;
        item.effects.forEach(effect => {
            effect.endTime += diff;
        })

        return item;
    }

    const initItem = item => {
        let newItem = structuredClone(item);
        newItem.effects = structuredClone(item.effects);
        newItem.startTime = props.time;
        newItem.effects.forEach(effect => {
            effect.endTime = props.time + effect.duration;
        })
        newItem.partyMemberId = props.activePartyMember;

        return newItem;
    }

    const overClass = isOver ? classes.DropZoneOver : null;

    return (
        <div
            ref={drop}
            className={[classes.DropZone, overClass].join(' ')}
            style={props.style}
        >
            <div
                className={classes.Day}
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