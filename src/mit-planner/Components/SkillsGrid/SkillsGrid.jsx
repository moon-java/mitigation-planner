import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { SkillEvent } from '../SkillEvent/SkillEvent';
import classes from './SkillsGrid.module.css';

const SkillsGrid = props => {
    const [gridItems, setGridItems] = useState();

    const getGridTemplateColumns = () => {
        const columnTemplate = [];

        for (let i = props.prepullTime; i < props.duration; i++) {
            columnTemplate.push(`20px`);
        }

        return columnTemplate
    }

    let style = {
        width: props.width,
        gridTemplateColumns: getGridTemplateColumns().join(' '),
    }

    let style2 = {
        width: props.width,
        gridTemplateColumns: getGridTemplateColumns().join(' '),
        gridTemplateRows: '33% 33% 33%',
        height: '100%'
    }
    if (parseInt(props.skillGridHeight) !== 0) {
        style2 = { ...style2, height: props.skillGridHeight }
    }

    let gaugeDivs = [];

    if (props.person.hasGauge && props.isGaugeViewEnabled) {
        let gaugeEvents = [];
        if (props.person.passiveGaugeTimer > 0) {
            for (let i = props.person.passiveGaugeTimer; i < props.duration; i += props.person.passiveGaugeTimer) {
                gaugeEvents.push(
                    {
                        time: i + 1,
                        type: "add",
                        value: 1
                    }
                )
            }
        }
        props.items.forEach(item => {
            if (item.gaugeEvent !== undefined) {
                gaugeEvents.push(
                    {
                        time: item.startTime,
                        ...item.gaugeEvent
                    }
                )
            }
        });
        gaugeEvents.sort((a, b) => a.time - b.time);
        let lastTime = props.prepullTime + 1;
        let currentTotal = props.person.startingGauge;
        for (let i = 0; i < gaugeEvents.length; i++) {
            const event = gaugeEvents[i];
            const colSpan = (lastTime + Math.abs(props.prepullTime)) + " / " + (event.time + Math.abs(props.prepullTime));
            let bgColor = 'RGBA(92, 214, 125, 0.3)';
            let borderColor = '1px solid RGBA(92, 214, 125, 0.4)';
            let rowIndex = currentTotal;
            if (currentTotal < 0) {
                rowIndex = Math.abs(rowIndex);
                bgColor = 'RGBA(214, 94, 92, 0.3)';
                borderColor = 'RGBA(214, 94, 92, 0.4)';
            }
            for (let j = 1; j <= rowIndex; j++) {
                const rowSpan = (4 - j) + " / " + (5 - j);
                gaugeDivs.push(
                    <div key={i + "_" + j} style={{ gridColumn: colSpan, gridRow: rowSpan, background: bgColor, border: borderColor }} />
                )
            }
            lastTime = event.time
            if (event.type === "add") {
                currentTotal = Math.min(3, currentTotal + event.value)
            }
            else {
                currentTotal = currentTotal - event.value
            }
        }
        const colSpan = (lastTime + Math.abs(props.prepullTime)) + " / " + (props.duration + 1 + Math.abs(props.prepullTime));
        let bgColor = 'RGBA(92, 214, 125, 0.3)';
        let borderColor = '1px solid RGBA(92, 214, 125, 0.4)';
        let rowIndex = currentTotal;
        if (currentTotal < 0) {
            rowIndex = Math.abs(rowIndex);
            bgColor = 'RGBA(214, 94, 92, 0.3)';
            borderColor = 'RGBA(214, 94, 92, 0.4)';
        }
        for (let j = 1; j <= rowIndex; j++) {
            const rowSpan = (4 - j) + " / " + (5 - j);
            gaugeDivs.push(
                <div key={"_" + j} style={{ gridColumn: colSpan, gridRow: rowSpan, background: bgColor, border: borderColor }} />
            )
        }
    }

    const { items, startTime, prepullTime, elementClassName, customInnerElementType, onRemove } = props;

    useEffect(() => {
        const newGridItems = items.map((item, index) => {
            const position = item.startTime + Math.abs(prepullTime);
            return (
                <div
                    style={{
                        gridColumn: `${position} / ${position + (item.cooldown)}`
                    }}
                    key={`item_${item.id}_${index}`}
                >
                    <SkillEvent
                        item={item}
                        overlay
                        move
                        elementClassName={elementClassName}
                        innerElement
                        customElementType={customInnerElementType}
                        style={{ marginLeft: 0 }}
                        remove={() => onRemove(item.id)}
                        onTimeline={true}
                    />
                </div>
            )
        });

        setGridItems(newGridItems);
    }, [items, startTime, prepullTime, elementClassName, customInnerElementType, onRemove]);

    return (
        <>
            <div
                className={classes.SkillsGrid}
                style={{ ...style, ...props.style }}
            >
                <div
                    className={classes.SkillsGrid}
                    style={{ ...style2, ...props.style, position: "absolute", marginTop: "1px", zIndex: "0" }}
                >
                    {gaugeDivs}
                </div>
                {gridItems}
            </div>
        </>
    );
}

SkillsGrid.defaultProps = {
    items: [],
    grouped: false
}

SkillsGrid.propTypes = {
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

export default SkillsGrid;