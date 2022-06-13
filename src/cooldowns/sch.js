import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const schSkills =
[
    {
        skillId: 1,
        name: 'Sacred Soil',
        target: targets.PARTY,
        damageType: damageTypes.ALL,
        level: 50,
        effect: effects.DMG_IN,
        valueType: valueTypes.PERCENT,
        value: 10,
        duration: 15,
        cooldown: 30
    },
]

export default schSkills;