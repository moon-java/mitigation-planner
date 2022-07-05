import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';

export const brdSkills =
[
    {
        skillId: 'the_wardens_paean',
        name: "The Warden's Paean",
        imgFile: skillIcons['the_wardens_paean'].icon,
        imgColor: skillIcons['the_wardens_paean'].color,
        level: 35,
        cooldown: 45,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: "Remove one detrimental status effect or create a barrier nullifying the next status effect applied",
                duration: 30
            }
        ]
    },
    {
        skillId: 'troubadour',
        name: 'Troubadour',
        imgFile: skillIcons['troubadour'].icon,
        imgColor: skillIcons['troubadour'].color,
        level: 62,
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
        skillId: 'enhanced_troubadour',
        name: 'Enhanced Troubadour',
        imgFile: skillIcons['troubadour'].icon,
        imgColor: skillIcons['troubadour'].color,
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
        skillId: 'natures_minne',
        name: "Nature's Minne",
        imgFile: skillIcons['natures_minne'].icon,
        imgColor: skillIcons['natures_minne'].color,
        level: 66,
        cooldown: 90,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_IN,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 15
            }
        ]
    },
]

export default brdSkills;