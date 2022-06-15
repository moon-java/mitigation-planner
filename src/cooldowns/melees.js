import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const meleeSkills =
[
    {
        skillId: 'feint',
        name: 'Feint',
        imgFile: skillIcons['feint'].icon,
        imgColor: skillIcons['feint'].color,
        level: 22,
        cooldown: 90,
        effects:
        [
            {
                target: targets.ENEMY,
                damageType: damageTypes.PHYS,
                effect: effects.DMG_OUT,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            },
            {
                target: targets.ENEMY,
                damageType: damageTypes.MAGIC,
                effect: effects.DMG_OUT,
                valueType: valueTypes.PERCENT,
                value: 5,
                duration: 10
            },
        ]
    }
];

export default meleeSkills;