import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const mchSkills =
[
    {
        skillId: 1,
        name: 'Tactician',
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

export default mchSkills;