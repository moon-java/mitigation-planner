import React from 'react';
import PropTypes from 'prop-types';
import BaseDropdown from './BaseDropdown';

const FightSelector = props => {
    let onChange = (e) => {};
    let items = [
        {
            name: "Asphodelos: The First Circle (Savage)",
            abbreviation: "P1S"
        },
        {
            name: "Asphodelos: The Second Circle (Savage)",
            abbreviation: "P2S"
        },
        {
            name: "Asphodelos: The Third Circle (Savage)",
            abbreviation: "P3S"
        },
        {
            name: "Asphodelos: The Fourth Circle (Savage) | Phase 1",
            abbreviation: "P4S P1"
        },
        {
            name: "Asphodelos: The First Circle (Savage) | Phase 2",
            abbreviation: "P4S P2"
        },
    ]
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