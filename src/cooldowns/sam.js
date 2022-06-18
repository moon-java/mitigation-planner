import { targets, damageTypes, effects, valueTypes } from './constants.js';
import skillIcons from '../assets/skills/skillIcons';
import meleeSkills from './melees.js';

export const samSkills =
[
    ...meleeSkills,
    {
        skillId: 'third_eye',
        name: 'Third Eye',
        imgFile: skillIcons['third_eye'].icon,
        imgColor: skillIcons['third_eye'].color,
        level: 6,
        cooldown: 15,
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
                effect: effects.OTHER,
                note: "Increases Kenki Gauge by 10 when hit",
                duration: 4
            },
        ]
    }
]

export default samSkills;