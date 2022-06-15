import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const casterSkills =
[
    {
        skillId: 'addle',
        name: 'Addle',
        imgFile: skillIcons['addle'].icon,
        imgColor: skillIcons['addle'].color,
        level: 8,
        cooldown: 90,
        effects:
        [
            {
                target: targets.ENEMY,
                damageType: damageTypes.MAGIC,
                effect: effects.DMG_OUT,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            },
            {
                target: targets.ENEMY,
                damageType: damageTypes.PHYS,
                effect: effects.DMG_OUT,
                valueType: valueTypes.PERCENT,
                value: 5,
                duration: 10
            },
        ]
    }
];

export default casterSkills;