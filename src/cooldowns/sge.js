import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const sgeSkills =
[
    {
        skillId: 'soteria',
        name: 'Soteria',
        imgFile: skillIcons['soteria'].icon,
        imgColor: skillIcons['soteria'].color,
        level: 35,
        cooldown: 90,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Grants 4 stacks of Soteria, each increasing the cure potency of Kardion effects by 70%",
                duration: 15
            }
        ]
    },
    /*{
        skillId: 'icarus',
        name: 'Icarus',
        imgFile: skillIcons['icarus'].icon,
        imgColor: skillIcons['icarus'].color,
        level: 40,
        cooldown: 45,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Rush to target's location",
                duration: 0
            }
        ]
    },*/
    {
        skillId: 'kerachole',
        name: 'Kerachole',
        imgFile: skillIcons['kerachole'].icon,
        imgColor: skillIcons['kerachole'].color,
        level: 50,
        cooldown: 30,
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
        skillId: 'ixochole',
        name: 'Ixochole',
        imgFile: skillIcons['ixochole'].icon,
        imgColor: skillIcons['ixochole'].color,
        level: 42,
        cooldown: 30,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 400,
                duration: 0
            }
        ]
    },
    {
        skillId: 'zoe',
        name: 'Zoe',
        imgFile: skillIcons['zoe'].icon,
        imgColor: skillIcons['zoe'].color,
        level: 56,
        cooldown: 90,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Increase potency of next healing spell by 50%",
                duration: 30
            }
        ]
    },
    {
        skillId: 'pepsis',
        name: 'Pepsis',
        imgFile: skillIcons['pepsis'].icon,
        imgColor: skillIcons['pepsis'].color,
        level: 58,
        cooldown: 30,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Restore HP by removing Eukrasian Diagnosis (450 potency) or Eukrasian Prognosis (350 potency)",
                duration: 0
            }
        ]
    },
    {
        skillId: 'physis_ii',
        name: 'Physis II',
        imgFile: skillIcons['physis_ii'].icon,
        imgColor: skillIcons['physis_ii'].color,
        level: 60,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 130,
                duration: 15
            }
        ]
    },
    {
        skillId: 'taurochole',
        name: 'Taurochole',
        imgFile: skillIcons['taurochole'].icon,
        imgColor: skillIcons['taurochole'].color,
        level: 62,
        cooldown: 45,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 700,
                duration: 0
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 15
            }
        ]
    },
    {
        skillId: 'haima',
        name: 'Haima',
        imgFile: skillIcons['haima'].icon,
        imgColor: skillIcons['haima'].color,
        level: 70,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.POTENCY,
                value: 300,
                duration: 0
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Grants 5 stacks of Haimatinon; each stack renews shield when shield is consumed",
                duration: 15
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Cure potency of 150 x remaining Haimatinon stacks applied upon expiration",
                duration: 15
            }
        ]
    },
    {
        skillId: 'rhizomata',
        name: 'Rhizomata',
        imgFile: skillIcons['rhizomata'].icon,
        imgColor: skillIcons['rhizomata'].color,
        level: 74,
        cooldown: 90,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Grants 1 stack of Addersgall",
                duration: 0
            }
        ]
    },
    {
        skillId: 'holos',
        name: 'Holos',
        imgFile: skillIcons['holos'].icon,
        imgColor: skillIcons['holos'].color,
        level: 76,
        cooldown: 120,
        effects:
        [

            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 300,
                duration: 0
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 20
            }
        ]
    },
    {
        skillId: 'panhaima',
        name: 'Panhaima',
        imgFile: skillIcons['panhaima'].icon,
        imgColor: skillIcons['panhaima'].color,
        level: 80,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.POTENCY,
                value: 200,
                duration: 0
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Grants 5 stacks of Panhaimatinon; each stack renews shield when shield is consumed",
                duration: 15
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Cure potency of 200 x remaining Panhaimatinon stacks applied upon expiration",
                duration: 15
            }
        ]
    },
    {
        skillId: 'krasis',
        name: "Krasis",
        imgFile: skillIcons['krasis'].icon,
        imgColor: skillIcons['krasis'].color,
        level: 86,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_IN,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 10
            }
        ]
    },
    {
        skillId: 'pneuma',
        name: "Pneuma",
        imgFile: skillIcons['pneuma'].icon,
        imgColor: skillIcons['pneuma'].color,
        level: 90,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 600,
                duration: 0
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Additional 170 cure potency applied to Kardion target",
                duration: 0
            }
        ]
    },
]

export default sgeSkills;