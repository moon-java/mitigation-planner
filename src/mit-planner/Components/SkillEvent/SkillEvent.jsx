import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import { ELEMENT, DEFAULT_BG } from '../../Constants/UIConstants';
import { rgbaFromArray } from '../../Helpers/ColorHelpers';
import SkillEventElement from '../DefaultElement/SkillEventElement/SkillEventElement';
import DragPreview from '../DragPreview/DragPreview';
import classes from './SkillEvent.module.css';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
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

    const useStyles = makeStyles(theme => ({
        arrow: {
          "&:before": {
            border: "1px solid #c0c0c0"
          },
          color: '#c0c0c0'
        },
        tooltip: {
          backgroundColor: '#c0c0c0',
          width: 'fit-content'
        }
      }));
    let muiClasses = useStyles();

    return (
        <>
            <Tooltip followCursor={true} arrow classes={{ arrow: muiClasses.arrow, tooltip: muiClasses.tooltip }} title={
                <div style={{width: 'fit-content', backgroundColor: '#3e3f41', color: '#c0c0c0', fontSize:12, padding: 10, borderTop: "2px solid #c0c0c0", borderBottom: "2px solid #c0c0c0", textAlign: `center`}}>
                    <div style={{borderBottom: '1px solid #c0c0c0', margin: 'auto', marginBottom: 5, fontSize: 13, width: 'fit-content', paddingLeft: '15px', paddingRight: '15px'}}>{props.item.name}</div>
                    <div>{effects}</div>
                </div>
            }>
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
            </Tooltip>
            {
                !props.innerElement
                    ?   <DragPreview />
                    :   null
            }
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
