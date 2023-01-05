import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PartyMemberElement from '../PartyMember/PartyMemberElement'
import SkillsTimeline from '../SkillsTimeline/SkillsTimeline'

const PartyMemberTimeline = props => {
    const [timelineHeight, setTimelineHeight] = useState(0);
    const [partyMemberHeight, setPartyMemberHeight] = useState(0);

    const syncTimelineHeight = (height) => {
        setTimelineHeight(Math.max(60, height));
    };

    const syncPartyMemberHeight = (height) => {
        setPartyMemberHeight(Math.max(60, height));
    };

    const resetTimelineHeight = () => {
        setPartyMemberHeight(0);
    }

    return (
        <div className="PartyMemberTimeline" style={{display: 'flex', flexDirection: 'horizontal', border: `2px solid #c0c0c0`}}>
            <PartyMemberElement {...props} height={timelineHeight} syncTimelineHeight={syncPartyMemberHeight} resetTimelineHeight={resetTimelineHeight}/>
            <SkillsTimeline {...props} items={props.allItems[props.person.partyMemberId]} height={partyMemberHeight} syncTimelineHeight={syncTimelineHeight}/>
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