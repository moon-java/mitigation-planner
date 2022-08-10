import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TimeGrid from '../TimeGrid/TimeGrid';
import TimelineGrid from '../TimelineGrid/TimelineGrid';
import SkillsGrid from '../SkillsGrid/SkillsGrid';
import GroupSkillsGrid from '../GroupSkillsGrid/GroupSkillsGrid';
import { PARTY_VIEW_SIDEBAR_WIDTH } from '../../Constants/UIConstants';

const LayoutGrid = props => {
    const [primaryJobItems, setPrimaryJobItems] = useState( [] );
    useEffect(() => {
        const tmpPrimaryJobItems = [];
        props.items.forEach( item => {
            if ( item.partyMemberId === 0) 
            {
                tmpPrimaryJobItems.push( item );
            }
        })

        setPrimaryJobItems( tmpPrimaryJobItems );

    }, [props.items, props.startTime, props.partyView]);

    const singleView = (
        <>
            <TimeGrid 
                key={`TimeGrid`}
                onDrop={props.onDrop}
                activePartyMember={props.activePartyMember}
                index={1}
                scroll={props.scroll}
                grouped={props.grouped}
                offset={0}
                width={props.width}
                duration={props.duration}
                height={props.timelineHeight}
                items={props.items}
                partyView={props.partyView}
                prepullTime={props.prepullTime}
            />
            <TimelineGrid {...props} syncTimelineHeight={props.syncTimelineHeight} leftWidth={0}/>
            <SkillsGrid {...props} items={primaryJobItems} person={props.partyMembers[0]}/>
        </>
    )

    const partyView = (
        <>
            <TimeGrid 
                key={`TimeGrid`}
                onDrop={props.onDrop}
                activePartyMember={props.activePartyMember}
                index={1}
                scroll={props.scroll}
                grouped={props.grouped}
                offset={PARTY_VIEW_SIDEBAR_WIDTH}
                width={props.width}
                duration={props.duration}
                height={props.timelineHeight}
                items={props.items}
                partyView={props.partyView}
                prepullTime={props.prepullTime}
            />
            <TimelineGrid {...props} syncTimelineHeight={props.syncTimelineHeight} leftWidth={PARTY_VIEW_SIDEBAR_WIDTH}/>
            <GroupSkillsGrid
                {...props} 
                width={props.width}
                leftWidth={PARTY_VIEW_SIDEBAR_WIDTH}
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
                ?   singleView
                :   partyView
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