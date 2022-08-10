import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import SkillEventElement from '../DefaultElement/SkillEventElement/SkillEventElement';
import PartyMemberElement from '../PartyMemberElement/PartyMemberElement';
import SkillsGrid from '../SkillsGrid/SkillsGrid';
import classes from './GroupSkillsGrid.module.css';

const GroupSkillsGrid = props => {

    const [groupedItems, setGroupItems] = useState( {} );
    const [elementHovered, setElementHovered] = useState( null );

    useEffect(() => {
        const groupedItemsTmp = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: []};
        props.items.forEach( item => {
            if ( !groupedItemsTmp[item.partyMemberId] ) 
            {
                groupedItemsTmp[item.partyMemberId] = []
            }

            groupedItemsTmp[item.partyMemberId].push( item );
        })

        setGroupItems( groupedItemsTmp );

    }, [props.items, props.startTime]);

    const hoverStyle = {background: '#2f3031'} 

    const grouped = (
        Object.keys(groupedItems).map(( items, index ) => {
            const borderStyle = {borderBottom:  '1px solid #c0c0c0'}
            return (
                <React.Fragment key={`groups_items_${items}${index}`}>
                    <div 
                        className={classes.Groups}
                        style={elementHovered === index ? {...hoverStyle} : null} 
                        onMouseOver={() => setElementHovered( index )}
                        onMouseLeave={() => setElementHovered( null )}
                    >
                        <PartyMemberElement person={props.partyMembers[index]} onClick={props.onPartyMemberClick}
                        onPartyMemberJobChange={props.onPartyMemberJobChange} activePartyMember={props.activePartyMember}/>
                    </div>
                    <div 
                        className={classes.Items}
                        style={elementHovered === index ? hoverStyle : null}
                        onMouseOver={() => setElementHovered( index )}
                        onMouseLeave={() => setElementHovered( null )}
                    >
                        <SkillsGrid 
                            {...props}
                            skillGridHeight= '0'
                            person={props.partyMembers[index]}
                            style={{
                                ...props.style,
                                ...borderStyle,
                                marginTop: 0,
                                width: `${props.width}px`
                            }}
                            items={groupedItems[items]}
                            colorIndex={index}
                            grouped
                        />
                    </div>
                </React.Fragment>
            )
        })
    )

    return (
        <div 
            className={classes.GroupViewGrid} 
            style={{
                width: `${props.width}px`,
                gridTemplateColumns: `${props.leftWidth}px ${(props.width - props.leftWidth)}px`
            }}
        >
            {grouped}
        </div>
    )
}

GroupSkillsGrid.defaultProps = {
    items: [],
    customElementType: SkillEventElement,
    leftWidth: 220
}

GroupSkillsGrid.propTypes = {
    items: PropTypes.array,
    customElementType: PropTypes.elementType,
    startTime: PropTypes.number,
    leftWidth: PropTypes.number
}

export default GroupSkillsGrid;