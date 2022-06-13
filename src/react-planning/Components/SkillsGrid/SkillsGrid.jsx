import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { SkillEvent } from '../SkillEvent/SkillEvent';
import DefaultBasicElement from '../DefaultElement/DefaultBasicElement/DefaultBasicElement';
import { COLORS } from '../../Constants/Constants';
import classes from './SkillsGrid.module.css';

const SkillsGrid = props => {

    const [gridItems, setGridItems] = useState();
    
    const getGridTemplateColumns = () => {
        const columnTemplate = [];

        for ( let i = 0; i < props.duration ; i++ )
        {
            columnTemplate.push(`${props.width/props.duration}px`);
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

            // Select color for the item. If itemId has already a color assigned pick it else create one
            
            let color = null;

            // If the colorIndex is provided use it
            if ( props.colorIndex )
            {
                color = COLORS[props.colorIndex]
            }
            else    // Else we define it by parsing the array        
            {
                let searchItemId = gridColors.find(i => i.itemId === item.itemId);

                if ( searchItemId )
                {
                    color = searchItemId.color
                }
                else
                {
                    color = COLORS[gridColors.length]

                    gridColors.push({
                        itemId: item.itemId,
                        color: color
                    });
                }
            }
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
                        bgColor={color}
                        elementClassName={props.elementClassName}
                        innerElement
                        customElementType={props.customInnerElementType}
                        style={{marginLeft: 0}}
                        onClick={() => console.log(item)}
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