import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import tankSkills from './tanks.js';

export const gnbSkills =
[
    ...tankSkills,
    {
        skillId: 'camouflage',
        name: 'Camouflage',
        imgFile: skillIcons['camouflage'].icon,
        imgColor: skillIcons['camouflage'].color,
        level: 6,
        cooldown: 90,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 20
            }
        ]
    },
    {
        skillId: 'nebula',
        name: 'Nebula',
        imgFile: skillIcons['nebula'].icon,
        imgColor: skillIcons['nebula'].color,
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
        skillId: 'aurora',
        name: 'Aurora',
        imgFile: skillIcons['aurora'].icon,
        imgColor: skillIcons['aurora'].color,
        level: 45,
        cooldown: 60,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 200,
                duration: 18
            }
        ]
    },
    {
        skillId: 'superbolide',
        name: 'Superbolide',
        imgFile: skillIcons['superbolide'].icon,
        imgColor: skillIcons['superbolide'].color,
        level: 50,
        cooldown: 360,
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
        skillId: 'heart_of_light',
        name: 'Heart of Light',
        imgFile: skillIcons['heart_of_light'].icon,
        imgColor: skillIcons['heart_of_light'].color,
        level: 64,
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
        skillId: 'heart_of_corundum',
        name: 'Heart of Corundum',
        imgFile: skillIcons['heart_of_corundum'].icon,
        imgColor: skillIcons['heart_of_corundum'].color,
        level: 82,
        cooldown: 25,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 15,
                duration: 4
            },
            {
                target: targets.SELF,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 15,
                duration: 8
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 900,
                duration: 20
            },
        ]
    }
];

export default gnbSkills;