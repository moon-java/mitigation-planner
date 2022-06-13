import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const drkSkills =
[
    {
        skillId: 1,
        name: 'Rampart',
        target: targets.SELF,
        damageType: damageTypes.ALL,
        level: 8,
        effect: effects.DMG_IN,
        valueType: valueTypes.PERCENT,
        value: 20,
        duration: 20,
        cooldown: 90
    },
    {
        skillId: 2,
        name: 'Reprisal',
        target: targets.ENEMY,
        damageType: damageTypes.ALL,
        level: 22,
        effect: effects.DMG_OUT,
        valueType: valueTypes.PERCENT,
        value: 10,
        duration: 10,
        cooldown: 60
    },
    {
        skillId: 3,
        name: 'Dark Missionary',
        target: targets.PARTY,
        damageType: damageTypes.MAGIC,
        level: 76,
        effect: effects.DMG_IN,
        valueType: valueTypes.PERCENT,
        value: 10,
        duration: 15,
        cooldown: 90
    }
];

export default drkSkills;