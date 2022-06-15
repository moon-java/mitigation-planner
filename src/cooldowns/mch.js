import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const mchSkills =
[
    {
        skillId: 'tactician',
        name: 'Tactician',
        imgFile: skillIcons['tactician'].icon,
        imgColor: skillIcons['tactician'].color,
        level: 56,
        cooldown: 90,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 15
            }
        ]
    },
]

export default mchSkills;