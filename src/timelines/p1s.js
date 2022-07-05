import { damageTypes, targets } from "../cooldowns/constants";

export const p1sInfo = {
    name: "Asphodelos: The First Circle (Savage)",
    abbreviation: "P1S",
    boss: "Erichthonios",
    length: 600,
    level: 90
}

const p1sSkills = {
    heavy_hand: {
        id: 'heavy_hand',
        name: "Heavy Hand",
        damageType: damageTypes.PHYS,
        target: targets.MT,
        notes: "Tankbuster",
        avoidable: false
    },
    aetherial_shackles: {
        id: 'aetherial_shackles',
        name: "Aetherial Shackles",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Close/far debuffs out",
        avoidable: false
    },
    fourfold_shackles: {
        id: 'fourfold_shackles',
        name: "Fourfold Shackles",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Close/far debuffs out to entire party",
        avoidable: false
    },
    warders_wrath: {
        id: 'warders_wrath',
        name: "Warder's Wrath",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        notes: "",
        avoidable: false
    },
    chain_pain: {
        id: 'chain_pain',
        name: "Chain Pain",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Close/far debuffs resolve",
        avoidable: false
    },
    gaolers_flail: {
        id: 'gaolers_flail',
        name: "Gaoler's Flail",
        damageType: damageTypes.PHYS,
        target: targets.DIRECTIONAL,
        notes: "",
        avoidable: true
    },
    pitiless_flail: {
        id: 'pitiless_flail',
        name: "Pitiless Flail of Purgation/Grace",
        damageType: damageTypes.PHYS,
        target: targets.MT,
        notes: "Knockback buster",
        avoidable: false
    },
    true_flare_holy: {
        id: 'true_flare_holy',
        name: "True Flare/Holy",
        damageType: damageTypes.MAGIC,
        target: targets.MT,
        notes: "Flare for Purgation, Holy stack for Grace",
        avoidable: false
    },
    intemperance: {
        id: 'intemperance',
        name: "Intemperance",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Fire/ice debuffs out, arena divided",
        avoidable: false
    },
    intemperate_torment: {
        id: 'intemperate_torment',
        name: "Intemperate Torment",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Orbs begin breaking",
        avoidable: false
    },
    hot_cold_spell: {
        id: 'hot_cold_spell',
        name: "Hot/Cold Spell",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Orbs break",
        avoidable: false
    },
    shining_cells: {
        id: 'shining_cells',
        name: "Shining Cells",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Transition into cells",
        avoidable: false
    },
    aetherflail: {
        id: 'aetherflail',
        name: "Aetherflail",
        damageType: damageTypes.MAGIC + " & " + damageTypes.PHYS,
        target: targets.DIRECTIONAL + " & " + targets.ARENA,
        notes: "Flails + fire/light tile explosions",
        avoidable: true
    },
    shackles_of_time: {
        id: 'shackles_of_time',
        name: "Shackles of Time",
        damageType: damageTypes.NONE,
        target: targets.PARTY_MEMBER,
        notes: "Debuff out",
        avoidable: false
    },
    inevitable_light_fire: {
        id: 'inevitable_light_fire',
        name: "Inevitable Light/Fire",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Color that player with shackles debuff is standing on explodes",
        avoidable: true
    },
    slam_shut: {
        id: 'slam_shut',
        name: "Slam Shut",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Transition out of cells",
        avoidable: false
    },
    lethe: {
        id: 'lethe',
        name: "Lethe",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        notes: "",
        avoidable: false
    },
    flail_1: {
        id: 'flail_1',
        name: "Flail 1",
        damageType: damageTypes.PHYS,
        target: targets.DIRECTIONAL,
        notes: "",
        avoidable: true
    },
    flail_2: {
        id: 'flail_2',
        name: "Flail 2",
        damageType: damageTypes.PHYS,
        target: targets.DIRECTIONAL,
        notes: "",
        avoidable: true
    },
    aetherflail_1: {
        id: 'aetherflail_1',
        name: "Flail + Powerful Light/Fire 1",
        damageType: damageTypes.PHYS + " & " + damageTypes.MAGIC,
        target: targets.DIRECTIONAL + " & " + targets.ARENA,
        notes: "",
        avoidable: true
    },
    aetherflail_2: {
        id: 'aetherflail_2',
        name: "Flail + Powerful Light/Fire 2",
        damageType: damageTypes.PHYS + " & " + damageTypes.MAGIC,
        target: targets.DIRECTIONAL + " & " + targets.ARENA,
        notes: "",
        avoidable: true
    },
    aetherchain: {
        id: 'aetherchain',
        name: "Aetherchain",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Prep fire/light floor for explosion",
        avoidable: true
    },
    powerful_light_fire: {
        id: 'powerful_light_fire',
        name: "Powerful Light/Fire",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Light/fire floor tiles explode",
        avoidable: true
    },
}

