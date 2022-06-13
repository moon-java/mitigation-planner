import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const mnkSkills =
[
    {
        skillId: 1,
        name: 'Feint',
        target: targets.ENEMY,
        damageType: damageTypes.PHYS,
        level: 22,
        effect: effects.DMG_OUT,
        valueType: valueTypes.PERCENT,
        value: 10,
        duration: 10,
        cooldown: 90
    },
]

export default mnkSkills;