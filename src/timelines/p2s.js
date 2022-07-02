import { damageTypes, targets } from "../cooldowns/constants";

export const p2sInfo = {
    name: "Asphodelos: The Second Circle (Savage)",
    abbreviation: "P2S",
    boss: "Hippokampos",
    length: 630,
    level: 90
}

const p2sSkills = {
    doubled_impact: {
        id: 'doubled_impact',
        name: "Doubled Impact",
        damageType: damageTypes.PHYS,
        target: targets.MT,
        notes: "Shared tankbuster (stack)",
        avoidable: false
    },
    murky_depths: {
        id: 'murky_depths',
        name: "Murky Depths",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false
    },
    sewer_deluge: {
        id: 'sewer_deluge',
        name: "Sewer Deluge",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Heavy-hitting raidwide, arena is flooded",
        avoidable: false
    },
    spoken_winged_cataract: {
        id: 'spoken_winged_cataract',
        name: "Spoken/Winged Cataract",
        damageType: damageTypes.MAGIC,
        target: targets.DIRECTIONAL,
        notes: "Line cleave through body + cleave in front/behind head",
        avoidable: true
    },
    coherence_flare: {
        id: 'coherence_flare',
        name: "Coherence Flare",
        damageType: damageTypes.MAGIC,
        target: targets.OT,
        notes: "Flare on person with tether",
        avoidable: false
    },
    coherence_stack: {
        id: 'coherence_stack',
        name: "Coherence Stack",
        damageType: damageTypes.MAGIC,
        target: targets.MT,
        notes: "Line stack on party, tank in front",
        avoidable: false
    },
    ominous_bubbling_1: {
        id: 'ominous_bubbling_1',
        name: "Ominous Bubbling",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Prepping healer stacks",
        avoidable: false
    },
    ominous_bubbling_2: {
        id: 'ominous_bubbling_2',
        name: "Ominous Bubbling",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Healer stacks resolve",
        avoidable: false
    },
    shockwave: {
        id: 'shockwave',
        name: "Shockwave",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Knockback from platform boss jumps to",
        avoidable: true
    },
    predatory_avarice_1: {
        id: 'predatory_avarice_1',
        name: "Predatory Avarice",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "1 tank & 1 DPS marked with knockback debuff, one healer marked with stack debuff",
        avoidable: false
    },
    predatory_avarice_2: {
        id: 'predatory_avarice_2',
        name: "Predatory Avarice",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Knockback & stack debuffs resolve",
        avoidable: false
    },
    water_receeds: {
        id: 'water_receeds',
        name: "Water receeds",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false
    },
    channeling_overflow_all_1: {
        id: 'channeling_overflow_all_1',
        name: "Channeling Overflow",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Knockback arrows assigned",
        avoidable: false
    },
    channeling_overflow_all_2: {
        id: 'channeling_overflow_all_2',
        name: "Channeling Overflow",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        notes: "Knockback arrows resolve",
        avoidable: false
    },
    kampeos_harma: {
        id: 'kampeos_harma',
        name: "Kampeos Harma",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "4 targeted with large AoEs from head (purple triangle), 4 targeted with limit cut dashes from body (blue square)",
        avoidable: false
    },
    kampeos_harma_1: {
        id: 'kampeos_harma_1',
        name: "Kampeos Harma 1",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        notes: "1 markers resolve",
        avoidable: false
    },
    kampeos_harma_2: {
        id: 'kampeos_harma_2',
        name: "Kampeos Harma 2",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        notes: "2 markers resolve",
        avoidable: false
    },
    kampeos_harma_3: {
        id: 'kampeos_harma_3',
        name: "Kampeos Harma 3",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        notes: "3 markers resolve",
        avoidable: false
    },
    kampeos_harma_4: {
        id: 'kampeos_harma_4',
        name: "Kampeos Harma 4",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        notes: "4 markers resolve",
        avoidable: false
    },
    channeling_overflow_short_long: {
        id: 'channeling_overflow_short_long',
        name: "Channeling Overflow",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Knockback arrows assigned, 4 with short timers and 4 with long timers",
        avoidable: false
    },
    channeling_overflow_short: {
        id: 'channeling_overflow_short',
        name: "Channeling Overflow",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        notes: "Knockback arrows resolve for short timers",
        avoidable: false
    },
    channeling_overflow_long: {
        id: 'channeling_overflow_long',
        name: "Channeling Overflow",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        notes: "Knockback arrows resolve for long timers",
        avoidable: false
    },
    tainted_flood_1: {
        id: 'tainted_flood',
        name: "Tainted Flood",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Spawn AoEs on players whose arrows aren't resolving",
        avoidable: false
    },
    tainted_flood_2: {
        id: 'tainted_flood',
        name: "Tainted Flood",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Puddle AoEs resolve",
        avoidable: false
    },
    disassociation_1: {
        id: 'disassociation_1',
        name: "Disassociation",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Head leaves, appears on outside of arena",
        avoidable: false
    },
    disassociation_2: {
        id: 'disassociation_2',
        name: "Disassociation",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        notes: "Head dashes across half the arena",
        avoidable: true
    },
    sewage_eruption: {
        id: 'sewage_eruption',
        name: "Sewage Eruption",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Prep chasing AoEs",
        avoidable: false
    },
    sewage_eruption_1: {
        id: 'sewage_eruption_1',
        name: "Sewage Eruption 1",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "First puddles resolve",
        avoidable: true
    },
    sewage_eruption_2: {
        id: 'sewage_eruption_2',
        name: "Sewage Eruption 2",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Second puddles resolve",
        avoidable: true
    },
    sewage_eruption_3: {
        id: 'sewage_eruption_3',
        name: "Sewage Eruption 3",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Third puddles resolve",
        avoidable: true
    },
    sewage_deluge_enrage: {
        id: 'sewage_deluge_enrage',
        name: "Sewage Deluge (Enrage)",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false
    },
}

