import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const whmSkills =
[
    {
        skillId: 1,
        name: 'Temperance',
        target: targets.PARTY,
        damageType: damageTypes.ALL,
        level: 80,
        effect: effects.DMG_IN,
        valueType: valueTypes.PERCENT,
        value: 10,
        duration: 20,
        cooldown: 120
    },
]

export default whmSkills;