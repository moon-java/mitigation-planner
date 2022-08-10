import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SkillEventElement from '../DefaultElement/SkillEventElement/SkillEventElement';
import classes from './TimelineEvent.module.css';
import { damageTypes } from '../../../cooldowns/constants';
import { getTimelineEventColor, getTimelineEventBorderColor } from '../../Helpers/Utils';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

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
        first: {
            transform: 'rotate(45deg)',
        },
        second: {
            transform: 'rotate(-45deg)',
        }
    },
}



// Main component
export const TimelineEvent = props => {
    let selfMit = 0;
    let partyMit = 0;
    let mit = props.calculateMitigation(props.item.endTime);
    if (props.item.damageType === damageTypes.ALL) {
        selfMit = mit.selfMit.all;
        partyMit = mit.partyMit.all;
    }
    else if (props.item.damageType === damageTypes.MAGIC) {
        selfMit = 100 - (mit.selfMit.all * mit.selfMit.magic / 100);
        partyMit = 100 - (mit.partyMit.all * mit.partyMit.magic / 100);
    }
    else if (props.item.damageType === damageTypes.PHYS) {
        selfMit = 100 - (mit.selfMit.all * mit.selfMit.phys / 100);
        partyMit = 100 - (mit.partyMit.all * mit.partyMit.phys / 100);
    }

    let style = { ...props.style };
    style.backgroundColor = getTimelineEventColor(props.item);
    style.border = '5px solid ' + getTimelineEventBorderColor(props.item);
    style.zIndex = 5;

    const useStyles = makeStyles(theme => ({
        arrow: {
            "&:before": {
                border: "1px solid #c0c0c0"
            },
            color: '#c0c0c0'
        },
        tooltip: {
            backgroundColor: '#c0c0c0',
            width: 'fit-content',
            zIndex: 5
        }
    }));
    let muiClasses = useStyles();

    return (
        <Tooltip arrow classes={{ arrow: muiClasses.arrow, tooltip: muiClasses.tooltip }} title={
            <div style={{ backgroundColor: '#3e3f41', color: '#c0c0c0', fontSize: 14, padding: 10, borderTop: "2px solid #c0c0c0", borderBottom: "2px solid #c0c0c0", textAlign: `center` }}>
                <div style={{ borderBottom: '1px solid #c0c0c0', margin: 'auto', marginBottom: 5, fontSize: 15, width: 'fit-content', paddingLeft: '15px', paddingRight: '15px' }}>{props.item.name}</div>
                <div>Damage type: {props.item.damageType}</div>
                <div>Target: {props.item.target}</div>
                <div>{props.item.notes}</div>
                <div>Self mitigation: -{selfMit}%</div>
                <div>Party mitigation: -{partyMit}%</div>
            </div>
        }>
            <div data-for='tooltip'
                className={classes.TimelineEvent}
                style={{ zIndex: 5 }}
            >
                <props.customElementType {...props} style={style} />
            </div>
        </Tooltip>
    )
}



TimelineEvent.defaultProps = {
    item: {
        id: null,
        logo: '',
        description: '',
        startTime: '',
        endTime: '',
        elementType: 'range',
    },
    move: false,
    customElementType: SkillEventElement,
    occurences: 0,
    showOccurences: false
}

TimelineEvent.propTypes = {
    item: PropTypes.object.isRequired,
    width: PropTypes.number,
    move: PropTypes.bool,
    onClick: PropTypes.func,
    remove: PropTypes.func,
    customElementType: PropTypes.elementType,
    occurences: PropTypes.number,
    showOccurences: PropTypes.bool
}
