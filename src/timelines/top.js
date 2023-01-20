import { damageTypes, targets } from '../cooldowns/constants';

export const topInfo =
{
    name: "The Omega Protocol (Ultimate)",
    abbreviation: "TOP",
    boss: "Omega",
    length: 900,
    level: 90
}

export const topSkills =
{
    program_loop: {
        id: "program_loop",
        name: "Program Loop",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
    },
    blaster: {
        id: "blaster",
        name: "Blaster",
        damageType: damageTypes.MAGIC,
        target: targets.TETHER,
        avoidable: false,
        tankbuster: true,
        notes: "Tether tankbuster; applies HP penalty which drops max HP to 1% of its normal value",
    },
}

export const topTimeline =
[
    {
        ...topSkills["program_loop"],
        startTime: 10,
        endTime: 15,
    },
    {
        ...topSkills["blaster"],
        startTime: 20,
        endTime: 28,
    },
]