import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const mchSkills =
[
    {
        skillId: 1,
        name: 'Tactician',
        level: 56,
        cooldown: 90,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 15
            }
        ]
    },
]

export default mchSkills;