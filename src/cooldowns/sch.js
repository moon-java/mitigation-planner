import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import healerSkills from './healers.js';

export const schSkills =
[
    ...healerSkills,
    {
        skillId: 'whispering_dawn',
        name: 'Whispering Dawn',
        imgFile: skillIcons['whispering_dawn'].icon,
        imgColor: skillIcons['whispering_dawn'].color,
        level: 20,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 80,
                duration: 21
            }
        ]
    },
    {
        skillId: 'fey_illumination',
        name: 'Fey Illumination',
        imgFile: skillIcons['fey_illumination'].icon,
        imgColor: skillIcons['fey_illumination'].color,
        level: 40,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.MAGIC,
                effect: effects.DMG_IN,
                valueType: valueTypes.PERCENT,
                value: 5,
                duration: 20
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_OUT,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 20
            }
        ]
    },
    {
        skillId: 'sacred_soil',
        name: 'Sacred Soil',
        imgFile: skillIcons['sacred_soil'].icon,
        imgColor: skillIcons['sacred_soil'].color,
        level: 50,
        maxApplicableLevel: 77,
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
        skillId: 'enhanced_sacred_soil',
        name: 'Enhanced Sacred Soil',
        imgFile: skillIcons['sacred_soil'].icon,
        imgColor: skillIcons['sacred_soil'].color,
        level: 78,
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
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 100,
                duration: 15
            },
        ]
    },
    {
        skillId: 'indomitability',
        name: 'Indomitability',
        imgFile: skillIcons['indomitability'].icon,
        imgColor: skillIcons['indomitability'].color,
        level: 52,
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
        skillId: 'deployment_tactics',
        name: 'Deployment Tactics',
        imgFile: skillIcons['deployment_tactics'].icon,
        imgColor: skillIcons['deployment_tactics'].color,
        level: 56,
        maxApplicableLevel: 87,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: 'Deploy shield on self to nearby party members',
                duration: 0
            }
        ]
    },
    {
        skillId: 'enhanced_deployment_tactics',
        name: 'Enhanced Deployment Tactics',
        imgFile: skillIcons['deployment_tactics'].icon,
        imgColor: skillIcons['deployment_tactics'].color,
        level: 88,
        cooldown: 90,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: 'Deploy shield on target to nearby party members',
                duration: 0
            }
        ]
    },
    {
        skillId: 'emergency_tactics',
        name: 'Emergency Tactics',
        imgFile: skillIcons['emergency_tactics'].icon,
        imgColor: skillIcons['emergency_tactics'].color,
        level: 58,
        cooldown: 20,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: 'Convert shield on next Adlo or Succor into direct healing',
                duration: 15
            }
        ]
    },
    {
        skillId: 'dissipation',
        name: 'Dissipation',
        imgFile: skillIcons['dissipation'].icon,
        imgColor: skillIcons['dissipation'].color,
        level: 60,
        cooldown: 180,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: 'Dismiss Eos/Selene in exchange for 3 Aetherflow stacks',
                duration: 30
            },
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_OUT,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 30
            }
        ]
    },
    {
        skillId: 'excogitation',
        name: 'Excogitation',
        imgFile: skillIcons['excogitation'].icon,
        imgColor: skillIcons['excogitation'].color,
        level: 62,
        cooldown: 45,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.DELAYED_HEAL,
                valueType: valueTypes.POTENCY,
                value: 800,
                duration: 45
            }
        ]
    },
    {
        skillId: 'recitation',
        name: 'Recitation',
        imgFile: skillIcons['recitation'].icon,
        imgColor: skillIcons['recitation'].color,
        level: 74,
        cooldown: 90,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: 'Free guaranteed crit Adlo, Succor, Indom, or Excog',
                duration: 15
            }
        ]
    },
    {
        skillId: 'fey_blessing',
        name: 'Fey Blessing',
        imgFile: skillIcons['fey_blessing'].icon,
        imgColor: skillIcons['fey_blessing'].color,
        level: 76,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.HEAL,
                valueType: valueTypes.POTENCY,
                value: 320,
                duration: 0
            }
        ]
    },
    {
        skillId: 'summon_seraph',
        name: 'Summon Seraph',
        imgFile: skillIcons['summon_seraph'].icon,
        imgColor: skillIcons['summon_seraph'].color,
        level: 80,
        cooldown: 120,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: 'Summon Seraph, get 2 x Consolations (250 cure + 250 shield)',
                duration: 22
            }
        ]
    },
    {
        skillId: 'protraction',
        name: 'Protraction',
        imgFile: skillIcons['protraction'].icon,
        imgColor: skillIcons['protraction'].color,
        level: 86,
        cooldown: 60,
        effects:
        [
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.MAX_HP,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            },
            {
                target: targets.PARTY_MEMBER,
                damageType: damageTypes.NONE,
                effect: effects.HEAL_IN,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 10
            }
        ]
    },
    {
        skillId: 'expedient',
        name: 'Expedient',
        imgFile: skillIcons['expedient'].icon,
        imgColor: skillIcons['expedient'].color,
        level: 90,
        cooldown: 120,
        effects:
        [
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.OTHER,
                note: 'Gives sprint to all party members for 10s',
                duration: 10
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
]

export default schSkills;