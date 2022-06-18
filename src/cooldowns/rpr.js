import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import meleeSkills from './melees.js';

export const rprSkills =
[
    ...meleeSkills,
    {
        skillId: 'arcane_crest',
        name: 'Arcane Crest',
        imgFile: skillIcons['arcane_crest'].icon,
        imgColor: skillIcons['arcane_crest'].color,
        level: 40,
        cooldown: 30,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.PERCENT,
                value: 10,
                duration: 5
            },
            {
                target: targets.PARTY,
                damageType: damageTypes.NONE,
                effect: effects.REGEN,
                valueType: valueTypes.POTENCY,
                value: 50,
                duration: 15
            },
        ]
    }
]

export default rprSkills;