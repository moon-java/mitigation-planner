import React from 'react';
import PropTypes from 'prop-types';
import BaseDropdown from './BaseDropdown';

const CategorySelector = props => {
    let items = [];
    props.categories.forEach(category => {
        items.push({name: category.name, id: category.id});
    });

    let onChange = (e) => {
        let category = items.find(item => item.name == e.target.value);
        props.onCategoryChange(category.id);
    };
    return (
        <BaseDropdown items={items} onChange={onChange} value={props.value}/>
    );
}

CategorySelector.defaultProps = {
    items: []
}

CategorySelector.propTypes = {
    items: PropTypes.array.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
}

export default CategorySelector;