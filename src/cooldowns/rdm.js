import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const rdmSkills =
[
    {
        skillId: 1,
        name: 'Addle',
        target: targets.ENEMY,
        damageType: damageTypes.MAGIC,
        level: 8,
        effect: effects.DMG_OUT,
        valueType: valueTypes.PERCENT,
        value: 10,
        duration: 10,
        cooldown: 90
    },
]

export default rdmSkills;