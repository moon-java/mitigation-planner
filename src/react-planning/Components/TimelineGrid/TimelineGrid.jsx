import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TimelineEvent } from '../TimelineEvent/TimelineEvent';
import DefaultBasicElement from '../DefaultElement/DefaultBasicElement/DefaultBasicElement';
import classes from './TimelineGrid.module.css';
import useResizeAware from 'react-resize-aware';

const TimelineGrid = props => {

    const [gridItems, setGridItems] = useState();

    const [resizeListener, sizes] = useResizeAware();

    const effectiveWidth = props.width - props.leftWidth;
  
    useEffect(() => {
        console.log("useeffect");
        console.log(sizes.height);
        props.syncTimelineHeight(sizes.height);
    }, [sizes.width, sizes.height]);
    
    const getGridTemplateColumns = () => {
        const columnTemplate = [];

        for ( let i = 0; i < props.duration ; i++ )
        {
            columnTemplate.push(`20px`);
        }

        return columnTemplate
    }

    const style = {
        width: props.width,
        gridTemplateColumns: getGridTemplateColumns().join(' '),
    }

    useEffect(() => {
        const newGridItems = props.timeline.map((item, index) => {

            const position = item.startTime;

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
    }, [props.items, props.startTime, props.activePartyMember, props.timeline]);

    return (
        <>
        <div
            className={classes.TimelineGrid}
            style={{...style, ...props.style,
            width: effectiveWidth,
            left: props.leftWidth}}
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