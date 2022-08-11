import React from 'react';
import PropTypes from 'prop-types';
import classes from './DefaultBasicElement.module.css';


const alpha = 0.7;

const DefaultBasicElement = props => {
    const content = props.useIcon ? <img src={props.item.imgFile} style={{ width: '25px', height: '25px', padding: '2px' }} /> :
        <></>;
    const bgColor = props.useIcon ? props.item.imgColor : props.style.backgroundColor;
    const height = props.useIcon ? 'fit-content' : '6px';
    return (
        <div
            className={[classes.DefaultBasicElement, props.className].join(' ')}
            style={{
                ...props.style,
                backgroundColor: bgColor,
                height: height
            }} >
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