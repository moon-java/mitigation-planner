import React from 'react';
import PropTypes from 'prop-types';

import { rgbaFromArray } from '../../../Helpers/Functions';
import classes from './DefaultBasicElement.module.css';

const alpha = 0.7;
const defaultColors = {
    outerElement : [204, 204, 204],
    innerElement : [70, 130, 180]
}

const DefaultBasicElement = props => {
    return (
        <div 
            className={[classes.DefaultBasicElement, props.className].join(' ')}
            style={{
                background: props.innerElement ? rgbaFromArray( props.bgColor, alpha ): rgbaFromArray(defaultColors.outerElement, alpha),
                boxShadow: props.shadowed ?'4px 4px 6px -6px rgba(0,0,0,0.75)' :  'none',
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
    shadowed: false,
    bgColor: defaultColors.innerElement
}

DefaultBasicElement.propTypes = {
    item: PropTypes.object.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    innerElement: PropTypes.bool,
    bgColor: PropTypes.array,
    shadowed: PropTypes.bool
}

export default DefaultBasicElement;