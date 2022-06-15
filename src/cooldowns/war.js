import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import tankSkills from './tanks.js';

export const warSkills =
[
    ...tankSkills,
    {
        skillId: 'thrill_of_battle',
        name: 'Thrill of Battle',
        imgFile: skillIcons['thrill_of_battle'].icon,
        imgColor: skillIcons['thrill_of_battle'].color,
        level: 30,
        cooldown: 90,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.MAX_HP,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 10
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_IN,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 10
            },
        ]
    },
    {
        skillId: 'vengeance',
        name: 'Vengeance',
        imgFile: skillIcons['vengeance'].icon,
        imgColor: skillIcons['vengeance'].color,
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
        skillId: 'holmgang',
        name: 'Holmgang',
        imgFile: skillIcons['holmgang'].icon,
        imgColor: skillIcons['holmgang'].color,
        level: 50,
        cooldown: 240,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 100,
                duration: 10
            }
        ]
    },
    {
        skillId: 'raw_intuition',
        name: 'Raw Intuition',
        imgFile: skillIcons['raw_intuition'].icon,
        imgColor: skillIcons['raw_intuition'].color,
        level: 56,
        cooldown: 25,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 6
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 400,
                duration: 6
            },
        ]
    },
    {
        skillId: 'equilibrium',
        name: 'Equilibrium',
        imgFile: skillIcons['equilibrium'].icon,
        imgColor: skillIcons['equilibrium'].color,
        level: 58,
        cooldown: 60,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 1200,
                duration: 1
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 200,
                duration: 15
            },
        ]
    },
    {
        skillId: 'shake_it_off',
        name: 'Shake It Off',
        imgFile: skillIcons['shake_it_off'].icon,
        imgColor: skillIcons['shake_it_off'].color,
        level: 68,
        cooldown: 90,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.PERCENT,
                value: 15,
                duration: 15
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 300,
                duration: 15
            },
        ]
    },
    {
        skillId: 'nascent_flash',
        name: 'Nascent Flash',
        imgFile: skillIcons['nascent_flash'].icon,
        imgColor: skillIcons['nascent_flash'].color,
        level: 76,
        cooldown: 25,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 4
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 400,
                duration: 8
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 400,
                duration: 8
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 8
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.POTENCY,
                value: 400,
                duration: 20
            },
        ]
    },
    {
        skillId: 'bloodwhetting',
        name: 'Bloodwhetting',
        imgFile: skillIcons['bloodwhetting'].icon,
        imgColor: skillIcons['bloodwhetting'].color,
        level: 82,
        cooldown: 25,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 4
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 400,
                duration: 8
            },
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 8
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.POTENCY,
                value: 400,
                duration: 20
            },
        ]
    }
];

export default warSkills;