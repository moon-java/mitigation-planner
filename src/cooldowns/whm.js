import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import healerSkills from './healers.js';

export const whmSkills =
[
    ...healerSkills,
    {
        skillId: 'benediction',
        name: 'Benediction',
        imgFile: skillIcons['benediction'].icon,
        imgColor: skillIcons['benediction'].color,
        level: 50,
        cooldown: 180,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.PERCENT,
                value: 100,
                duration: 0
            }
        ]
    },
    {
        skillId: 'asylum',
        name: 'Asylum',
        imgFile: skillIcons['asylum'].icon,
        imgColor: skillIcons['asylum'].color,
        level: 52,
        maxApplicableLevel: 77,
        cooldown: 90,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 100,
                duration: 24
            }
        ]
    },
    {
        skillId: 'enhanced_asylum',
        name: 'Enhanced Asylum',
        imgFile: skillIcons['asylum'].icon,
        imgColor: skillIcons['asylum'].color,
        level: 78,
        cooldown: 90,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 100,
                duration: 24
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 24
            },
        ]
    },
    {
        skillId: 'assize',
        name: 'Assize',
        imgFile: skillIcons['assize'].icon,
        imgColor: skillIcons['assize'].color,
        level: 56,
        cooldown: 45,
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
        skillId: 'tetragrammaton',
        name: 'Tetragrammaton',
        imgFile: skillIcons['tetragrammaton'].icon,
        imgColor: skillIcons['tetragrammaton'].color,
        level: 60,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 700,
                duration: 0
            }
        ]
    },
    {
        skillId: 'divine_benison',
        name: 'Divine Benison',
        imgFile: skillIcons['divine_benison'].icon,
        imgColor: skillIcons['divine_benison'].color,
        level: 66,
        maxApplicableLevel: 87,
        cooldown: 30,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.POTENCY,
                value: 500,
                duration: 15
            }
        ]
    },
    {
        skillId: 'enhanced_divine_benison',
        name: 'Enhanced Divine Benison',
        imgFile: skillIcons['divine_benison'].icon,
        imgColor: skillIcons['divine_benison'].color,
        level: 88,
        cooldown: 30,
        maxConcurrentUses: 2,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.POTENCY,
                value: 500,
                duration: 15
            }
        ]
    },
    {
        skillId: 'plenary_indulgence',
        name: 'Plenary Indulgence',
        imgFile: skillIcons['plenary_indulgence'].icon,
        imgColor: skillIcons['plenary_indulgence'].color,
        level: 70,
        cooldown: 60,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Increases healing potency of Medica, Medica II, Cure III, or Afflatus Rapture by 200",
                duration: 10
            }
        ]
    },
    {
        skillId: 'temperance',
        name: 'Temperance',
        imgFile: skillIcons['temperance'].icon,
        imgColor: skillIcons['temperance'].color,
        level: 80,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 20
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_OUT,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 20
            }
        ]
    },
    {
        skillId: 'aquaveil',
        name: 'Aquaveil',
        imgFile: skillIcons['aquaveil'].icon,
        imgColor: skillIcons['aquaveil'].color,
        level: 86,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.ALL,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 15,
                duration: 8
            }
        ]
    },
    {
        skillId: 'liturgy_of_the_bell',
        name: 'Liturgy of the Bell',
        imgFile: skillIcons['liturgy_of_the_bell'].icon,
        imgColor: skillIcons['liturgy_of_the_bell'].color,
        level: 90,
        cooldown: 180,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Places a healing blosson and grants 5 stacks of Liturgy of the Bell",
                duration: 15
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Taking damage spends 1 stack and heals party for 400 potency",
                duration: 15
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Cure potency of 200 x number of remaining stacks applied upon expiration",
                duration: 15
            },
        ]
    },
]

export default whmSkills;