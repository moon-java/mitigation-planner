import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TimeGrid from '../TimeGrid/TimeGrid';
import TimelineGrid from '../TimelineGrid/TimelineGrid';
import SkillsGrid from '../SkillsGrid/SkillsGrid';
import GroupSkillsGrid from '../GroupSkillsGrid/GroupSkillsGrid';

const leftWidth = 220;

const LayoutGrid = props => {
    const TimeGridElements = ( width, offset ) => (
        <>
        <TimeGrid 
            key={`TimeGrid`}
            onDrop={props.onDrop}
            activePartyMember={props.activePartyMember}
            index={1}
            scroll={props.scroll}
            grouped={props.grouped}
            offset={offset}
            width={width}
            duration={props.duration}
            height={props.timelineHeight}
        >
        </TimeGrid>
        </>
    );


    //Inline view without groups 
    const inLineStyle = (
        <>
            {TimeGridElements( props.width )}
            <TimelineGrid {...props} syncTimelineHeight={props.syncTimelineHeight} leftWidth={0}/>
            <SkillsGrid {...props}/>
        </>
    )

    // Groups view
    const groupedStyle = (
        <>
            {TimeGridElements( props.width, leftWidth )}
            <TimelineGrid {...props} syncTimelineHeight={props.syncTimelineHeight} leftWidth={leftWidth}/>
            <GroupSkillsGrid
                {...props} 
                width={props.width}
                leftWidth={leftWidth}
                partyMembers={props.partyMembers}
                onPartyMemberClick={props.onPartyMemberClick}
                activePartyMember={props.activePartyMember}
            />
        </>
    )

    return (
        <>
        {
            !props.partyView
                ?   inLineStyle
                :   groupedStyle
        }
        </>
    )

}

LayoutGrid.defaultProps = {
    duration: 0,
    scroll: false
}

LayoutGrid.propTypes = {
    grouped: PropTypes.bool,
    duration: PropTypes.number,
    onDrop: PropTypes.func,
    width: PropTypes.number,
    scroll: PropTypes.bool
}

export default LayoutGrid;