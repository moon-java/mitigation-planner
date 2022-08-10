import React from 'react';
import PropTypes from 'prop-types';
import DropZone from '../DropZone/DropZone';
import classes from './TimeGrid.module.css';

export const MARGIN = 0;

const TimeGrid = props => {
    const { width, offset, ...rest} = props;
    const skillsDropGrid = [];
    const fightTimelineGrid = [];

    let skillsGridCellStyle = {
        width: '20px'
    };
    let fightTimelineGridCellStyle = {
        width: '20px',
        backgroundColor: `#575a5c`,
        borderBottom: `1px solid #404040`,
        height: `100%`
    };

    for( let i = props.prepullTime + 1; i <= props.duration; i++ )
    {
        if ( i % 5 === 0 ) {
            skillsGridCellStyle = {...skillsGridCellStyle, borderRight: 'solid 1.5px #707070'};
            fightTimelineGridCellStyle = {...fightTimelineGridCellStyle, borderRight: 'solid 1.5px #707070', boxSizing: 'border-box'};
        }
        else {
            skillsGridCellStyle = {...skillsGridCellStyle, borderRight: 'solid 1.5px #404040'};
            fightTimelineGridCellStyle = {...fightTimelineGridCellStyle, borderRight: 'solid 1.5px #404040', boxSizing: 'border-box'};
        }
        let innerDiv = "";
        if (i % 60 === 0) { innerDiv = <div style={{verticalAlign: 'bottom', color: '#202020', fontSize:'10px', width: '20px', boxSizing: 'border-box'}}>{i / 60}m</div>; }
        else if (i % 15 === 0) { innerDiv = <div style={{verticalAlign: 'bottom', color: '#202020', fontSize:'10px', width: '20px', boxSizing: 'border-box'}}>{i % 60}</div>; }

        skillsDropGrid.push(
            <DropZone 
                {...rest}
                style={skillsGridCellStyle}
                key={`grid_${i}`}
                time={i}
                canDropItem={props.canDropItem}
                items={props.items}
            />
        ) 
        fightTimelineGrid.push(        
        <div
            style={fightTimelineGridCellStyle}
            key={`timeline_${i}`}>
                {innerDiv}
        </div>)
    }

    const borderStyle = {
        borderBottom: 'solid #404040',
    }
    
    return (
        <div 
            className={classes.TimeGrid} 
            style={{
                width: props.width,
                left: offset,
            }}
            >
            <div 
                className={classes.FightTimelineGrid}
                style={{
                    ...props.style,
                    ...borderStyle,
                    height: props.height, zIndex: 2,
                    width: props.width,
                    right: 0
                    }}
                >
                {fightTimelineGrid}
            </div>
            <div 
                className={classes.SkillDropZones} 
                style={{
                    ...props.style,
                    ...borderStyle,
                    right: 0,
                    width: props.width
                    }}
                >
                {skillsDropGrid}
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