import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const pldSkills =
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
    }
];

export default pldSkills;