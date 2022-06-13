import React from 'react';
import PropTypes from 'prop-types';
import classes from './PartyMemberElement.module.css';

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

    return (
        <div className={classes.PartyMemberElement} onClick={onClick}>
            {props.person.partyMemberId}, {props.person.job}
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