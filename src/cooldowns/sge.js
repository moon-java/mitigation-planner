import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const sgeSkills =
[
    {
        skillId: 1,
        name: 'Kerachole',
        level: 50,
        cooldown: 30,
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

export default sgeSkills;