import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { rgbaFromArray } from '../../../Helpers/Functions';
import classes from './SkillEventElement.module.css';

const alpha = 0.7;
const defaultColors = {
    outerElement : [204, 204, 204],
    innerElement : [70, 130, 180]
}

const SkillEventElement = props => {
    const [effectBoxes, setEffects] = useState();

    useEffect(() => {
        const newEffectBoxes = props.item.effects.map((effect, index) => {

            const position = props.item.startTime;
            let width = effect.duration * 20;
            let height = 40 / props.item.effects.length;

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
                    backgroundColor: `#918966`,
                    padding: `0px`}}/>
            );
        });

        setEffects( newEffectBoxes );
    }, [props.item]);

    return (
        <div 
            className={[classes.SkillEventElement, props.className].join(' ')}
            style={{
                backgroundColor: 'rgba(190, 170, 150, 0.5)',
                ...props.style,
            }}
                
        >
            <img src={props.item.imgFile} style={{paddingLeft: `5px`, position: `absolute`}}/>
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