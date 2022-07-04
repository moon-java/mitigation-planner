import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { SkillEvent } from '../SkillEvent/SkillEvent';
import classes from './SkillsGrid.module.css';

const SkillsGrid = props => {

    const [gridItems, setGridItems] = useState();
    
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
        const gridColors = [];

        const newGridItems = props.items.map(( item, index) => {

            const position = item.startTime;
            return (
                <div 
                    style={{
                        gridColumn: `${position} / ${position + ( item.cooldown )}`,
                        gridRow: 0
                    }} 
                    key={`item_${item.id}_${index}`}
                >
                    <SkillEvent
                        item={item}
                        overlay
                        move
                        elementClassName={props.elementClassName}
                        innerElement
                        customElementType={props.customInnerElementType}
                        style={{marginLeft: 0}}
                        remove={() => props.onRemove( item.id )}
                        onTimeline={true}
                    />
                </div>
            )
        });

        setGridItems( newGridItems );
    }, [props.items, props.startTime]);

    return (
        <div
            className={classes.SkillsGrid}
            style={{...style, ...props.style}}
        >
            {gridItems}
        </div>
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