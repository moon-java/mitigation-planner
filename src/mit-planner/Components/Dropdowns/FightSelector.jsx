import React from 'react';
import PropTypes from 'prop-types';
import BaseDropdown from './BaseDropdown';

const FightSelector = props => {
    let items = [];
    props.fights.forEach(fight => {
        items.push({ name: fight.info.name, id: fight.id });
    });

    let onChange = (e) => {
        let fight = items.find(item => item.name === e.target.value);
        props.onFightChange(fight.id);
    };
    return (
        <BaseDropdown items={items} onChange={onChange} value={props.value} />
    );
}

FightSelector.defaultProps = {
    items: []
}

FightSelector.propTypes = {
    items: PropTypes.array.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
}

export default FightSelector;