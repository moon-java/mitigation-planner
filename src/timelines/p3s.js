import { damageTypes, targets } from "../cooldowns/constants";

export const p3sInfo = {
    name: "Asphodelos: The Third Circle (Savage)",
    abbreviation: "P3S",
    boss: "Phoinix",
    length: 660,
    level: 90
}

const p3sSkills = {
    scorched_exaltation: {
        id: 'scorched_exaltation',
        name: "Scorched Exaltation",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false
    },
    heat_of_condemnation: {
        id: 'heat_of_condemnation',
        name: "Heat of Condemnation",
        damageType: damageTypes.MAGIC,
        target: targets.MT + " + " + targets.OT,
        notes: "AoE tankbuster on 2 people with tethers",
        avoidable: false
    },
    experimental_fireplume: {
        id: 'experimental_fireplume',
        name: "Experimental Fireplume",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Either one large delayed AoE on random target or smaller AoE circles rotating clockwise around edge + one in center",
        avoidable: true
    },
    left_right_cinderwing: {
        id: 'left_right_cinderwing',
        name: "Left/Right Cinderwing",
        damageType: damageTypes.MAGIC,
        target: targets.DIRECTIONAL,
        notes: "180 degree cleave to bird's left/right",
        avoidable: true
    },
    darkened_fire: {
        id: 'darkened_fire',
        name: "Darkened Fire",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Spawn darkened fire adds on T/H or DPS",
        avoidable: false
    },
    brightened_fire: {
        id: 'brightened_fire',
        name: "Brightened Fire",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Party marked 1-8",
        avoidable: false
    },
    brightened_fire_resolves: {
        id: 'brightened_fire_resolves',
        name: "Brightened Fire Resolves",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "AoEs on each party member in marked order",
        avoidable: false
    },
    darkened_blaze: {
        id: 'darkened_blaze',
        name: "Darkened Blaze",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        notes: "Darkened fire adds enrage",
        avoidable: true
    },
    devouring_brand: {
        id: 'devouring_brand',
        name: "Devouring Brand",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Damaging lines spawn N/S/E/W, extend to meet center, then expand width slightly",
        avoidable: true
    },
    searing_breeze: {
        id: 'searing_breeze',
        name: "Searing Breeze",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "AoEs spawned under all party members",
        avoidable: true
    },
    trail_of_condemnation: {
        id: 'trail_of_condemnation',
        name: "Trail of Condemnation",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Bird flies across arena either N/S or E/W; either cleaves middle or outer edges",
        avoidable: true
    },
    sparks_of_condemnation: {
        id: 'sparks_of_condemnation',
        name: "Sparks of Condemnation",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "If bird cleaved middle, entire party hit with individual AoEs; if bird cleaved outside, T/H or DPS hit with 2-person stacks",
        avoidable: false
    },
    sunbirds_spawn: {
        id: 'sunbirds_spawn',
        name: "Sunbirds spawn",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Small sunbirds spawn N/S/E/W",
        avoidable: false
    },
    blazing_rain: {
        id: 'blazing_rain',
        name: "Blazing Rain",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false
    },
    great_whirlwind: {
        id: 'great_whirlwind',
        name: "Great Whirlwind",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        notes: "Adds enrage",
        avoidable: true
    },
    flames_of_undeath: {
        id: 'flames_of_undeath',
        name: "Flames of Undeath",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false
    },
    sunbirds_revive: {
        id: 'sunbirds_revive',
        name: "Sunbirds revived",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Large sunbirds respawn where small birds were killed",
        avoidable: false
    },
    fireglide_sweep: {
        id: 'fireglide_sweep',
        name: "Fireglide Sweep",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        notes: "Sunbirds dash to tethered players",
        avoidable: false
    },
    dead_rebirth: {
        id: 'dead_rebirth',
        name: "Dead Rebirth",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Heavy-hitting raidwide; 2nd in aggro starts taking magical autos for remainder of fight",
        avoidable: false
    },
    fledgling_flight: {
        id: 'fledgling_flight',
        name: "Fledgling Flight",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Eyeballs appear on targeted players, facing indicated direction",
        avoidable: false
    },
    ashen_eye: {
        id: 'ashen_eye',
        name: "Ashen Eye",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Eyeballs cleave 90 degrees in direction they face",
        avoidable: true
    },
    experimental_ashplume_1: {
        id: 'experimental_ashplume_1',
        name: "Experimental Ashplume",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Either 4/4 stacks (one large orb) or party spread (several small orbs)",
        avoidable: false
    },
    experimental_ashplume_2: {
        id: 'experimental_ashplume_2',
        name: "Experimental Ashplume",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Stack/spread resolves",
        avoidable: false
    },
    experimental_gloryplume_1: {
        id: 'experimental_gloryplume_1',
        name: "Experimental Gloryplume",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Combines Experimental Fireplume with Experimental Ashplume",
        avoidable: false
    },
    experimental_gloryplume_2: {
        id: 'experimental_gloryplume_2',
        name: "Experimental Gloryplume",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Stack/spread resolves",
        avoidable: false
    },
    fountain_of_fire: {
        id: 'fountain_of_fire',
        name: "Fountain of Fire",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Spawns fountains either N/S or E/W, proceeding clockwise",
        avoidable: false
    },
    suns_pinion_1: {
        id: 'suns_pinion_1',
        name: "Sun's Pinion",
        damageType: damageTypes.NONE,
        target: targets.PROXIMITY_CLOSE2,
        notes: "Starts targeting closest 2 players with AoEs in 3 rounds",
        avoidable: false
    },
    suns_pinion_2: {
        id: 'suns_pinion_2',
        name: "Sun's Pinion",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "AoEs resolve, untargetable sunshadow spawned on player with proximity tether",
        avoidable: false
    },
    fireglide: {
        id: 'fireglide',
        name: "Fireglide",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Sunshadow dashes through tethered player",
        avoidable: false
    },
    fountain_of_death: {
        id: 'fountain_of_death',
        name: "Fountain of Death",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Does near-fatal damage and gives massive healing buff to player in fountain. If missed, bird gets massive damage buff.",
        avoidable: false
    },
    firestorms_of_asphodelos: {
        id: 'firestorms_of_asphodelos',
        name: "Firestorms of Asphodelos",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Heavy-hitting raidwide, transition into blazing rain, spawns fire tornadoes N, SW, and SE",
        avoidable: false
    },
    flames_of_asphodelos: {
        id: 'flames_of_asphodelos',
        name: "Flames of Asphodelos",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Spawns 3 cleaves on each half of the arena, mirrored across line dividing N/S halves",
        avoidable: false
    },
    flames_of_asphodelos_1: {
        id: 'flames_of_asphodelos_1',
        name: "Flames of Asphodelos 1",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Cleave 1 resolves",
        avoidable: true
    },
    flames_of_asphodelos_2: {
        id: 'flames_of_asphodelos_2',
        name: "Flames of Asphodelos 2",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Cleave 2 resolves",
        avoidable: true
    },
    flames_of_asphodelos_3: {
        id: 'flames_of_asphodelos_3',
        name: "Flames of Asphodelos 3",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Cleave 3 resolves",
        avoidable: true
    },
    storms_of_asphodelos: {
        id: 'storms_of_asphodelos',
        name: "Storms of Asphodelos",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Bird spawns 2 tethers which cleave targets, tornadoes and bird all cleave nearest player, all cleaves resolve at once",
        avoidable: false
    },
    darkblaze_twister: {
        id: 'darkblaze_twister',
        name: "Darkblaze Twister",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Tethers one tornado with dark tether for delayed KB; other 2 tornadoes get fire tethers for delayed donut AoE",
        avoidable: false
    },
    darkblaze_twister_kb: {
        id: 'darkblaze_twister_kb',
        name: "Darkblaze Twister (KB)",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "KB from dark tether tornado",
        avoidable: false
    },
    darkblaze_twister_donut: {
        id: 'darkblaze_twister_donut',
        name: "Darkblaze Twister (Donut)",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Donut AoE around fire tether tornadoes",
        avoidable: true
    },
    deaths_toll: {
        id: 'deaths_toll',
        name: "Death's Toll",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Every party member receives 1, 2, or 4 stacks of Death's Toll",
        avoidable: false
    },
    ashen_eye_dt: {
        id: 'ashen_eye_dt',
        name: "Ashen Eye",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Eyeballs cleave 90 degrees in direction they face; removes 1 stack of Death's Toll and drops HP to 1 if hit",
        avoidable: true
    },
    lifes_agonies: {
        id: 'lifes_agonies',
        name: "Life's Agonies",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Massive raidwide, kills anyone with remaining Death's Toll stacks",
        avoidable: false
    },
    final_exaltation: {
        id: 'final_exaltation',
        name: "Final Exaltation",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false
    },
}

