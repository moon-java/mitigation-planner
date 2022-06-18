import React from 'react';
import PropTypes from 'prop-types';

import * as helpers from '../../Helpers/ColorHelpers';
import DropZone from '../DropZone/DropZone';
import classes from './TimeGrid.module.css';

export const MARGIN = 0;

const TimeGrid = props => {
    const { width, offset, ...rest} = props;
    const daysDropGrid = [];
    const timelineGrid = [];

    const effectiveWidth = width - offset;

    let style = {
        width: '20px'
    };
    let style2 = {
        width: '20px',
        backgroundColor: `#575a5c`,
        height: `100%`
    };

    for( let i = 1; i <= props.duration; i++ )
    {
        if ( i % 5 === 0 ) {
            style = {...style, borderRight: 'solid #a0a0a0'};
            style2 = {...style2, borderRight: 'solid #a0a0a0'};
        }
        else {
            style = {...style, borderRight: 'solid #404040'};
            style2 = {...style2, borderRight: 'solid #404040'};
        }
        let innerDiv = "";
        if (i % 15 == 0) { innerDiv = <div style={{verticalAlign: 'bottom', color: 'black', fontSize:'9px'}}>{i}</div>; }

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
        borderBottom: 'solid #404040',
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
                    height: props.height, zIndex: 2
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