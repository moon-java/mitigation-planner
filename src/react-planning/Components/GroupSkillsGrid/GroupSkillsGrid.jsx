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

    const hoverStyle = {background: 'rgba(250, 250, 250, 1'} 

    const grouped = (
        Object.keys(groupedItems).map(( items, index ) => {
            const borderStyle = 
                index < Object.keys(groupedItems).length - 1
                    ?   {borderBottom:  '1px solid #f1f1f1'}
                    :   null
            return (
                <React.Fragment key={`groups_items_${items}${index}`}>
                    <div 
                        className={classes.Groups}
                        style={elementHovered === index ? {...hoverStyle, ...borderStyle} : borderStyle} 
                        onMouseOver={() => setElementHovered( index )}
                        onMouseLeave={() => setElementHovered( null )}
                    >
                        <PartyMemberElement person={props.partyMembers[index]} onClick={props.onPartyMemberClick} />
                    </div>
                    <div 
                        className={classes.Items}
                        style={elementHovered === index ? hoverStyle : null}
                        onMouseOver={() => setElementHovered( index )}
                        onMouseLeave={() => setElementHovered( null )}
                    >
                        <SkillsGrid 
                            {...props}
                            width={props.width - props.leftWidth} /* Set the width of the itemGrid to fit inside the grid defined*/
                            style={{
                                ...props.style,
                                ...borderStyle,
                                marginTop: 0
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
                width: `${(props.width - props.leftWidth) + props.leftWidth}px`,
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