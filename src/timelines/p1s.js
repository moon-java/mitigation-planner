import { damageTypes, targets } from "../cooldowns/constants";

export const info = {
    name: "Asphodelos: The First Circle (Savage)",
    abbreviation: "P1S",
    boss: "Ericthonios",
    length: 600,
    level: 90
}

const skills = {
    heavy_hand: {
        id: 1,
        name: "Heavy Hand",
        damageType: damageTypes.PHYS,
        target: targets.MT,
        notes: "Tankbuster",
        avoidable: false
    },
    aetherial_shackles: {
        id: 2,
        name: "Aetherial Shackles",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Close/far debuffs out",
        avoidable: false
    },
    warders_wrath: {
        id: 3,
        name: "Warder's Wrath",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        notes: "",
        avoidable: false
    },
    chain_pain: {
        id: 4,
        name: "Chain Pain",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Close/far debuffs resolve",
        avoidable: false
    },
    gaolers_flail: {
        id: 5,
        name: "Gaoler's Flail",
        damageType: damageTypes.PHYS,
        target: targets.DIRECTIONAL,
        notes: "",
        avoidable: true
    },
    pitiless_flail: {
        id: 6,
        name: "Pitiless Flail of Purgation/Grace",
        damageType: damageTypes.PHYS,
        target: targets.MT,
        notes: "Knockback buster",
        avoidable: false
    },
    true_flare_holy: {
        id: 7,
        name: "True Flare/Holy",
        damageType: damageTypes.MAGIC,
        target: targets.MT,
        notes: "Flare for Purgation, Holy stack for Grace",
        avoidable: false
    },
    intemperance: {
        id: 8,
        name: "Intemperance",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Fire/ice debuffs out, arena divided",
        avoidable: false
    },
    intemperate_torment: {
        id: 9,
        name: "Intemperate Torment",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Orbs begin breaking",
        avoidable: false
    },
    hot_cold_spell: {
        id: 10,
        name: "Hot/Cold Spell",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Orbs break",
        avoidable: false
    },
    shining_cells: {
        id: 11,
        name: "Shining Cells",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Transition into cells",
        avoidable: false
    },
    aetherflail: {
        id: 12,
        name: "Aetherflail",
        damageType: damageTypes.MAGIC + " & " + damageTypes.PHYS,
        target: targets.DIRECTIONAL + " & " + targets.ARENA,
        notes: "Flails + fire/light tile explosions",
        avoidable: true
    },
    shackles_of_time: {
        id: 13,
        name: "Shackles of Time",
        damageType: damageTypes.NONE,
        target: targets.PARTY_MEMBER,
        notes: "Debuff out",
        avoidable: false
    },
    inevitable_light_fire: {
        id: 14,
        name: "Inevitable Light/Fire",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Color that player with shackles debuff is standing on explodes",
        avoidable: true
    },
    slam_shut: {
        id: 15,
        name: "Slam Shut",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Transition out of cells",
        avoidable: false
    },
    lethe: {
        id: 16,
        name: "Lethe",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        notes: "",
        avoidable: false
    },
    flail_1: {
        id: 17,
        name: "Flail 1",
        damageType: damageTypes.PHYS,
        target: targets.DIRECTIONAL,
        notes: "",
        avoidable: true
    },
    flail_2: {
        id: 18,
        name: "Flail 2",
        damageType: damageTypes.PHYS,
        target: targets.DIRECTIONAL,
        notes: "",
        avoidable: true
    },
    aetherflail_1: {
        id: 19,
        name: "Flail + Powerful Light/Fire 1",
        damageType: damageTypes.PHYS + " & " + damageTypes.MAGIC,
        target: targets.DIRECTIONAL + " & " + targets.ARENA,
        notes: "",
        avoidable: true
    },
    aetherflail_2: {
        id: 20,
        name: "Flail + Powerful Light/Fire 2",
        damageType: damageTypes.PHYS + " & " + damageTypes.MAGIC,
        target: targets.DIRECTIONAL + " & " + targets.ARENA,
        notes: "",
        avoidable: true
    },
}

export const timeline = [
    {
        ...skills["heavy_hand"],
        startTime: 9,
        endTime: 14
    },
    {
        ...skills["aetherial_shackles"],
        startTime: 19,
        endTime: 22
    },
    {
        ...skills["warders_wrath"],
        startTime: 27,
        endTime: 32
    },
    {
        ...skills["chain_pain"],
        startTime: 41,
        endTime: 42
    },
    {
        ...skills["gaolers_flail"],
        startTime: 46,
        endTime: 58
    },
    {
        ...skills["flail_1"],
        startTime: 60,
        endTime: 61
    },
    {
        ...skills["flail_2"],
        startTime: 62,
        endTime: 63
    },
    {
        ...skills["pitiless_flail"],
        startTime: 67,
        endTime: 72
    },
    {
        ...skills["true_flare_holy"],
        startTime: 75,
        endTime: 76
    },
    {
        ...skills["gaolers_flail"],
        startTime: 80,
        endTime: 92
    },
    {
        ...skills["flail_1"],
        startTime: 94,
        endTime: 95
    },
    {
        ...skills["flail_2"],
        startTime: 96,
        endTime: 97
    },
    {
        ...skills["warders_wrath"],
        startTime: 100,
        endTime: 105
    },
    {
        ...skills["intemperance"],
        startTime: 117,
        endTime: 119
    },
    {
        ...skills["intemperate_torment"],
        startTime: 124,
        endTime: 134
    },
    {
        ...skills["hot_cold_spell"],
        startTime: 135,
        endTime: 136
    },
    {
        ...skills["warders_wrath"],
        startTime: 138,
        endTime: 142
    },
    {
        ...skills["hot_cold_spell"],
        startTime: 146,
        endTime: 147
    },
    {
        ...skills["warders_wrath"],
        startTime: 148,
        endTime: 152
    },
    {
        ...skills["hot_cold_spell"],
        startTime: 157,
        endTime: 158
    },
    {
        ...skills["pitiless_flail"],
        startTime: 163,
        endTime: 168
    },
    {
        ...skills["true_flare_holy"],
        startTime: 172,
        endTime: 173
    },
    {
        ...skills["shining_cells"],
        startTime: 182,
        endTime: 189
    },
]