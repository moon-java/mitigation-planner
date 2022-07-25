import { damageTypes, targets } from "../cooldowns/constants";

export const p4sp2Info = {
    name: "Asphodelos: The Fourth Circle (Savage) | Phase 2",
    abbreviation: "P4S P2",
    boss: "Hesperos",
    length: 505,
    level: 90
}

const p4sp2Skills = {
    searing_stream: {
        id: 'searing_stream',
        name: "Searing Stream",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false
    },
    act1: {
        id: 'act1',
        name: "Akanthai: Act 1",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false
    },
    act2: {
        id: 'act2',
        name: "Akanthai: Act 2",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false
    },
    act3: {
        id: 'act3',
        name: "Akanthai: Act 3",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false
    },
    act4: {
        id: 'act4',
        name: "Akanthai: Act 4",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false
    },
    finale: {
        id: 'finale',
        name: "Akanthai: Finale",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false
    },
    curtain_call: {
        id: 'act4',
        name: "Akanthai: Curtain Call",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false
    },
    wreath_of_thorns: {
        id: 'wreath_of_thorns',
        name: "Wreath of Thorns",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Tethers thorns to indicate mechanic resolution order"
    },
    near_farsight: {
        id: 'near_farsight',
        name: "Nearsight/Farsight",
        damageType: damageTypes.MAGIC,
        tankbuster: true,
        target: targets.PROXIMITY_CLOSE2 + ' or ' + targets.PROXIMITY_FAR2,
        avoidable: false,
        notes: "Tankbuster; Nearsight targets closest two, Farsight targets farthest two"
    },
    demigod_double: {
        id: 'demigod_double',
        name: "Demigod Double",
        damageType: damageTypes.MAGIC,
        tankbuster: true,
        target: targets.MT,
        avoidable: false,
        notes: "Stack tankbuster"
    },
    dark_design: {
        id: 'dark_design',
        name: "Dark Design",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: true,
        notes: "Puddle AoEs spawn under all party members"
    },
    dark4: {
        id: 'dark4',
        name: "Hemitheos's Dark IV",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Raidwide, applies 2s magic vuln up"
    },
    act2_tethers: {
        id: 'act2_tethers',
        name: "Act 2 Tethers Resolve",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Fire stack on two people; lightning tower on two people; large avoidable fire AoEs from N/S or E/W"
    },
    ultimate_impulse: {
        id: 'ultimate_impulse',
        name: "Ultimate Impulse",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Heavy-hitting raidwide"
    },
    kothornos_kick: {
        id: 'kothornos_kick',
        name: "Kothornos Kick",
        damageType: damageTypes.PHYS,
        target: targets.PROXIMITY_FAR,
        avoidable: false,
        notes: "Jump kick on furthest target; anyone not targeted in hitbox when boss lands is knocked back"
    },
    kothornos_quake: {
        id: 'kothornos_quake',
        name: "Kothornos Quake",
        damageType: damageTypes.MAGIC,
        target: targets.PROXIMITY_CLOSE3,
        avoidable: false,
        notes: "Earth shakers on closest 3 targets"
    },
    water3: {
        id: 'water3',
        name: "Hemitheos's Water III",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: true,
        notes: "Knockback around person with blue tether"
    },
    water4: {
        id: 'water4',
        name: "Hemitheos's Water IV",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Knockback from center of arena"
    },
    heart_stake: {
        id: 'heart_stake',
        name: "Heart Stake",
        damageType: damageTypes.MAGIC,
        tankbuster: true,
        target: targets.AGGRO_1_2,
        avoidable: false,
        notes: "Tankbuster with bleed; first hit targets first in aggro, second hit targets second in aggro"
    },
    fleeting_impulse_1: {
        id: 'fleeting_impulse_1',
        name: "Fleeting Impulse (cast)",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false
    },
    fleeting_impulse_2: {
        id: 'fleeting_impulse_2',
        name: "Fleeting Impulse (resolves)",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "All party members hit with one AoE each in random order"
    },
    act1_tower: {
        id: 'act1_tower',
        name: "Act 1 Towers Resolve",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false
    },
    act3_tower: {
        id: 'act3_tower',
        name: "Act 3 Towers Resolve",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Four towers resolve at a time"
    },
    finale_tower: {
        id: 'finale_tower',
        name: "Finale Towers Resolve",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false
    },
    hells_sting: {
        id: 'hells_sting',
        name: "Hell's Sting (cast)",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "First cleaves are telegraphed"
    },
    hells_sting_1: {
        id: 'hells_sting_1',
        name: "Hell's Sting 1",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: true,
        notes: "First cleaves resolve"
    },
    hells_sting_2: {
        id: 'hells_sting_2',
        name: "Hell's Sting 2",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: true,
        notes: "Cleaves target space not cleaved by first set"
    },
    ultimate_impulse_enrage: {
        id: 'ultimate_impulse_enrage',
        name: "Ultimate Impulse (enrage)",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false
    },
}

