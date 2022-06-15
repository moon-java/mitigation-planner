import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const dncSkills =
[
    {
        skillId: 'shield_samba',
        name: 'Shield Samba',
        imgFile: skillIcons['shield_samba'].icon,
        imgColor: skillIcons['shield_samba'].color,
        level: 56,
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

export default dncSkills;