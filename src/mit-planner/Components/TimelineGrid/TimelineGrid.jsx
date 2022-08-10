import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TimelineEvent } from '../TimelineEvent/TimelineEvent';
import DefaultBasicElement from '../DefaultElement/DefaultBasicElement/DefaultBasicElement';
import classes from './TimelineGrid.module.css';
import useResizeAware from 'react-resize-aware';

const TimelineGrid = props => {

    const [gridItems, setGridItems] = useState();
    const [resizeListener, sizes] = useResizeAware();
  
    useEffect(() => {
        props.syncTimelineHeight(sizes.height);
    }, [sizes.width, sizes.height, props.prepullTime]);
    
    const getGridTemplateColumns = () => {
        const columnTemplate = [];
        for ( let i = props.prepullTime; i < props.duration ; i++ )
        {
            columnTemplate.push(props.width / (props.duration + Math.abs(props.prepullTime)) + `px`);
        }

        return columnTemplate
    }

    const style = {
        width: props.width,
        gridTemplateColumns: getGridTemplateColumns().join(' '),
    }

    useEffect(() => {
        const newGridItems = props.timeline.map((item, index) => {

            const position = item.startTime + Math.abs(props.prepullTime);

            return (
                <div 
                    style={{
                        gridColumn: `${position} / ${position + ( item.endTime - item.startTime )}`,
                        gridRow: 0
                    }} 
                    key={`item_${item.id}_${index}`}
                >
                    <TimelineEvent
                        item={item}
                        overlay
                        move
                        elementClassName={props.elementClassName}
                        innerElement
                        customElementType={DefaultBasicElement}
                        style={{marginLeft: 0, backgroundColor: `#842e2e`}}
                        remove={() => props.onRemove( item.id )}
                        calculateMitigation={props.calculateMitigation}
                        activePartyMember={props.activePartyMember}
                    />
                </div>
            )
        });

        setGridItems( newGridItems );
    }, [props.items, props.startTime, props.activePartyMember, props.timeline, props.leftWidth, props.prepullTime]);

    return (
        <>
        <div
            className={classes.TimelineGrid}
            style={{...style, ...props.style,
            width: props.width,
            left: props.leftWidth + 0.5}}
        >
            {resizeListener}
            {gridItems}
        </div>
        </>
    );
}

TimelineGrid.defaultProps = {
    items: [],
    grouped: false
}

TimelineGrid.propTypes = {
    items: PropTypes.array,
    width: PropTypes.number,
    onRemove: PropTypes.func,
    elementClassName: PropTypes.string,
    customInnerElementType: PropTypes.elementType,
    style: PropTypes.object,
    duration: PropTypes.number,
    startTime: PropTypes.number,
    colorIndex: PropTypes.number,
    grouped: PropTypes.bool
}

export default TimelineGrid;