import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const healerSkills =
[
    {
        skillId: 'swiftcast',
        name: "Swiftcast",
        imgFile: skillIcons['swiftcast'].icon,
        imgColor: skillIcons['swiftcast'].color,
        level: 18,
        cooldown: 60,
        effects:
        [
            {
                target: targets.NONE,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                valueType: valueTypes.NONE,
                value: 0,
                duration: 10,
                note: "Next spell is cast immediately"
            }
        ]
    },
    {
        skillId: 'surecast',
        name: "Surecast",
        imgFile: skillIcons['surecast'].icon,
        imgColor: skillIcons['surecast'].color,
        level: 44,
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
    {
        skillId: 'rescue',
        name: "Rescue",
        imgFile: skillIcons['rescue'].icon,
        imgColor: skillIcons['rescue'].color,
        level: 48,
        cooldown: 120,
        effects:
        [
            {
                target: targets.NONE,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                valueType: valueTypes.NONE,
                value: 0,
                duration: 0,
                note: "Draw target party member to your side"
            }
        ]
    }
];

export default healerSkills;