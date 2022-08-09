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
        maxApplicableLevel: 87,
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
    {
        skillId: 'enhanced_radiant_aegis',
        name: 'Enhanced Radiant Aegis',
        imgFile: skillIcons['radiant_aegis'].icon,
        imgColor: skillIcons['radiant_aegis'].color,
        level: 88,
        cooldown: 60,
        maxConcurrentUses: 2,
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