export const p2sTimeline = [
    {
        ...p2sSkills["murky_depths"],
        startTime: 11,
        endTime: 16
    },
    {
        ...p2sSkills["doubled_impact"],
        startTime: 21,
        endTime: 26
    },
    {
        ...p2sSkills["sewer_deluge"],
        startTime: 33,
        endTime: 38
    },
    {
        ...p2sSkills["spoken_winged_cataract"],
        startTime: 53,
        endTime: 61
    },
    {
        ...p2sSkills["coherence_flare"],
        startTime: 69,
        endTime: 81
    },
    {
        ...p2sSkills["coherence_stack"],
        startTime: 82,
        endTime: 84
    },
    {
        ...p2sSkills["murky_depths"],
        startTime: 92,
        endTime: 98
    },
    {
        ...p2sSkills["ominous_bubbling_1"],
        startTime: 101,
        endTime: 104
    },
    {
        ...p2sSkills["shockwave"],
        startTime: 108,
        endTime: 115
    },
    {
        ...p2sSkills["ominous_bubbling_2"],
        startTime: 120,
        endTime: 124
    },
    {
        ...p2sSkills["predatory_avarice_1"],
        startTime: 130,
        endTime: 134
    },
    {
        ...p2sSkills["spoken_winged_cataract"],
        startTime: 143,
        endTime: 152
    },
    {
        ...p2sSkills["predatory_avarice_2"],
        startTime: 157,
        endTime: 158
    },
    {
        ...p2sSkills["water_receeds"],
        startTime: 160,
        endTime: 161
    },
    {
        ...p2sSkills["channeling_overflow_all_1"],
        startTime: 165,
        endTime: 166
    },
    {
        ...p2sSkills["channeling_overflow_all_2"],
        startTime: 185,
        endTime: 186
    },
    {
        ...p2sSkills["doubled_impact"],
        startTime: 196,
        endTime: 201
    },
    {
        ...p2sSkills["murky_depths"],
        startTime: 207,
        endTime: 212
    },
    {
        ...p2sSkills["sewer_deluge"],
        startTime: 223,
        endTime: 228
    },
    {
        ...p2sSkills["kampeos_harma"],
        startTime: 250,
        endTime: 258
    },
    {
        ...p2sSkills["kampeos_harma_1"],
        startTime: 259,
        endTime: 260
    },
    {
        ...p2sSkills["kampeos_harma_2"],
        startTime: 261,
        endTime: 262
    },
    {
        ...p2sSkills["kampeos_harma_3"],
        startTime: 263,
        endTime: 264
    },
    {
        ...p2sSkills["kampeos_harma_4"],
        startTime: 265,
        endTime: 266
    },
    {
        ...p2sSkills["doubled_impact"],
        startTime: 278,
        endTime: 282
    },
    {
        ...p2sSkills["murky_depths"],
        startTime: 286,
        endTime: 291
    },
    {
        ...p2sSkills["channeling_overflow_short_long"],
        startTime: 300,
        endTime: 305
    },
    {
        ...p2sSkills["tainted_flood_1"],
        startTime: 308,
        endTime: 311
    },
    {
        ...p2sSkills["tainted_flood_2"],
        startTime: 318,
        endTime: 319
    },
    {
        ...p2sSkills["channeling_overflow_short"],
        startTime: 319,
        endTime: 320
    },
    {
        ...p2sSkills["tainted_flood_1"],
        startTime: 324,
        endTime: 327
    },
    {
        ...p2sSkills["tainted_flood_2"],
        startTime: 333,
        endTime: 334
    },
    {
        ...p2sSkills["channeling_overflow_long"],
        startTime: 334,
        endTime: 335
    },
    {
        ...p2sSkills["spoken_winged_cataract"],
        startTime: 337,
        endTime: 345
    },
    {
        ...p2sSkills["water_receeds"],
        startTime: 346,
        endTime: 347
    },
    {
        ...p2sSkills["predatory_avarice_1"],
        startTime: 360,
        endTime: 365
    },
    {
        ...p2sSkills["disassociation_1"],
        startTime: 367,
        endTime: 371
    },
    {
        ...p2sSkills["spoken_winged_cataract"],
        startTime: 381,
        endTime: 389
    },
    {
        ...p2sSkills["predatory_avarice_2"],
        startTime: 389,
        endTime: 390
    },
    {
        ...p2sSkills["disassociation_2"],
        startTime: 381,
        endTime: 390
    },
    {
        ...p2sSkills["disassociation_1"],
        startTime: 398,
        endTime: 402
    },
    {
        ...p2sSkills["sewage_eruption"],
        startTime: 411,
        endTime: 416
    },
    {
        ...p2sSkills["sewage_eruption_1"],
        startTime: 419,
        endTime: 420
    },
    {
        ...p2sSkills["sewage_eruption_2"],
        startTime: 421,
        endTime: 422
    },
    {
        ...p2sSkills["sewage_eruption_3"],
        startTime: 423,
        endTime: 424
    },
    {
        ...p2sSkills["disassociation_2"],
        startTime: 412,
        endTime: 420
    },
    {
        ...p2sSkills["tainted_flood_1"],
        startTime: 418,
        endTime: 421
    },
    {
        ...p2sSkills["tainted_flood_2"],
        startTime: 428,
        endTime: 429
    },
    {
        ...p2sSkills["coherence_flare"],
        startTime: 426,
        endTime: 438
    },
    {
        ...p2sSkills["coherence_stack"],
        startTime: 438,
        endTime: 440
    },
    {
        ...p2sSkills["doubled_impact"],
        startTime: 448,
        endTime: 453
    },
    {
        ...p2sSkills["murky_depths"],
        startTime: 457,
        endTime: 462
    },
    {
        ...p2sSkills["sewer_deluge"],
        startTime: 475,
        endTime: 480
    },
    {
        ...p2sSkills["channeling_overflow_short_long"],
        startTime: 491,
        endTime: 496
    },
    {
        ...p2sSkills["coherence_flare"],
        startTime: 502,
        endTime: 513
    },
    {
        ...p2sSkills["channeling_overflow_short"],
        startTime: 509,
        endTime: 510
    },
    {
        ...p2sSkills["coherence_stack"],
        startTime: 513,
        endTime: 515
    },
    {
        ...p2sSkills["channeling_overflow_long"],
        startTime: 524,
        endTime: 525
    },
    {
        ...p2sSkills["disassociation_1"],
        startTime: 535,
        endTime: 540
    },
    {
        ...p2sSkills["sewage_eruption"],
        startTime: 547,
        endTime: 552
    },
    {
        ...p2sSkills["disassociation_2"],
        startTime: 548,
        endTime: 556
    },
    {
        ...p2sSkills["sewage_eruption_1"],
        startTime: 554,
        endTime: 556
    },
    {
        ...p2sSkills["sewage_eruption_2"],
        startTime: 556,
        endTime: 558
    },
    {
        ...p2sSkills["sewage_eruption_3"],
        startTime: 558,
        endTime: 560
    },
    {
        ...p2sSkills["ominous_bubbling_1"],
        startTime: 560,
        endTime: 564
    },
    {
        ...p2sSkills["shockwave"],
        startTime: 566,
        endTime: 574
    },
    {
        ...p2sSkills["ominous_bubbling_2"],
        startTime: 578,
        endTime: 579
    },
    {
        ...p2sSkills["doubled_impact"],
        startTime: 584,
        endTime: 586
    },
    {
        ...p2sSkills["murky_depths"],
        startTime: 596,
        endTime: 601
    },
    {
        ...p2sSkills["murky_depths"],
        startTime: 607,
        endTime: 612
    },
    {
        ...p2sSkills["sewage_deluge_enrage"],
        startTime: 617,
        endTime: 630
    },
]