import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const tankSkills =
[
    {
        skillId: 'rampart',
        name: 'Rampart',
        imgFile: skillIcons['rampart'].icon,
        imgColor: skillIcons['rampart'].color,
        level: 8,
        cooldown: 90,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 20
            }
        ]
    },
    {
        skillId: 'low_blow',
        name: 'Low Blow',
        imgFile: skillIcons['low_blow'].icon,
        imgColor: skillIcons['low_blow'].color,
        level: 12,
        cooldown: 25,
        effects:
        [
            {
                target: targets.ENEMY,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                valueType: valueTypes.NONE,
                value: 0,
                duration: 5,
                note: "Stuns target"
            }
        ]
    },
    {
        skillId: 'interject',
        name: 'Interject',
        imgFile: skillIcons['interject'].icon,
        imgColor: skillIcons['interject'].color,
        level: 18,
        cooldown: 30,
        effects:
        [
            {
                target: targets.ENEMY,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                valueType: valueTypes.NONE,
                value: 0,
                duration: 0,
                note: "Interrupts use of the target's action"
            }
        ]
    },
    {
        skillId: 'reprisal',
        name: 'Reprisal',
        imgFile: skillIcons['reprisal'].icon,
        imgColor: skillIcons['reprisal'].color,
        level: 22,
        cooldown: 60,
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
    {
        skillId: 'arms_length',
        name: "Arm's Length",
        imgFile: skillIcons['arms_length'].icon,
        imgColor: skillIcons['arms_length'].color,
        level: 32,
        cooldown: 120,
        effects:
        [
            {
                target: targets.NONE,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                valueType: valueTypes.NONE,
                value: 0,
                duration: 6,
                note: "Prevents most knockback and draw-in effects"
            }
        ]
    }
];

export default tankSkills;