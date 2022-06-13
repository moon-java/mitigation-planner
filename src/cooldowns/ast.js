import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const astSkills =
[
    {
        skillId: 1,
        name: 'Collective Unconscious',
        target: targets.PARTY,
        damageType: damageTypes.ALL,
        level: 58,
        effect: effects.DMG_IN,
        valueType: valueTypes.PERCENT,
        value: 10,
        duration: 18,
        cooldown: 60
    },
]

export default astSkills;