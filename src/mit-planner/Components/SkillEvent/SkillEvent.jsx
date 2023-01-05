import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import { ELEMENT } from '../../Constants/UIConstants';
import SkillEventElement from '../DefaultElement/SkillEventElement/SkillEventElement';
import DragPreview from '../DragPreview/DragPreview';
import classes from './SkillEvent.module.css';
import Tooltip from '@mui/material/Tooltip';
import { formatEffectString } from '../../Helpers/Utils';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

// Main component
export const SkillEvent = props => {
    const [anchorPosition, setAnchorPosition] = useState(null);

    const handleDoubleClick = (event) => {
        setAnchorPosition({ top: event.clientY, left: event.clientX });
    };

    const handleClose = () => {
        setAnchorPosition(null);
    };

    const handleRemove = () => {
        props.remove(props.item)
    }

    const [{ isDragging }, drag] = useDrag({
        type: ELEMENT,
        item: { ...props.item, resizing: null, moving: props.innerElement },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    let effects = props.item.effects.map((effect, index) => {
        return (<div key={index}>{formatEffectString(effect)}</div>);
    });

    const open = Boolean(anchorPosition);

    return (
        <>
            <Popover
                open={open}
                anchorReference="anchorPosition"
                anchorPosition={anchorPosition}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handleClose}
            >
                <Button variant="contained" onClick={handleRemove} style={{ background: '#aa0000' }}>
                    Remove
                </Button>
            </Popover>
            <Tooltip followCursor={true} arrow style={{
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
            }} title={
                <div style={{ width: 'fit-content', backgroundColor: '#3e3f41', color: '#c0c0c0', fontSize: 12, padding: 10, borderTop: "2px solid #c0c0c0", borderBottom: "2px solid #c0c0c0", textAlign: `center` }}>
                    <div style={{ borderBottom: '1px solid #c0c0c0', margin: 'auto', marginBottom: 5, fontSize: 13, width: 'fit-content', paddingLeft: '15px', paddingRight: '15px' }}>{props.item.name}</div>
                    <div>{effects}</div>
                </div>
            }>
                <div
                    ref={drag}
                    className={classes.SkillEvent}
                    onDoubleClick={handleDoubleClick}
                    style={{ cursor: props.move ? 'move' : 'grab' }}
                >
                    <props.customElementType {...props} />
                </div>
            </Tooltip>
            {
                !props.innerElement
                    ? <DragPreview />
                    : null
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
    occurences: PropTypes.number,
    showOccurences: PropTypes.bool
}
