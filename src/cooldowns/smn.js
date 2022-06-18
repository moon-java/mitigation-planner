import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import casterSkills from './casters.js';

export const smnSkills =
[
    ...casterSkills,
    {
        skillId: 'radiant_aegis',
        name: 'Radiant Aegis',
        imgFile: skillIcons['radiant_aegis'].icon,
        imgColor: skillIcons['radiant_aegis'].color,
        level: 2,
        cooldown: 60,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 30
            }
        ]
    },
]

export default smnSkills;