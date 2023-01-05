import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PartyMemberTimeline from '../PartyMemberTimeline/PartyMemberTimeline';
import { PARTY_MEMBER_ELEMENT_WIDTH } from '../../Constants/UIConstants';

const PartyMemberTimelines = props => {
    let partyMemberTimelines = [];
    let width = props.width + PARTY_MEMBER_ELEMENT_WIDTH + 15;
    for (var i = 0; i < 8; i++)
    {
        let partyMember = props.partyMembers[i];
        //if (partyMember.isEnabled)
        //{
            partyMemberTimelines.push(
                <PartyMemberTimeline
                    person={partyMember}
                    partyMembers={props.partyMembers}
                    partyMemberId={i}
                    onDrop={props.onDrop}
                    onClick={props.onPartyMemberClick}
                    onRemove={props.onRemove}
                    onPartyMemberJobChange={props.onPartyMemberJobChange}
                    activePartyMember={props.activePartyMember}
                    width={props.width}
                    duration={props.duration}
                    allItems={props.allItems}
                    prepullTime={props.prepullTime}
                    isGaugeViewEnabled={props.isGaugeViewEnabled}
                    onScroll={props.onScroll}
                    activeJobSkills={props.activeJobSkills}
                    fightLevel={props.fightLevel} />

            )
        //}
    }

    return (
        <div style={{width: `100%`, height: `calc(100% - ${props.timelineHeight}px)`, overflowX: 'visible', overflowY: 'scroll'}}>
            {partyMemberTimelines}
        </div>
    )

}

PartyMemberTimelines.defaultProps = {
    duration: 0,
    scroll: false
}

PartyMemberTimelines.propTypes = {
    grouped: PropTypes.bool,
    duration: PropTypes.number,
    onDrop: PropTypes.func,
    width: PropTypes.number,
    scroll: PropTypes.bool
}

export default PartyMemberTimelines;