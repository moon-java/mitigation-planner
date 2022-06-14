import React from 'react';
import PropTypes from 'prop-types';

import { rgbaFromArray } from '../../../Helpers/Functions';
import classes from './DefaultBasicElement.module.css';

const alpha = 0.7;

const DefaultBasicElement = props => {
    return (
        <div 
            className={[classes.DefaultBasicElement, props.className].join(' ')}
            style={{
                ...props.style,
            }}
                
        >
            <div className={classes.ItemFlex}>
                <div className={classes.Content}>
                    <div className={classes.Line1}>
                        {props.item.name}
                    </div>
                </div>
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