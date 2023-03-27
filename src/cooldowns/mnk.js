import { targets, damageTypes, effects, valueTypes } from './constants.js';
import meleeSkills from './melees.js';
import skillIcons from '../assets/skills/skillIcons';

export const mnkSkills =
[
    ...meleeSkills,
    {
        skillId: 'mantra',
        name: 'Mantra',
        imgFile: skillIcons['mantra'].icon,
        imgColor: skillIcons['mantra'].color,
        level: 42,
        cooldown: 90,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 15
            }
        ]
    },
    {
        skillId: 'riddle_of_earth',
        name: 'Riddle of Earth',
        imgFile: skillIcons['riddle_of_earth'].icon,
        imgColor: skillIcons['riddle_of_earth'].color,
        level: 64,
        cooldown: 120,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 10
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 100,
                duration: 15
            },
        ]
    },
]

export default mnkSkills;