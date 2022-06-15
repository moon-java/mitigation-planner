import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import tankSkills from './tanks'

export const drkSkills =
[
    ...tankSkills,
    {
        skillId: 'shadow_wall',
        name: 'Shadow Wall',
        imgFile: skillIcons['shadow_wall'].icon,
        imgColor: skillIcons['shadow_wall'].color,
        level: 38,
        cooldown: 120,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 30,
                duration: 15
            }
        ]
    },
    {
        skillId: 'dark_mind',
        name: 'Dark Mind',
        imgFile: skillIcons['dark_mind'].icon,
        imgColor: skillIcons['dark_mind'].color,
        level: 45,
        cooldown: 60,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.MAGIC,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 10
            }
        ]
    },
    {
        skillId: 'living_dead',
        name: 'Living Dead',
        imgFile: skillIcons['living_dead'].icon,
        imgColor: skillIcons['living_dead'].color,
        level: 50,
        cooldown: 300,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 100,
                duration: 20
            }
        ]
    },
    {
        skillId: 'the_blackest_night',
        name: 'The Blackest Night',
        imgFile: skillIcons['the_blackest_night'].icon,
        imgColor: skillIcons['the_blackest_night'].color,
        level: 70,
        cooldown: 15,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.SHIELD,
                valueType: valueTypes.PERCENT,
                value: 25,
                duration: 7
            }
        ]
    },
    {
        skillId: 'dark_missionary',
        name: 'Dark Missionary',
        imgFile: skillIcons['dark_missionary'].icon,
        imgColor: skillIcons['dark_missionary'].color,
        level: 76,
        cooldown: 90,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.MAGIC,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 15
            }
        ]
    },
    {
        skillId: 'oblation',
        name: 'Oblation',
        imgFile: skillIcons['oblation'].icon,
        imgColor: skillIcons['oblation'].color,
        level: 82,
        cooldown: 60,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            }
        ]
    },
];

export default drkSkills;