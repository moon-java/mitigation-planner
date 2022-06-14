import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const drkSkills =
[
    {
        skillId: 1,
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
        skillId: 2,
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
    },
    {
        skillId: 3,
        name: 'Dark Missionary',
        imgFile: skillIcons['dark_missionary'].icon,
        imgColor: skillIcons['dark_missionary'].color,
        level: 76,
        cooldown: 90,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.MAGIC,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 15
            }
        ]
    }
];

export default drkSkills;