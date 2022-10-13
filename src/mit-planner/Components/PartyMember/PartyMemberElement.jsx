import React from 'react';
import PropTypes from 'prop-types';
import classes from './PartyMemberElement.module.css';
import JobSelector from '../Dropdowns/JobSelector';
import icons from '../../../assets/icons/icons';
import { PARTY_MEMBER_ELEMENT_WIDTH } from '../../Constants/UIConstants';

const PartyMemberElement = props => {
    const onClick = () => {
        props.onClick(props.person.partyMemberId);
    }

    const onJobChange = (job) => {
        props.onPartyMemberJobChange(job, props.person.partyMemberId);
    }

    const bgColor = props.activePartyMember === props.person.partyMemberId ? '#918966' : '#3e3f41';
    const icon = icons[props.person.job];
    return (
        <div className={classes.PartyMemberElement} onClick={onClick}
            style={{ textAlign: `center`, verticalAlign: 'center', backgroundColor: `${bgColor}`, width: `${PARTY_MEMBER_ELEMENT_WIDTH}px`, height: `${props.height}px` }}>
                <div style={{width: `${PARTY_MEMBER_ELEMENT_WIDTH - 12}px`, height: `100%`}}>
            <img src={icon} width="30px" height="30px" padding="10px" /> <br />
            <JobSelector onJobChange={onJobChange} selectedJob={props.person.job} />
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