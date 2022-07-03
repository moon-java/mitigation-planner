import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import { ELEMENT } from '../../Constants/Constants';
import { rgbaFromArray } from '../../Helpers/ColorHelpers';
import SkillEventElement from '../DefaultElement/SkillEventElement/SkillEventElement';
import DragPreview from '../DragPreview/DragPreview';
import classes from './SkillEvent.module.css';
import MouseTooltip from '../MouseTooltip.jsx';
import { formatEffectString } from '../../Helpers/Utils';

// Static style section 

const styles = {

    removeButtonLines: {
        shared: {
            position: 'absolute',
            right: '14px',
            top: '7.5px',
            height: '15px',
            width: '2px',
            backgroundColor: '#E76E54',
          },
          first : {
            transform: 'rotate(45deg)',
          },
          second : {
            transform: 'rotate(-45deg)',
          }
    },
}



// Main component
export const SkillEvent = props => {
    const [visible, setVisible] = useState(false)

    const [{isDragging}, drag ] = useDrag({
        type: ELEMENT,
        item: { ...props.item, resizing: null, moving: props.innerElement },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const hoverStyle = {
        border: `2px solid ${rgbaFromArray( props.bgColor )}`,
        borderStyle: 'solid none solid none'
    }

    const [hoverStyleActive, setHoverStyleActive] = useState( null );

    const mouseOver = () => {
        setHoverStyleActive( hoverStyle );
        setVisible(!visible);
    }

    const mouseLeave = () => {
        setHoverStyleActive( null );
        setVisible(!visible);
    }

    let effects = props.item.effects.map((effect, index) =>
    {
        return (<div>{formatEffectString(effect)}</div>);
    });

    return (
        <>
            <div 
                onClick={props.onClick}
                ref={drag}
                className={classes.SkillEvent}
                style={{
                    cursor: props.move ? 'move' : 'grab',
                }}
            >
                <props.customElementType {...props} />
                {
                    props.overlay
                        ?   <div
                                className={classes.Overlay}
                                style={hoverStyleActive}
                                onMouseOver={mouseOver}
                                onMouseLeave={mouseLeave}
                            >
                                <div 
                                    className={classes.RemoveButton} 
                                    onClick={props.remove}
                                >
                                    <div style={{...styles.removeButtonLines.shared, ...styles.removeButtonLines.first}}/>
                                    <div style={{...styles.removeButtonLines.shared, ...styles.removeButtonLines.second}}/>
                                </div>
                            </div>
                        :   null
                }
            </div>
            {
                !props.innerElement
                    ?   <DragPreview />
                    :   null
            }
            <MouseTooltip
            visible={visible}
            offsetX={15}
            offsetY={10}
            >
            <div style={{backgroundColor: 'gray', padding: 5, textAlign: `center`}}>
                <div>{effects}</div>
            </div>
            </MouseTooltip>
        </>
    )
}



SkillEvent.defaultProps = {
    item: {
        id: null,
        logo: '',
        description: '',
        startTime: '',
        endTime: '',
        elementType: 'range',
    },
    overlay: false,
    move: false,
    customElementType: SkillEventElement,
    occurences: 0,
    showOccurences: false
}

SkillEvent.propTypes = {
    item: PropTypes.object.isRequired,
    width: PropTypes.number,
    overlay: PropTypes.bool,
    move: PropTypes.bool,
    onClick: PropTypes.func,
    remove: PropTypes.func,
    customElementType: PropTypes.elementType,
    bgColor: PropTypes.array,
    occurences: PropTypes.number,
    showOccurences: PropTypes.bool
}
