import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const brdSkills =
[
    {
        skillId: 'troubadour',
        name: 'Troubadour',
        imgFile: skillIcons['troubadour'].icon,
        imgColor: skillIcons['troubadour'].color,
        level: 62,
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
]

export default brdSkills;