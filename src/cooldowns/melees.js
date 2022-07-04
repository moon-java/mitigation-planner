import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const meleeSkills =
[
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
        skillId: 'bloodbath',
        name: 'Bloodbath',
        imgFile: skillIcons['bloodbath'].icon,
        imgColor: skillIcons['bloodbath'].color,
        level: 12,
        cooldown: 90,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Converts a portion of physical damage dealt into HP",
                duration: 20
            }
        ]
    },
    {
        skillId: 'feint',
        name: 'Feint',
        imgFile: skillIcons['feint'].icon,
        imgColor: skillIcons['feint'].color,
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
            },
            {
                target: targets.ENEMY,
                damageType: damageTypes.MAGIC,
                effect: effects.DMG_OUT,
                valueType: valueTypes.PERCENT,
                value: 5,
                duration: 10
            },
        ]
    }
];

export default meleeSkills;