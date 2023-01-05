import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './PartyMemberElement.module.css';
import JobSelector from '../Dropdowns/JobSelector';
import icons from '../../../assets/icons/icons';
import { PARTY_MEMBER_ELEMENT_WIDTH } from '../../Constants/UIConstants';
import {SkillEvent} from '../SkillEvent/SkillEvent';
import DefaultBasicElement from '../DefaultElement/DefaultBasicElement/DefaultBasicElement';
import * as uiConstants from '../../../mit-planner/Constants/UIConstants.js';
import useResizeAware from 'react-resize-aware';

const PartyMemberElement = props => {
    const [resizeListener, sizes] = useResizeAware();

    useEffect(() => {
        console.log("sync from element ", sizes.height);
        props.syncTimelineHeight(sizes.height);
    }, [sizes.width, sizes.height, props.activePartyMember]);

    const onClick = () => {
        props.onClick(props.person.partyMemberId);
    }

    const onJobChange = (job) => {
        props.onPartyMemberJobChange(job, props.person.partyMemberId);
    }

    const bgColor = props.activePartyMember === props.person.partyMemberId ? '#918966' : '#3e3f41';
    const icon = icons[props.person.job];
    let skillBank = <></>
    if (props.activePartyMember === props.person.partyMemberId)
    {
        skillBank = 
    <div className={classes.SkillBank}>
    {
        props.activeJobSkills.map((item, index) => {
            let maxApplicableLevel = item.maxApplicableLevel ? item.maxApplicableLevel : 90;
            if (item.level <= props.fightLevel && maxApplicableLevel >= props.fightLevel) {
                //debugger;
                return (<div key={`main_item_${index}`}>
                    <SkillEvent
                        item={item}
                        shadowed
                        customElementType={DefaultBasicElement}
                        useIcon={true}
                        style={{ backgroundColor: `${uiConstants.DEFAULT_BG}`, width: 'fit-content' }}
                    />
                </div>);
            }
            return <></>
        }
        )
    }
    </div>
    }
    return (
        <div className={classes.PartyMemberElement} onClick={onClick}
            style={{ textAlign: `center`, verticalAlign: 'center', backgroundColor: `${bgColor}`, width: `${PARTY_MEMBER_ELEMENT_WIDTH}px`, height: `${props.height}px` }}>
            <div style={{width: `${PARTY_MEMBER_ELEMENT_WIDTH - 12}px`}}>
            <img src={icon} width="30px" height="30px" padding="10px" /> <br />
            <JobSelector onJobChange={onJobChange} selectedJob={props.person.job} />
            {skillBank}
            </div>
        </div>
    )
}

PartyMemberElement.defaultProps = {
    item: {
        id: null,
        content: {},
        description: '',
        type: 'range',
    },
}

PartyMemberElement.propTypes = {
    item: PropTypes.object.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
}

export default PartyMemberElement;