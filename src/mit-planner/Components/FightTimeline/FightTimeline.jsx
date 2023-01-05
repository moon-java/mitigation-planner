import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { TimelineEvent } from '../TimelineEvent/TimelineEvent';
import DefaultBasicElement from '../DefaultElement/DefaultBasicElement/DefaultBasicElement';
import classes from './FightTimeline.module.css';
import useResizeAware from 'react-resize-aware';
import { PARTY_MEMBER_ELEMENT_WIDTH } from '../../Constants/UIConstants';

const FightTimeline = props => {
    const [gridItems, setGridItems] = useState();
    const [resizeListener, sizes] = useResizeAware();

    useEffect(() => {
        props.syncTimelineHeight(sizes.height);
    }, [sizes.width, sizes.height, props.prepullTime]);

    const getGridTemplateColumns = () => {
        const columnTemplate = [];
        for (let i = props.prepullTime; i < props.duration; i++) {
            columnTemplate.push('20px');
        }

        return columnTemplate
    }

    const style = {
        width: props.width,
        gridTemplateColumns: getGridTemplateColumns().join(' '),
        display: 'grid'
    }

    const fightTimelineGrid = [];

    for (let i = props.prepullTime + 1; i <= props.duration; i++) {

        let fightTimelineGridCellStyle = {
            width: '20px',
            backgroundColor: `#575a5c`,
            borderBottom: `1px solid #404040`,
            height: `100%`,
            gridColumn: `${i+Math.abs(props.prepullTime)} / ${i+Math.abs(props.prepullTime)}`,
            gridRow: '0'
        };
        if (i % 5 === 0) {
            fightTimelineGridCellStyle = { ...fightTimelineGridCellStyle, borderRight: 'solid 1.5px #707070', boxSizing: 'border-box' };
        }
        else {
            fightTimelineGridCellStyle = { ...fightTimelineGridCellStyle, borderRight: 'solid 1.5px #404040', boxSizing: 'border-box' };
        }
        let innerDiv = "";
        if (i % 60 === 0) { innerDiv = <div style={{ verticalAlign: 'bottom', color: '#202020', fontSize: '10px', width: '20px', boxSizing: 'border-box' }}>{i / 60}m</div>; }
        else if (i % 15 === 0) { innerDiv = <div style={{ verticalAlign: 'bottom', color: '#202020', fontSize: '10px', width: '20px', boxSizing: 'border-box' }}>{i % 60}</div>; }

        fightTimelineGrid.push(
            <div
                style={fightTimelineGridCellStyle}
                key={`timeline_${i}`}>
                {innerDiv}
            </div>)
    }
    useEffect(() => {
        const newGridItems = props.timeline.map((item, index) => {
            const position = item.startTime + Math.abs(props.prepullTime);
            return (
                <div
                    style={{
                        gridColumn: `${position} / ${position + (item.endTime - item.startTime)}`
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
                        style={{ marginLeft: 0, backgroundColor: `#842e2e` }}
                        remove={() => props.onRemove(item.id)}
                        calculateMitigation={props.calculateMitigation}
                        activePartyMember={props.activePartyMember}
                    />
                </div>
            )
        });

        setGridItems(newGridItems);
    }, [props.allItems, props.startTime, props.activePartyMember, props.timeline, props.leftWidth, props.prepullTime]);
    let left = PARTY_MEMBER_ELEMENT_WIDTH;
    return (
        <>
            <div
                id="FightTimeline"
                className={classes.FightTimeline}
                style={{
                    ...style, ...props.style,
                    width: `calc(100% - ${PARTY_MEMBER_ELEMENT_WIDTH + 3.5}px)`,
                    gridAutoFlow: 'column',
                    paddingTop: '8px',
                    marginLeft: `${left}px`,
                    overflowX: 'scroll'
                }}
            >
                {resizeListener}
                {gridItems}
                <div className={classes.FightTimeline}
                style={{
                    ...style, ...props.style,
                    width: '100%',
                    position: 'absolute',
                    paddingTop: '-8px',
                    height: `100%`
                }}>
                    {fightTimelineGrid}
                </div>
            </div>
        </>
    );
}

FightTimeline.defaultProps = {
    items: [],
    grouped: false
}

FightTimeline.propTypes = {
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

export default FightTimeline;