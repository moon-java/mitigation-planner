import React from 'react';
import PropTypes from 'prop-types';
import BaseDropdown from './BaseDropdown';

const FightSelector = props => {
    let items = [
        {
            name: "Asphodelos: The First Circle (Savage)",
            abbreviation: "P1S",
            id: "p1s"
        },
        {
            name: "Asphodelos: The Second Circle (Savage)",
            abbreviation: "P2S",
            id: "p2s"
        },
        {
            name: "Asphodelos: The Third Circle (Savage)",
            abbreviation: "P3S",
            id: "p3s"
        },
        {
            name: "Asphodelos: The Fourth Circle (Savage) | Phase 1",
            abbreviation: "P4S P1",
            id: "p4sp1"
        },
        {
            name: "Asphodelos: The First Circle (Savage) | Phase 2",
            abbreviation: "P4S P2",
            id: "p4sp2"
        },
    ];

    let onChange = (e) => {
        let fight = items.find(item => item.name == e.target.value);
        props.onFightChange(fight.id);
    };
    return (
        <BaseDropdown items={items} onChange={onChange}/>
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