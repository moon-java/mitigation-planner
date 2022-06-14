import { damageTypes, targets } from "../cooldowns/constants";

export const p2sInfo = {
    name: "Asphodelos: The Second Circle (Savage)",
    abbreviation: "P2S",
    boss: "Hippokampos",
    length: 600,
    level: 90
}

const p2sSkills = {
    doubled_impact: {
        id: 1,
        name: "Heavy Hand",
        damageType: damageTypes.PHYS,
        target: targets.MT,
        notes: "Tankbuster",
        avoidable: false
    }
}

export const p2sTimeline = [
    {
        ...p2sSkills["doubled_impact"],
        startTime: 21,
        endTime: 26
    }
]