export const p3sTimeline = [
    {
        ...p3sSkills["scorched_exaltation"],
        startTime: 8,
        endTime: 13
     },
     {
        ...p3sSkills["heat_of_condemnation"],
        startTime: 16,
        endTime: 22
     },
     {
        ...p3sSkills["experimental_fireplume"],
        startTime: 28,
        endTime: 33
     },
     {
        ...p3sSkills["left_right_cinderwing"],
        startTime: 39,
        endTime: 44
     },
     {
        ...p3sSkills["darkened_fire"],
        startTime: 51,
        endTime: 57
     },
     {
        ...p3sSkills["brightened_fire"],
        startTime: 63,
        endTime: 68
     },
     {
        ...p3sSkills["brightened_fire_resolves"],
        startTime: 68,
        endTime: 78
     },
     {
        ...p3sSkills["darkened_blaze"],
        startTime: 84,
        endTime: 85
     },
     {
        ...p3sSkills["heat_of_condemnation"],
        startTime: 90,
        endTime: 96
     },
     {
        ...p3sSkills["scorched_exaltation"],
        startTime: 99,
        endTime: 104
     },
     {
        ...p3sSkills["devouring_brand"],
        startTime: 111,
        endTime: 114
     },
     {
        ...p3sSkills["experimental_fireplume"],
        startTime: 116,
        endTime: 121
     },
     {
        ...p3sSkills["searing_breeze"],
        startTime: 128,
        endTime: 131
     },
     {
        ...p3sSkills["left_right_cinderwing"],
        startTime: 135,
        endTime: 140
     },
     {
        ...p3sSkills["heat_of_condemnation"],
        startTime: 143,
        endTime: 148
     },
     {
        ...p3sSkills["experimental_fireplume"],
        startTime: 152,
        endTime: 158
     },
     {
        ...p3sSkills["trail_of_condemnation"],
        startTime: 165,
        endTime: 171
     },
     {
        ...p3sSkills["sparks_of_condemnation"],
        startTime: 172,
        endTime: 173
     },
     {
        ...p3sSkills["sunbirds_spawn"],
        startTime: 179,
        endTime: 180
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 181,
        endTime: 182
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 189,
        endTime: 190
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 197,
        endTime: 198
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 205,
        endTime: 206
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 213,
        endTime: 214
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 221,
        endTime: 222
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 229,
        endTime: 230
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 237,
        endTime: 238
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 245,
        endTime: 246
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 253,
        endTime: 254
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 261,
        endTime: 262
     },
     {
        ...p3sSkills["great_whirlwind"],
        startTime: 206,
        endTime: 209
     },
     {
        ...p3sSkills["flames_of_undeath"],
        startTime: 212,
        endTime: 213
     },
     {
        ...p3sSkills["sunbirds_revive"],
        startTime: 212,
        endTime: 213
     },
     {
        ...p3sSkills["fireglide_sweep"],
        startTime: 216,
        endTime: 227
     },
     {
        ...p3sSkills["fireglide_sweep"],
        startTime: 227,
        endTime: 229
     },
     {
        ...p3sSkills["great_whirlwind"],
        startTime: 258,
        endTime: 261
     },
     {
        ...p3sSkills["flames_of_undeath"],
        startTime: 263,
        endTime: 264
     },
     {
        ...p3sSkills["dead_rebirth"],
        startTime: 275,
        endTime: 285
     },
     {
        ...p3sSkills["heat_of_condemnation"],
        startTime: 290,
        endTime: 295
     },
     {
        ...p3sSkills["fledgling_flight"],
        startTime: 304,
        endTime: 307
     },
     {
        ...p3sSkills["ashen_eye"],
        startTime: 321,
        endTime: 324
     },
     {
        ...p3sSkills["experimental_gloryplume_1"],
        startTime: 334,
        endTime: 339
     },
     {
        ...p3sSkills["experimental_gloryplume_2"],
        startTime: 351,
        endTime: 352
     },
     {
        ...p3sSkills["fountain_of_fire"],
        startTime: 363,
        endTime: 369
     },
     {
        ...p3sSkills["suns_pinion_1"],
        startTime: 371,
        endTime: 377
     },
     {
        ...p3sSkills["suns_pinion_2"],
        startTime: 377,
        endTime: 378
     },
     {
        ...p3sSkills["fireglide_sweep"],
        startTime: 383,
        endTime: 384
     },
     {
        ...p3sSkills["suns_pinion_2"],
        startTime: 382,
        endTime: 383
     },
     {
        ...p3sSkills["fireglide_sweep"],
        startTime: 388,
        endTime: 389
     },
     {
        ...p3sSkills["suns_pinion_2"],
        startTime: 387,
        endTime: 388
     },
     {
        ...p3sSkills["fireglide_sweep"],
        startTime: 393,
        endTime: 394
     },
     {
        ...p3sSkills["fountain_of_death"],
        startTime: 378,
        endTime: 379
     },
     {
        ...p3sSkills["fountain_of_death"],
        startTime: 383,
        endTime: 384
     },
     {
        ...p3sSkills["fountain_of_death"],
        startTime: 388,
        endTime: 389
     },
     {
        ...p3sSkills["fountain_of_death"],
        startTime: 393,
        endTime: 394
     },
     {
        ...p3sSkills["scorched_exaltation"],
        startTime: 395,
        endTime: 400
     },
     {
        ...p3sSkills["scorched_exaltation"],
        startTime: 403,
        endTime: 408
     },
     {
        ...p3sSkills["heat_of_condemnation"],
        startTime: 413,
        endTime: 418
     },
     {
        ...p3sSkills["firestorms_of_asphodelos"],
        startTime: 429,
        endTime: 434
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 445,
        endTime: 446
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 451,
        endTime: 452
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 460,
        endTime: 461
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 472,
        endTime: 473
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 484,
        endTime: 485
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 491,
        endTime: 492
     },
     {
        ...p3sSkills["blazing_rain"],
        startTime: 499,
        endTime: 500
     },
     {
        ...p3sSkills["flames_of_asphodelos"],
        startTime: 437,
        endTime: 440
     },
     {
        ...p3sSkills["flames_of_asphodelos_1"],
        startTime: 447,
        endTime: 448
     },
     {
        ...p3sSkills["flames_of_asphodelos_2"],
        startTime: 448,
        endTime: 449
     },
     {
        ...p3sSkills["flames_of_asphodelos_3"],
        startTime: 449,
        endTime: 450
     },
     {
        ...p3sSkills["experimental_ashplume_1"],
        startTime: 442,
        endTime: 447
     },
     {
        ...p3sSkills["experimental_ashplume_2"],
        startTime: 453,
        endTime: 454
     },
     {
        ...p3sSkills["flames_of_asphodelos"],
        startTime: 455,
        endTime: 458
     },
     {
        ...p3sSkills["flames_of_asphodelos_1"],
        startTime: 465,
        endTime: 466
     },
     {
        ...p3sSkills["flames_of_asphodelos_2"],
        startTime: 466,
        endTime: 467
     },
     {
        ...p3sSkills["flames_of_asphodelos_3"],
        startTime: 467,
        endTime: 468
     },
     {
        ...p3sSkills["storms_of_asphodelos"],
        startTime: 468,
        endTime: 476
     },
     {
        ...p3sSkills["darkblaze_twister"],
        startTime: 478,
        endTime: 482
     },
     {
        ...p3sSkills["searing_breeze"],
        startTime: 484,
        endTime: 488
     },
     {
        ...p3sSkills["searing_breeze"],
        startTime: 488,
        endTime: 490
     },
     {
        ...p3sSkills["searing_breeze"],
        startTime: 490,
        endTime: 492
     },
     {
        ...p3sSkills["searing_breeze"],
        startTime: 492,
        endTime: 494
     },
     {
        ...p3sSkills["experimental_ashplume_1"],
        startTime: 493,
        endTime: 498
     },
     {
        ...p3sSkills["darkblaze_twister_kb"],
        startTime: 500,
        endTime: 501
     },
     {
        ...p3sSkills["darkblaze_twister_donut"],
        startTime: 501,
        endTime: 502
     },
     {
        ...p3sSkills["experimental_ashplume_2"],
        startTime: 504,
        endTime: 505
     },
     {
        ...p3sSkills["scorched_exaltation"],
        startTime: 507,
        endTime: 512
     },
     {
        ...p3sSkills["deaths_toll"],
        startTime: 520,
        endTime: 526
     },
     {
        ...p3sSkills["fledgling_flight"],
        startTime: 529,
        endTime: 532
     },
     {
        ...p3sSkills["lifes_agonies"],
        startTime: 534,
        endTime: 558
     },
     {
        ...p3sSkills["ashen_eye_dt"],
        startTime: 545,
        endTime: 546
     },
     {
        ...p3sSkills["ashen_eye_dt"],
        startTime: 546,
        endTime: 547
     },
     {
        ...p3sSkills["ashen_eye_dt"],
        startTime: 547,
        endTime: 548
     },
     {
        ...p3sSkills["ashen_eye_dt"],
        startTime: 548,
        endTime: 549
     },
     {
        ...p3sSkills["experimental_gloryplume_1"],
        startTime: 565,
        endTime: 570
     },
     {
        ...p3sSkills["experimental_gloryplume_2"],
        startTime: 577,
        endTime: 578
     },
     {
        ...p3sSkills["trail_of_condemnation"],
        startTime: 585,
        endTime: 591
     },
     {
        ...p3sSkills["sparks_of_condemnation"],
        startTime: 593,
        endTime: 594
     },
     {
        ...p3sSkills["devouring_brand"],
        startTime: 600,
        endTime: 603
     },
     {
        ...p3sSkills["experimental_fireplume"],
        startTime: 605,
        endTime: 610
     },
     {
        ...p3sSkills["searing_breeze"],
        startTime: 617,
        endTime: 620
     },
     {
        ...p3sSkills["left_right_cinderwing"],
        startTime: 624,
        endTime: 629
     },
     {
        ...p3sSkills["scorched_exaltation"],
        startTime: 634,
        endTime: 639
     },
     {
        ...p3sSkills["scorched_exaltation"],
        startTime: 642,
        endTime: 647
     }
    ]