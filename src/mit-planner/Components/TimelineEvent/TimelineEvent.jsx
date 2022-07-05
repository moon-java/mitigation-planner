import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SkillEventElement from '../DefaultElement/SkillEventElement/SkillEventElement';
import classes from './TimelineEvent.module.css';
import MouseTooltip from '../MouseTooltip.jsx';
import { damageTypes } from '../../../cooldowns/constants';
import { getTimelineEventColor,getTimelineEventBorderColor } from '../../Helpers/Utils';
import { DEFAULT_BG } from '../../Constants/UIConstants';

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
export const TimelineEvent = props => {
    const [visible, setVisible] = useState(false)

    let selfMit = 0;
    let partyMit = 0;
    let mit = props.calculateMitigation(props.item.endTime);
    if (props.item.damageType == damageTypes.ALL)
    {
        selfMit = mit.selfMit.all;
        partyMit = mit.partyMit.all;
    }
    else if (props.item.damageType == damageTypes.MAGIC)
    {
        selfMit = 100 - (mit.selfMit.all * mit.selfMit.magic / 100);
        partyMit = 100 - (mit.partyMit.all * mit.partyMit.magic / 100);
    }
    else if (props.item.damageType == damageTypes.PHYS)
    {
        selfMit = 100 - (mit.selfMit.all * mit.selfMit.phys / 100);
        partyMit = 100 - (mit.partyMit.all * mit.partyMit.phys / 100);
    }

    let style = {...props.style};
    style.backgroundColor = getTimelineEventColor(props.item);
    style.border = '5px solid ' + getTimelineEventBorderColor(props.item);

    return (
        <>
            <div 
                onClick={props.onClick}
                onMouseEnter={()=>setVisible(!visible)}
                onMouseLeave={()=>setVisible(!visible)}
                className={classes.TimelineEvent}
            >
                <props.customElementType {...props} style={style} />
            </div>
            <MouseTooltip
            visible={visible}
            offsetX={15}
            offsetY={10}
            >
            <div style={{backgroundColor: `${DEFAULT_BG}`, padding: 5, textAlign: `center`}}>
                <div>{props.item.name}</div>
                <div>Damage type: {props.item.damageType}</div>
                <div>Target: {props.item.target}</div>
                <div>{props.item.notes}</div>
                <div>Self mitigation: -{selfMit}%</div>
                <div>Party mitigation: -{partyMit}%</div>
            </div>
            </MouseTooltip>
        </>
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
    overlay: false,
    move: false,
    customElementType: SkillEventElement,
    occurences: 0,
    showOccurences: false
}

TimelineEvent.propTypes = {
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
