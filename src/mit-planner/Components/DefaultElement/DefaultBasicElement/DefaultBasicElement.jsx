import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './DefaultBasicElement.module.css';

const alpha = 0.7;

const DefaultBasicElement = props => {
    const content = props.useIcon ? <img src={props.item.imgFile}/> :
                                    <></>;
    const bgColor = props.useIcon ? props.item.imgColor : props.style.backgroundColor;
    return (
        <div 
            className={[classes.DefaultBasicElement, props.className].join(' ')}
            style={{
                ...props.style,
                backgroundColor: bgColor
            }}  
        >
                <div className={classes.Content}>
                    {content}
            </div>
            
        </div>
    )
}

DefaultBasicElement.defaultProps = {
    item: {
        id: null,
        content: {},
        description: '',
        startTime: '',
        endTime: '',
        type: 'range',
    },
    randomColor: false,
    innerElement: false,
    shadowed: false
}

DefaultBasicElement.propTypes = {
    item: PropTypes.object.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    innerElement: PropTypes.bool
}

export default DefaultBasicElement;