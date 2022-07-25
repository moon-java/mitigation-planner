import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const rangedSkills =
[
    {
        skillId: 'leg_graze',
        name: "Leg Graze",
        imgFile: skillIcons['leg_graze'].icon,
        imgColor: skillIcons['leg_graze'].color,
        level: 6,
        cooldown: 30,
        effects:
        [
            {
                target: targets.NONE,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                valueType: valueTypes.NONE,
                value: 0,
                duration: 10,
                note: "Afflicts target with Heavy +40%"
            }
        ]
    },
    {
        skillId: 'second_wind',
        name: 'Second Wind',
        imgFile: skillIcons['second_wind'].icon,
        imgColor: skillIcons['second_wind'].color,
        level: 8,
        cooldown: 120,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 500,
                duration: 0
            }
        ]
    },
    {
        skillId: 'foot_graze',
        name: "Foot Graze",
        imgFile: skillIcons['foot_graze'].icon,
        imgColor: skillIcons['foot_graze'].color,
        level: 10,
        cooldown: 30,
        effects:
        [
            {
                target: targets.NONE,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                valueType: valueTypes.NONE,
                value: 0,
                duration: 10,
                note: "Binds target; target unbound if damage taken"
            }
        ]
    },
    {
        skillId: 'head_graze',
        name: "Head Graze",
        imgFile: skillIcons['head_graze'].icon,
        imgColor: skillIcons['head_graze'].color,
        level: 24,
        cooldown: 30,
        effects:
        [
            {
                target: targets.NONE,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                valueType: valueTypes.NONE,
                value: 0,
                duration: 10,
                note: "Interrupts use of the target's action"
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
    },
];

export default rangedSkills;