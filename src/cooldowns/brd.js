import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const brdSkills =
[
    {
        skillId: 1,
        name: 'Troubadour',
        target: targets.PARTY,
        damageType: damageTypes.ALL,
        level: 62,
        effect: effects.DMG_IN,
        valueType: valueTypes.PERCENT,
        value: 10,
        duration: 15,
        cooldown: 90
    },
]

export default brdSkills;