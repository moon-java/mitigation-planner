import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import casterSkills from './casters.js';

export const rdmSkills =
[
    ...casterSkills,
    {
        skillId: 'magick_barrier',
        name: 'Magick Barrier',
        imgFile: skillIcons['magick_barrier'].icon,
        imgColor: skillIcons['magick_barrier'].color,
        level: 86,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.MAGIC,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_IN,
                valueType: valueTypes.PERCENT,
                value: 5,
                duration: 10
            },
        ]
    }
]

export default rdmSkills;