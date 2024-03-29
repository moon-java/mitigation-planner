import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import rangedSkills from './ranged.js';

export const mchSkills =
[
    ...rangedSkills,
    {
        skillId: 'tactician',
        name: 'Tactician',
        imgFile: skillIcons['tactician'].icon,
        imgColor: skillIcons['tactician'].color,
        level: 56,
        maxApplicableLevel: 87,
        cooldown: 120,
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
    {
        skillId: 'enhanced_tactician',
        name: 'Enhanced Tactician',
        imgFile: skillIcons['tactician'].icon,
        imgColor: skillIcons['tactician'].color,
        level: 88,
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
    {
        skillId: 'dismantle',
        name: 'Dismantle',
        imgFile: skillIcons['dismantle'].icon,
        imgColor: skillIcons['dismantle'].color,
        level: 62,
        cooldown: 120,
        effects:
        [
            {
                target: targets.ENEMY,
                damageType: damageTypes.ALL,
                effect: effects.DMG_OUT,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            }
        ]
    },
]

export default mchSkills;