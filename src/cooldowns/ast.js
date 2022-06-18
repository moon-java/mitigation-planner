import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const astSkills =
[
    {
        skillId: 'essential_dignity',
        name: 'Essential Dignity',
        imgFile: skillIcons['essential_dignity'].icon,
        imgColor: skillIcons['essential_dignity'].color,
        level: 15,
        cooldown: 40,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 400,
                duration: 0
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Potency increases up to 900 as target HP decreases, maxing out at <= 30% max"
            },
        ]
    },
    {
        skillId: 'synastry',
        name: 'Synastry',
        imgFile: skillIcons['synastry'].icon,
        imgColor: skillIcons['synastry'].color,
        level: 50,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                duration: 20,
                note: "Each single-target healing spell cast on self or others heals target for 40% of original spell"
            },
        ]
    },
    {
        skillId: 'collective_unconscious',
        name: 'Collective Unconscious',
        imgFile: skillIcons['collective_unconscious'].icon,
        imgColor: skillIcons['collective_unconscious'].color,
        level: 58,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 18
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 100,
                duration: 15
            }
        ]
    },
    {
        skillId: 'celestial_opposition',
        name: 'Celestial Opposition',
        imgFile: skillIcons['celestial_opposition'].icon,
        imgColor: skillIcons['celestial_opposition'].color,
        level: 60,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 200,
                duration: 0
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 100,
                duration: 15
            }
        ]
    },
    {
        skillId: 'earthly_star',
        name: 'Earthly Star',
        imgFile: skillIcons['earthly_star'].icon,
        imgColor: skillIcons['earthly_star'].color,
        level: 62,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Heals for 540 potency if detonated in under 10s; heals for 720 potency if detonated after 10s",
                duration: 20
            }
        ]
    },
    {
        skillId: 'celestial_intersection',
        name: 'Celestial Intersection',
        imgFile: skillIcons['celestial_intersection'].icon,
        imgColor: skillIcons['celestial_intersection'].color,
        level: 74,
        cooldown: 30,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 200,
                duration: 0
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.POTENCY,
                value: 400,
                duration: 30
            }
        ]
    },
    {
        skillId: 'horoscope',
        name: 'Horoscope',
        imgFile: skillIcons['horoscope'].icon,
        imgColor: skillIcons['horoscope'].color,
        level: 76,
        cooldown: 30,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.DELAYED_HEAL,
                valueType: valueTypes.POTENCY,
                value: 400,
                duration: 30
            }
        ]
    },
    {
        skillId: 'neutral_sect',
        name: 'Neutral Sect',
        imgFile: skillIcons['neutral_sect'].icon,
        imgColor: skillIcons['neutral_sect'].color,
        level: 80,
        cooldown: 120,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_OUT,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 20
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Add 250% shield to Aspected Benefic and 125% shield to Aspected Helios",
                duration: 30
            }
        ]
    },
    {
        skillId: 'exaltation',
        name: 'Exaltation',
        imgFile: skillIcons['exaltation'].icon,
        imgColor: skillIcons['exaltation'].color,
        level: 86,
        cooldown: 60,
        effects:
        [
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
                effect: effects.DELAYED_HEAL,
                valueType: valueTypes.POTENCY,
                value: 500,
                duration: 8
            }
        ]
    },
    {
        skillId: 'macrocosmos',
        name: 'Macrocosmos',
        imgFile: skillIcons['macrocosmos'].icon,
        imgColor: skillIcons['macrocosmos'].color,
        level: 90,
        cooldown: 180,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Compiles damage taken while active, heals for 50% damage taken + 200 potency upon expiration",
                duration: 15
            }
        ]
    },
]

export default astSkills;