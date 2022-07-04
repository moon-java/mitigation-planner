import React from 'react';
import PropTypes from 'prop-types';
import BaseDropdown from './BaseDropdown';

const JobSelector = props => {
    let onChange = (e) => {
        console.log(e);
        props.onJobChange(e.value);
    };
    let items = [
        {
            name: "PLD"
        },
        {
            name: "WAR"
        },
        {
            name: "DRK"
        },
        {
            name: "GNB"
        },
        {
            name: "WHM"
        },
        {
            name: "SCH"
        },
        {
            name: "AST"
        },
        {
            name: "SGE"
        },
        {
            name: "MNK"
        },
        {
            name: "DRG"
        },
        {
            name: "NIN"
        },
        {
            name: "SAM"
        },
        {
            name: "RPR"
        },
        {
            name: "BRD"
        },
        {
            name: "MCH"
        },
        {
            name: "DNC"
        },
        {
            name: "BLM"
        },
        {
            name: "SMN"
        },
        {
            name: "RDM"
        },
    ]
    let selectedIndex = props.selectedJob ? items.findIndex( i => i.name === props.selectedJob ) : 0;
    return (
        <BaseDropdown items={items} onChange={onChange} value={props.selectedJob} width='100px'/>
    );
}

JobSelector.defaultProps = {
    items: []
}

JobSelector.propTypes = {
    items: PropTypes.array.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
}

export default JobSelector;