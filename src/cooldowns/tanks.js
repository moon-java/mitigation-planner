import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const tankSkills =
[
    {
        skillId: 'rampart',
        name: 'Rampart',
        imgFile: skillIcons['rampart'].icon,
        imgColor: skillIcons['rampart'].color,
        level: 8,
        cooldown: 90,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 20
            }
        ]
    },
    {
        skillId: 'reprisal',
        name: 'Reprisal',
        imgFile: skillIcons['reprisal'].icon,
        imgColor: skillIcons['reprisal'].color,
        level: 22,
        cooldown: 60,
        effects:
        [
            {
                target: targets.ENEMY,
                damageType: damageTypes.ALL,
                effect: effects.DMG_OUT,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            }
        ]
    }
];

export default tankSkills;