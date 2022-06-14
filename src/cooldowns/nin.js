import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const ninSkills =
[
    {
        skillId: 1,
        name: 'Feint',
        level: 22,
        cooldown: 90,
        effects:
        [
            {
                target: targets.ENEMY,
                damageType: damageTypes.PHYS,
                effect: effects.DMG_OUT,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            }
        ]
    },
]

export default ninSkills;