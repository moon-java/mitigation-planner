import React from 'react'
import { useDragLayer } from 'react-dnd';
import classes from './DragPreview.module.css';


const getItemStyles = (initialOffset, currentOffset) => {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }
    let { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;

    return {
        transform,
        WebkitTransform: transform,
    }
}

const DragPreview = props => {
    const {
        itemType,
        isDragging,
        item,
        initialOffset,
        currentOffset,

    } = useDragLayer(monitor => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }))

    const renderItem = () => {
        const bgColor = item.imgColor;
        return (
            <div
                className={[classes.DefaultBasicElement, props.className].join(' ')}
                style={{
                    ...props.style,
                    backgroundColor: bgColor,
                    padding: `5px`
                }}
            >
                <div className={classes.Content}>
                    <img src={item.imgFile} />
                </div>
            </div>
        )
    }

    if (!isDragging || item.id) {
        return null
    }

    return (
        <div className={classes.DragPreview}>
            <div
                className={classes.ItemStyle}
                style={getItemStyles(initialOffset, currentOffset)}
            >
                {renderItem()}
            </div>
        </div>
    )
}
export default DragPreview
