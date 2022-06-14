import { targets, damageTypes, effects, valueTypes } from './constants.js';
import rampart from '../assets/skills/rampart.png'

export const drkSkills =
[
    {
        skillId: 1,
        name: 'Rampart',
        imgFile: rampart,
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
        imgFile: './assets/skills/reprisal.png',
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
        imgFile: './assets/skills/dark_missionary.png',
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