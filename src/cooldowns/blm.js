import { targets, damageTypes, effects, valueTypes } from './constants.js';
import casterSkills from './casters.js';
import skillIcons from '../assets/skills/skillIcons';

export const blmSkills =
[
    ...casterSkills,
    {
        skillId: 'manaward',
        name: 'Manaward',
        imgFile: skillIcons['manaward'].icon,
        imgColor: skillIcons['manaward'].color,
        level: 30,
        cooldown: 120,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.PERCENT,
                value: 30,
                duration: 20
            },
        ]
    },
]

export default blmSkills;