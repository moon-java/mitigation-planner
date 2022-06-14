import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const astSkills =
[
    {
        skillId: 1,
        name: 'Collective Unconscious',
        level: 58,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 18
            }
        ]
    },
]

export default astSkills;