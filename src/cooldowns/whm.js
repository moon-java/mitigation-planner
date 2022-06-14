import { targets, damageTypes, effects, valueTypes } from './constants.js';

export const whmSkills =
[
    {
        skillId: 1,
        name: 'Temperance',
        level: 80,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 20
            }
        ]
    },
]

export default whmSkills;