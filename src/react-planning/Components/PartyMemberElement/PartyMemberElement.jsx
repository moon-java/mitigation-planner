import React from 'react';
import PropTypes from 'prop-types';
import classes from './PartyMemberElement.module.css';
import JobSelector from '../Dropdowns/JobSelector';
import icons from './../icons';

const alpha = 0.7;
const defaultColors = {
    outerElement : [204, 204, 204],
    innerElement : [70, 130, 180]
}

const PartyMemberElement = props => {
    const onClick = () =>
    {
        console.log("clicked ", props.person.partyMemberId);
        props.onClick(props.person.partyMemberId);
    }

    const onJobChange = (job) =>
    {
        props.onPartyMemberJobChange(job, props.person.partyMemberId);
    }

    const bgColor = props.activePartyMember == props.person.partyMemberId ? '#918966' : '#3e3f41';
    const icon = icons[props.person.job];

    return (
        <div className={classes.PartyMemberElement} onClick={onClick}
        style={{textAlign: `center`, verticalAlign: 'center', backgroundColor: `${bgColor}`}}>
            <img src={icon} width="40px" height="40px"/> <br/>
            <JobSelector onJobChange={onJobChange} selectedJob={props.person.job}/>
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
    randomColor: false,
    innerElement: false,
    shadowed: false,
    bgColor: defaultColors.innerElement
}

PartyMemberElement.propTypes = {
    item: PropTypes.object.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    innerElement: PropTypes.bool,
    bgColor: PropTypes.array,
    shadowed: PropTypes.bool
}

export default PartyMemberElement;