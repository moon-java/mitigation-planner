import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const rdmSkills =
[
    {
        skillId: 1,
        name: 'Addle',
        level: 8,
        cooldown: 90,
        effects:
        [
            {
                target: targets.ENEMY,
                damageType: damageTypes.MAGIC,
                effect: effects.DMG_OUT,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            }
        ]
    },
]

export default rdmSkills;