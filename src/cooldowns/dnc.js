import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import rangedSkills from './ranged.js';

export const dncSkills =
[
    ...rangedSkills,
    {
        skillId: 'curing_waltz',
        name: 'Curing Waltz',
        imgFile: skillIcons['curing_waltz'].icon,
        imgColor: skillIcons['curing_waltz'].color,
        level: 52,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 300,
                duration: 0
            }
        ]
    },
    {
        skillId: 'shield_samba',
        name: 'Shield Samba',
        imgFile: skillIcons['shield_samba'].icon,
        imgColor: skillIcons['shield_samba'].color,
        level: 56,
        maxApplicableLevel: 87,
        cooldown: 120,
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
    {
        skillId: 'enhanced_shield_samba',
        name: 'Enhanced Shield Samba',
        imgFile: skillIcons['shield_samba'].icon,
        imgColor: skillIcons['shield_samba'].color,
        level: 88,
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
    {
        skillId: 'improvisation',
        name: 'Improvisation',
        imgFile: skillIcons['improvisation'].icon,
        imgColor: skillIcons['improvisation'].color,
        level: 80,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 100,
                duration: 15
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Generate stacks of Rising Rhythym every 3s while active, up to 4 stacks",
                duration: 15
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Apply 30s shield to party based on Rising Rhythym stacks: 0 = 5%, 1 = 6%, 2 = 7%, 3 = 8%, 4 = 10%",
                duration: 30
            }
        ]
    },
]

export default dncSkills;