export const p4sp2Timeline = [
    {
        ...p4sp2Skills["searing_stream"],
        startTime:10,
        endTime:15
    },
    {
        ...p4sp2Skills["act1"],
        startTime:26,
        endTime:31
    },
    {
        ...p4sp2Skills["searing_stream"],
        startTime:35,
        endTime:40
    },
    {
        ...p4sp2Skills["wreath_of_thorns"],
        startTime:46,
        endTime:54
    },
    {
        ...p4sp2Skills["act1_tower"],
        startTime:59,
        endTime:60
    },
    {
        ...p4sp2Skills["near_farsight"],
        startTime:64,
        endTime:69
    },
    {
        ...p4sp2Skills["act2"],
        startTime:78,
        endTime:82
    },
    {
        ...p4sp2Skills["demigod_double"],
        startTime:87,
        endTime:92
    },
    {
        ...p4sp2Skills["wreath_of_thorns"],
        startTime:96,
        endTime:102
    },
    {
        ...p4sp2Skills["dark_design"],
        startTime:105,
        endTime:110
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:109,
        endTime:110
    },
    {
        ...p4sp2Skills["act2_tethers"],
        startTime:114,
        endTime:115
    },
    {
        ...p4sp2Skills["act2_tethers"],
        startTime:121,
        endTime:122
    },
    {
        ...p4sp2Skills["ultimate_impulse"],
        startTime:123,
        endTime:130
    },
    {
        ...p4sp2Skills["act3"],
        startTime:138,
        endTime:142
    },
    {
        ...p4sp2Skills["wreath_of_thorns"],
        startTime:147,
        endTime:153
    },
    {
        ...p4sp2Skills["kothornos_kick"],
        startTime:158,
        endTime:162
    },
    {
        ...p4sp2Skills["act3_tower"],
        startTime:167,
        endTime:168
    },
    {
        ...p4sp2Skills["kothornos_quake"],
        startTime:167,
        endTime:168
    },
    {
        ...p4sp2Skills["water4"],
        startTime:169,
        endTime:170
    },
    {
        ...p4sp2Skills["act3_tower"],
        startTime:173,
        endTime:174
    },
    {
        ...p4sp2Skills["kothornos_quake"],
        startTime:177,
        endTime:178
    },
    {
        ...p4sp2Skills["near_farsight"],
        startTime:181,
        endTime:186
    },
    {
        ...p4sp2Skills["heart_stake"],
        startTime:196,
        endTime:201
    },
    {
        ...p4sp2Skills["act4"],
        startTime:209,
        endTime:214
    },
    {
        ...p4sp2Skills["searing_stream"],
        startTime:218,
        endTime:223
    },
    {
        ...p4sp2Skills["wreath_of_thorns"],
        startTime:227,
        endTime:232
    },
    {
        ...p4sp2Skills["searing_stream"],
        startTime:235,
        endTime:240
    },
    {
        ...p4sp2Skills["water3"],
        startTime:246,
        endTime:250
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:256,
        endTime:257
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:261,
        endTime:262
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:266,
        endTime:267
    },
    {
        ...p4sp2Skills["ultimate_impulse"],
        startTime:268,
        endTime:275
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:271,
        endTime:272
    },
    {
        ...p4sp2Skills["searing_stream"],
        startTime:284,
        endTime:289
    },
    {
        ...p4sp2Skills["finale"],
        startTime:294,
        endTime:299
    },
    {
        ...p4sp2Skills["wreath_of_thorns"],
        startTime:303,
        endTime:308
    },
    {
        ...p4sp2Skills["fleeting_impulse_1"],
        startTime:311,
        endTime:316
    },
    {
        ...p4sp2Skills["fleeting_impulse_2"],
        startTime:317,
        endTime:325
    },
    {
        ...p4sp2Skills["wreath_of_thorns"],
        startTime:329,
        endTime:334
    },
    {
        ...p4sp2Skills["finale_tower"],
        startTime:339,
        endTime:347
    },
    {
        ...p4sp2Skills["near_farsight"],
        startTime:347,
        endTime:352
    },
    {
        ...p4sp2Skills["searing_stream"],
        startTime:360,
        endTime:365
    },
    {
        ...p4sp2Skills["demigod_double"],
        startTime:369,
        endTime:374
    },
    {
        ...p4sp2Skills["curtain_call"],
        startTime:382,
        endTime:387
    },
    {
        ...p4sp2Skills["hells_sting"],
        startTime:398,
        endTime:400
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:397,
        endTime:398
    },
    {
        ...p4sp2Skills["hells_sting_1"],
        startTime:400,
        endTime:401
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:401,
        endTime:402
    },
    {
        ...p4sp2Skills["hells_sting_2"],
        startTime:402,
        endTime:403
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:405,
        endTime:406
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:411,
        endTime:412
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:416,
        endTime:417
    },
    {
        ...p4sp2Skills["hells_sting"],
        startTime:418,
        endTime:420
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:420,
        endTime:421
    },
    {
        ...p4sp2Skills["hells_sting_1"],
        startTime:420,
        endTime:421
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:425,
        endTime:426
    },
    {
        ...p4sp2Skills["hells_sting_2"],
        startTime:425,
        endTime:426
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:430,
        endTime:431
    },
    {
        ...p4sp2Skills["ultimate_impulse"],
        startTime:431,
        endTime:440
    },
    {
        ...p4sp2Skills["hells_sting"],
        startTime:447,
        endTime:449
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:428,
        endTime:429
    },
    {
        ...p4sp2Skills["hells_sting_1"],
        startTime:450,
        endTime:451
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:452,
        endTime:453
    },
    {
        ...p4sp2Skills["hells_sting_2"],
        startTime:452,
        endTime:453
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:456,
        endTime:457
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:459,
        endTime:460
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:465,
        endTime:466
    },
    {
        ...p4sp2Skills["hells_sting"],
        startTime:467,
        endTime:469
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:471,
        endTime:472
    },
    {
        ...p4sp2Skills["hells_sting_1"],
        startTime:473,
        endTime:474
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:475,
        endTime:476
    },
    {
        ...p4sp2Skills["hells_sting_2"],
        startTime:475,
        endTime:476
    },
    {
        ...p4sp2Skills["dark4"],
        startTime:480,
        endTime:481
    },
    {
        ...p4sp2Skills["ultimate_impulse"],
        startTime:482,
        endTime:489
    },
    {
        ...p4sp2Skills["ultimate_impulse_enrage"],
        startTime:495,
        endTime:505
    },
]