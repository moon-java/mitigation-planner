import { targets, damageTypes, effects, valueTypes } from './constants.js';
import meleeSkills from './melees.js';
import skillIcons from '../assets/skills/skillIcons';

export const ninSkills =
[
    ...meleeSkills,
    {
        skillId: 'shade_shift',
        name: 'Shade Shift',
        imgFile: skillIcons['shade_shift'].icon,
        imgColor: skillIcons['shade_shift'].color,
        level: 2,
        cooldown: 120,
        effects:
        [
            {
                target: targets.SELF,
                damageType: damageTypes.NONE,
                effect: effects.SHIELD,
                valueType: valueTypes.PERCENT,
                value: 20,
                duration: 20
            }
        ]
    },
]

export default ninSkills;