import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PartyMemberElement from '../PartyMember/PartyMemberElement'
import SkillsTimeline from '../SkillsTimeline/SkillsTimeline'

const PartyMemberTimeline = props => {
    const [timelineHeight, setTimelineHeight] = useState();

    const syncTimelineHeight = (height) => {
        setTimelineHeight(height)
    };

    return (
        <div className="PartyMemberTimeline" style={{display: 'flex', flexDirection: 'horizontal', border: `2px solid #c0c0c0`}}>
            <PartyMemberElement {...props} height={timelineHeight}/>
            <SkillsTimeline {...props} items={props.allItems[props.person.partyMemberId]} height={timelineHeight} syncTimelineHeight={syncTimelineHeight}/>
        </div>
    )

}

PartyMemberTimeline.defaultProps = {
    duration: 0,
    scroll: false
}

PartyMemberTimeline.propTypes = {
    grouped: PropTypes.bool,
    duration: PropTypes.number,
    onDrop: PropTypes.func,
    width: PropTypes.number,
    scroll: PropTypes.bool
}

export default PartyMemberTimeline;