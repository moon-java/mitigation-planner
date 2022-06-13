import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const dncSkills =
[
    {
        skillId: 1,
        name: 'Shield Samba',
        target: targets.PARTY,
        damageType: damageTypes.ALL,
        level: 56,
        effect: effects.DMG_IN,
        valueType: valueTypes.PERCENT,
        value: 10,
        duration: 15,
        cooldown: 90
    },
]

export default dncSkills;