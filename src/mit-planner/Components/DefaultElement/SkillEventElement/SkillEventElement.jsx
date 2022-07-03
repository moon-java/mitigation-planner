import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './SkillEventElement.module.css';

const SkillEventElement = props => {
    const [effectBoxes, setEffects] = useState();

    useEffect(() => {
        const newEffectBoxes = props.item.effects.map((effect, index) => {

            const position = props.item.startTime;
            let width = effect.duration * 20;
            let height = 50 / props.item.effects.length;

            return (
                <div className={classes.ItemFlex}
                    key={props.item.id + ` ` + index}
                    style={{
                    display: `flex`,
                    flexDirection: `row`,
                    justifyContent: `left`,
                    height: `${height}px`,
                    alignItems: `center`,
                    width: `${width}px`,
                    backgroundColor: `${props.item.imgColor}`,
                    padding: `0px`}}/>
            );
        });

        setEffects( newEffectBoxes );
    }, [props.item]);

    let grayerColor = props.item.imgColor + '55'
    return (
        <div 
            className={[classes.SkillEventElement, props.className].join(' ')}
            style={{
                backgroundColor: grayerColor,
                ...props.style,
            }}
                
        >
            <img src={props.item.imgFile} width='40px' height='40px' style={{padding: `5px`, position: `absolute`}}/>
            <div>{effectBoxes}</div>
        </div>
    )
}

SkillEventElement.defaultProps = {
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

SkillEventElement.propTypes = {
    item: PropTypes.object.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    innerElement: PropTypes.bool,
    shadowed: PropTypes.bool
}

export default SkillEventElement;