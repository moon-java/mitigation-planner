import React from 'react';
import PropTypes from 'prop-types';

import * as helpers from '../../Helpers/Functions';
import DropZone from '../DropZone/DropZone';
import classes from './TimeGrid.module.css';

export const MARGIN = 0;

const TimeGrid = props => {

    const { width, offset, ...rest} = props;
    const daysDropGrid = [];
    const timelineGrid = [];

    const effectiveWidth = width - offset;

    let style = {
        width: effectiveWidth / 30
    };
    let style2 = {
        width: effectiveWidth / 300 - 1,
        backgroundColor: `#7787a8`,
        height: `${props.height}`
    };

    for( let i = 1; i <= props.duration; i++ )
    {
        if ( i % 5 === 0 ) {
            style = {...style, borderRight: 'solid #e5e5e5'};
            style2 = {...style2, borderRight: 'solid #556586'};
        }
        else {
            style = {...style, borderRight: 'solid #f5f5f5'};
            style2 = {...style2, borderRight: 'solid #6e7e9e'};
        }
        let innerDiv = "";
        if (i % 15 == 0) { innerDiv = <div style={{verticalAlign: 'bottom', color: 'black', fontSize:'10px'}}>{i}</div>; }

        daysDropGrid.push(
            <DropZone 
                {...rest}
                style={style}
                key={`grid_${i}`}
                time={i}
                canDropItem={props.canDropItem}
            />
        ) 
        timelineGrid.push(        
        <div
            style={style2}
            key={`timeline_${i}`}>
                {innerDiv}
        </div>)
    }

    const borderSytle = {
        borderBottom: 'solid #556586',
    }
    
    return (
        <div 
            className={classes.TimeGrid} 
            style={{
                width: effectiveWidth,
                left: offset,
            }}
        >
            <div 
                className={classes.MonthWrapper}
                style={{
                    ...props.style,
                    ...borderSytle,
                    width: effectiveWidth,
                    height: props.height
                    }}
                >
                {timelineGrid}
            </div>
            <div 
                className={classes.DropZones} 
                style={{
                    ...props.style,
                    ...borderSytle,
                    width: effectiveWidth
                    }}
                >
                {daysDropGrid}
            </div>

        </div>
    )
}

TimeGrid.defaultProps = {
    width: 0,
    grouped: false,
    index: 0,
    offset: 0,
};

TimeGrid.propTypes = {
    width: PropTypes.number,
    onDrop: PropTypes.func,
    grouped: PropTypes.bool,
    index: PropTypes.number,
    offset: PropTypes.number,
    duration: PropTypes.number,
}

export default TimeGrid;