export const p1sTimeline = [
    {
        ...p1sSkills["heavy_hand"],
        startTime: 9,
        endTime: 14
    },
    {
        ...p1sSkills["aetherial_shackles"],
        startTime: 19,
        endTime: 22
    },
    {
        ...p1sSkills["warders_wrath"],
        startTime: 27,
        endTime: 32
    },
    {
        ...p1sSkills["chain_pain"],
        startTime: 41,
        endTime: 42
    },
    {
        ...p1sSkills["gaolers_flail"],
        startTime: 46,
        endTime: 58
    },
    {
        ...p1sSkills["flail_1"],
        startTime: 60,
        endTime: 61
    },
    {
        ...p1sSkills["flail_2"],
        startTime: 62,
        endTime: 63
    },
    {
        ...p1sSkills["pitiless_flail"],
        startTime: 67,
        endTime: 72
    },
    {
        ...p1sSkills["true_flare_holy"],
        startTime: 75,
        endTime: 76
    },
    {
        ...p1sSkills["gaolers_flail"],
        startTime: 80,
        endTime: 92
    },
    {
        ...p1sSkills["flail_1"],
        startTime: 94,
        endTime: 95
    },
    {
        ...p1sSkills["flail_2"],
        startTime: 96,
        endTime: 97
    },
    {
        ...p1sSkills["warders_wrath"],
        startTime: 100,
        endTime: 105
    },
    {
        ...p1sSkills["intemperance"],
        startTime: 117,
        endTime: 119
    },
    {
        ...p1sSkills["intemperate_torment"],
        startTime: 124,
        endTime: 134
    },
    {
        ...p1sSkills["hot_cold_spell"],
        startTime: 135,
        endTime: 136
    },
    {
        ...p1sSkills["warders_wrath"],
        startTime: 138,
        endTime: 142
    },
    {
        ...p1sSkills["hot_cold_spell"],
        startTime: 146,
        endTime: 147
    },
    {
        ...p1sSkills["warders_wrath"],
        startTime: 148,
        endTime: 152
    },
    {
        ...p1sSkills["hot_cold_spell"],
        startTime: 157,
        endTime: 158
    },
    {
        ...p1sSkills["pitiless_flail"],
        startTime: 163,
        endTime: 168
    },
    {
        ...p1sSkills["true_flare_holy"],
        startTime: 172,
        endTime: 173
    },
    {
        ...p1sSkills["shining_cells"],
        startTime: 182,
        endTime: 188
    },
    {
        ...p1sSkills["aetherflail"],
        startTime: 197,
        endTime: 208
    },
    {
        ...p1sSkills["aetherflail_1"],
        startTime: 209,
        endTime: 210
    },
    {
        ...p1sSkills["aetherflail_2"],
        startTime: 214,
        endTime: 215
    },
    {
        ...p1sSkills["pitiless_flail"],
        startTime: 220,
        endTime: 225
    },
    {
        ...p1sSkills["true_flare_holy"],
        startTime: 228,
        endTime: 229
    },
    {
        ...p1sSkills["aetherflail"],
        startTime: 232,
        endTime: 243
    },
    {
        ...p1sSkills["aetherflail_1"],
        startTime: 244,
        endTime: 245
    },
    {
        ...p1sSkills["aetherflail_2"],
        startTime: 247,
        endTime: 248
    },
    {
        ...p1sSkills["shackles_of_time"],
        startTime: 252,
        endTime: 256
    },
    {
        ...p1sSkills["heavy_hand"],
        startTime: 261,
        endTime: 266
    },
    {
        ...p1sSkills["inevitable_light_fire"],
        startTime: 269,
        endTime: 270
    },
    {
        ...p1sSkills["slam_shut"],
        startTime: 272,
        endTime: 279
    },
    {
        ...p1sSkills["fourfold_shackles"],
        startTime: 292,
        endTime: 295
    },
    {
        ...p1sSkills["chain_pain"],
        startTime: 304,
        endTime: 305
    },
    {
        ...p1sSkills["chain_pain"],
        startTime: 309,
        endTime: 310
    },
    {
        ...p1sSkills["chain_pain"],
        startTime: 314,
        endTime: 315
    },
    {
        ...p1sSkills["chain_pain"],
        startTime: 319,
        endTime: 320
    },
    {
        ...p1sSkills["warders_wrath"],
        startTime: 323,
        endTime: 328
    },
    {
        ...p1sSkills["intemperance"],
        startTime: 339,
        endTime: 341
    },
    {
        ...p1sSkills["intemperate_torment"],
        startTime: 348,
        endTime: 358
    },
    {
        ...p1sSkills["hot_cold_spell"],
        startTime: 359,
        endTime: 360
    },
    {
        ...p1sSkills["gaolers_flail"],
        startTime: 362,
        endTime: 373
    },
    {
        ...p1sSkills["hot_cold_spell"],
        startTime: 371,
        endTime: 372
    },
    {
        ...p1sSkills["flail_1"],
        startTime: 374,
        endTime: 375
    },
    {
        ...p1sSkills["flail_2"],
        startTime: 379,
        endTime: 380
    },
    {
        ...p1sSkills["hot_cold_spell"],
        startTime: 382,
        endTime: 383
    },
    {
        ...p1sSkills["warders_wrath"],
        startTime: 384,
        endTime: 389
    },
    {
        ...p1sSkills["shining_cells"],
        startTime: 400,
        endTime: 407
    },
    {
        ...p1sSkills["shackles_of_time"],
        startTime: 410,
        endTime: 414
    },
    {
        ...p1sSkills["pitiless_flail"],
        startTime: 420,
        endTime: 425
    },
    {
        ...p1sSkills["true_flare_holy"],
        startTime: 429,
        endTime: 430
    },
    {
        ...p1sSkills["inevitable_light_fire"],
        startTime: 430,
        endTime: 431
    },
    {
        ...p1sSkills["warders_wrath"],
        startTime: 437,
        endTime: 442
    },
    {
        ...p1sSkills["aetherial_shackles"],
        startTime: 451,
        endTime: 454
    },
    {
        ...p1sSkills["aetherchain"],
        startTime: 460,
        endTime: 465
    },
    {
        ...p1sSkills["powerful_light_fire"],
        startTime: 465,
        endTime: 466
    },
    {
        ...p1sSkills["aetherchain"],
        startTime: 469,
        endTime: 474
    },
    {
        ...p1sSkills["powerful_light_fire"],
        startTime: 474,
        endTime: 475
    },
    {
        ...p1sSkills["chain_pain"],
        startTime: 475,
        endTime: 476
    },
    {
        ...p1sSkills["warders_wrath"],
        startTime: 480,
        endTime: 485
    },
    {
        ...p1sSkills["aetherflail"],
        startTime: 495,
        endTime: 506
    },   
    {
        ...p1sSkills["aetherflail_1"],
        startTime: 508,
        endTime: 509
    },    
    {
        ...p1sSkills["aetherflail_2"],
        startTime: 510,
        endTime: 511
    }, 
    {
        ...p1sSkills["aetherflail"],
        startTime: 513,
        endTime: 524
    },   
    {
        ...p1sSkills["aetherflail_1"],
        startTime: 526,
        endTime: 527
    },    
    {
        ...p1sSkills["aetherflail_2"],
        startTime: 528,
        endTime: 529
    },
    {
        ...p1sSkills["aetherflail"],
        startTime: 531,
        endTime: 541
    },   
    {
        ...p1sSkills["aetherflail_1"],
        startTime: 543,
        endTime: 544
    },    
    {
        ...p1sSkills["aetherflail_2"],
        startTime: 545,
        endTime: 546
    }, 
    {
        ...p1sSkills["warders_wrath"],
        startTime: 556,
        endTime: 561
    }, 
    {
        ...p1sSkills["warders_wrath"],
        startTime: 565,
        endTime: 570
    }, 
    {
        ...p1sSkills["warders_wrath"],
        startTime: 574,
        endTime: 579
    }, 
    {
        ...p1sSkills["lethe"],
        startTime: 586,
        endTime: 600
    }, 
]