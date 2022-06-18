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
]

export default mnkSkills;