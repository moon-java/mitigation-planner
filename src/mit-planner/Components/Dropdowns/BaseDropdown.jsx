import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const BaseDropdown = props => {
    let options = [];
    for (var item in props.items)
    {
        options.push({ value: props.items[item].name, label: props.items[item].name});
    }


  let styles = {
    option: (provided, { isFocused, isSelected }) => ({
        ...provided,
        color: isFocused ? 'blue' : 'black',
        padding: 5,
      })

  };

    return (
        <div style={{width: props.width, zIndex: 500, marginLeft: 40}}>
        <Select onChange={props.onChange}
                options={options}
                defaultValue={{value: props.items[0].name, label: props.items[0].name}}
                styles={styles}/>
        </div>
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