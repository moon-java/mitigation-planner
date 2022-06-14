import React from 'react';
import PropTypes from 'prop-types';

const BaseDropdown = props => {
    let options = [];
    for (var item in props.items)
    {
        options.push(<option>{props.items[item].name}</option>);
    }  
    return (
        <select onChange={props.onChange} style={{margin: `auto` }} value={props.value}>
            {options}
        </select>
    );
}

BaseDropdown.defaultProps = {
    items: []
}

BaseDropdown.propTypes = {
    items: PropTypes.array.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
}

export default BaseDropdown;