import { damageTypes, targets } from '../cooldowns/constants';

export const p9sInfo =
{
    name: "Anabaseios: The Ninth Circle (Savage)",
    abbreviation: "P9S",
    boss: "Kokytos",
    length: 598,
    level: 90
}

export const p9sSkills =
{
    gluttonys_augur: {
        id: "gluttonys_augur",
        name: "Gluttony's Augur",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        damage: 75000,
    },
    ravening: {
        id: "ravening",
        name: "Ravening",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Indicates phase change",
        damage: 0,
    },
    soul_surge: {
        id: "soul_surge",
        name: "Soul Surge",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "No cast bar; occurs at end of Ravening animation",
        damage: 66000,
    },
    duality_of_death: {
        id: "duality_of_death",
        name: "Duality of Death",
        damageType: damageTypes.MAGIC,
        target: targets.AGGRO_1_2,
        avoidable: false,
        tankbuster: true,
        notes: "Two-hit tankbuster; requires swap",
        damage: 75000,
    },
    dualspell: {
        id: "dualspell",
        name: "Dualspell",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Telegraphs two elements for next mechanic: ice (chariot) and fire (partners) or lightning (protean)",
        damage: 0,
    },
    pile_pyre: {
        id: "pile_pyre",
        name: "Pile Pyre",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Partner stacks",
        damage: 64000,
    },
    thunder_3: {
        id: "thunder_3",
        name: "Thunder III",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Protean line AoEs",
        damage: 64000,
    },
    ascendant_fist: {
        id: "ascendant_fist",
        name: "Ascendant Fist",
        damageType: damageTypes.PHYS,
        target: targets.MT,
        avoidable: false,
        tankbuster: true,
        notes: "Tankbuster; applies Phys Vuln Up and Concussion DoT",
        damage: 100000,
    },
    archaic_rockbreaker_cast: {
        id: "archaic_rockbreaker_cast",
        name: "Archaic Rockbreaker (Cast)",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        damage: 0,
    },
    archaic_rockbreaker_damage: {
        id: "archaic_rockbreaker_damage",
        name: "Archaic Rockbreaker (Damage)",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Partner stacks",
        damage: 58000,
    },
    shockwave: {
        id: "shockwave",
        name: "Shockwave",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Knockback from center of arena",
        damage: 0,
    },
    front_rear_combination: {
        id: "front_rear_combination",
        name: "Front/Rear Combination",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Front/rear indicates direction of Swinging Kick",
        damage: 75000,
    },
    archaic_demolish: {
        id: "archaic_demolish",
        name: "Archaic Demolish",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Light party stacks",
        damage: 75000,
    },
    levinstrike_summoning: {
        id: "levinstrike_summoning",
        name: "Levinstrike Summoning",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Summons lightning orbs",
        damage: 0,
    },
    scrambled_succession: {
        id: "scrambled_succession",
        name: "Scrambled Succession",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Players & orbs marked for limit cut",
        damage: 0,
    },
    firemeld: {
        id: "firemeld",
        name: "Firemeld",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Small targeted AoE on party member in limit cut order; damage based on proximity to boss (i.e. distance from last kicked orb)",
        damage: 50000,
    },
    icemeld: {
        id: "icemeld",
        name: "Icemeld",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Defamation AoE",
        damage: 68000,
    },
    shock: {
        id: "shock",
        name: "Shock",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: false,
        notes: "Tower damage",
        damage: 20000,
    },
    two_minds: {
        id: "two_minds",
        name: "Two Minds",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Same as Dualspell",
        damage: 0,
    },
    charybdis: {
        id: "charybdis",
        name: "Charybdis",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Spawns persistent cyclone AoEs",
        damage: 0,
    },
    comet: {
        id: "comet",
        name: "Comet",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Spawns four proximity AoEs at cardinals/intercards (opposite of cyclone positions)",
        damage: 80000,
    },
    beastly_bile_cast: {
        id: "beastly_bile_cast",
        name: "Beastly Bile (Cast)",
        damageType: damageTypes.NONE,
        target: targets.PROXIMITY_FAR,
        avoidable: false,
        damage: 0,
    },
    thunderbolt: {
        id: "thunderbolt",
        name: "Thunderbolt",
        damageType: damageTypes.MAGIC,
        target: targets.PROXIMITY_CLOSE4,
        avoidable: false,
        notes: "Cone AoEs on 4 closest players; aim at cyclones/away from comets",
        damage: 60000,
    },
    ecliptic_meteor: {
        id: "ecliptic_meteor",
        name: "Ecliptic Meteor",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Meteor drops on one remaining comet; failure to line-of-sight targeted comet behind other uncracked comet means immediate death",
        damage: 9999999,
    },
    beastly_fury: {
        id: "beastly_fury",
        name: "Beastly Fury",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        damage: 75000,
    },
    chimeric_succession: {
        id: "chimeric_succession",
        name: "Chimeric Succession",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Players marked for limit cut",
        damage: 0,
    },
    front_rear_firestrikes: {
        id: "front_rear_firestrikes",
        name: "Front/Rear Firestrikes",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Stack damage on unmarked player; damage based on proximity to boss. Front/rear indicates direction of Swinging Kick",
        damage: 75000,
    },
    swinging_kick: {
        id: "swinging_kick",
        name: "Swinging Kick",
        damageType: damageTypes.MAGIC,
        target: targets.DIRECTIONAL,
        avoidable: true,
        notes: "180 degree cleave in direction indicated by previous Front/Rear Combination/Firestrikes cast",
        damage: 80000,
    },
    disintegration: {
        id: "disintegration",
        name: "Disintegration",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false,
        damage: 9999999,
    },
    inside_outside_roundhouse: {
        id: "inside_outside_roundhouse",
        name: "Inside/Outside Roundhouse",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Chariot (Inside) or dynamo (Outside)",
    },
    beastly_bile_damage: {
        id: "beastly_bile_damage",
        name: "Beastly Bile (Damage)",
        damageType: damageTypes.MAGIC,
        target: targets.PROXIMITY_FAR,
        avoidable: false,
        notes: "Stack damage on furthest player; take on cracked comet",
        damage: 60000,
    },
}

export const p9sTimeline =
[
    {
        ...p9sSkills["gluttonys_augur"],
        startTime: 7,
        endTime: 12,
    },
    {
        ...p9sSkills["ravening"],
        startTime: 20,
        endTime: 25,
    },
    {
        ...p9sSkills["soul_surge"],
        startTime: 30,
        endTime: 31,
    },
    {
        ...p9sSkills["duality_of_death"],
        startTime: 41,
        endTime: 46,
    },
    {
        ...p9sSkills["duality_of_death"],
        startTime: 48,
        endTime: 49,
    },
    {
        ...p9sSkills["dualspell"],
        startTime: 55,
        endTime: 60,
    },
    {
        ...p9sSkills["pile_pyre"],
        startTime: 66,
        endTime: 67,
    },
    {
        ...p9sSkills["dualspell"],
        startTime: 68,
        endTime: 73,
    },
    {
        ...p9sSkills["thunder_3"],
        startTime: 79,
        endTime: 80,
    },
    {
        ...p9sSkills["dualspell"],
        startTime: 81,
        endTime: 86,
    },
    {
        ...p9sSkills["pile_pyre"],
        startTime: 92,
        endTime: 93,
    },
    {
        ...p9sSkills["ravening"],
        startTime: 111,
        endTime: 114,
    },
    {
        ...p9sSkills["soul_surge"],
        startTime: 119,
        endTime: 120,
    },
    {
        ...p9sSkills["ascendant_fist"],
        startTime: 129,
        endTime: 133,
    },
    {
        ...p9sSkills["archaic_rockbreaker_cast"],
        startTime: 141,
        endTime: 145,
    },
    {
        ...p9sSkills["shockwave"],
        startTime: 145,
        endTime: 146,
    },
    {
        ...p9sSkills["archaic_rockbreaker_damage"],
        startTime: 147,
        endTime: 148,
    },
    {
        ...p9sSkills["front_rear_combination"],
        startTime: 149,
        endTime: 154,
    },
    {
        ...p9sSkills["inside_outside_roundhouse"],
        startTime: 154,
        endTime: 155,
    },
    {
        ...p9sSkills["swinging_kick"],
        startTime: 157,
        endTime: 158,
    },
    {
        ...p9sSkills["inside_outside_roundhouse"],
        startTime: 160,
        endTime: 161,
    },
    {
        ...p9sSkills["archaic_demolish"],
        startTime: 165,
        endTime: 169,
    },
    {
        ...p9sSkills["gluttonys_augur"],
        startTime: 170,
        endTime: 175,
    },
    {
        ...p9sSkills["ascendant_fist"],
        startTime: 181,
        endTime: 186,
    },
    {
        ...p9sSkills["ravening"],
        startTime: 204,
        endTime: 208,
    },
    {
        ...p9sSkills["soul_surge"],
        startTime: 213,
        endTime: 214,
    },
    {
        ...p9sSkills["levinstrike_summoning"],
        startTime: 217,
        endTime: 221,
    },
    {
        ...p9sSkills["scrambled_succession"],
        startTime: 223,
        endTime: 233,
    },
    {
        ...p9sSkills["firemeld"],
        startTime: 237,
        endTime: 238,
    },
    {
        ...p9sSkills["icemeld"],
        startTime: 237,
        endTime: 238,
    },
    {
        ...p9sSkills["shock"],
        startTime: 238,
        endTime: 239,
    },
    {
        ...p9sSkills["firemeld"],
        startTime: 243,
        endTime: 244,
    },
    {
        ...p9sSkills["icemeld"],
        startTime: 243,
        endTime: 244,
    },
    {
        ...p9sSkills["shock"],
        startTime: 244,
        endTime: 245,
    },
    {
        ...p9sSkills["firemeld"],
        startTime: 249,
        endTime: 250,
    },
    {
        ...p9sSkills["icemeld"],
        startTime: 249,
        endTime: 250,
    },
    {
        ...p9sSkills["shock"],
        startTime: 250,
        endTime: 251,
    },
    {
        ...p9sSkills["firemeld"],
        startTime: 255,
        endTime: 256,
    },
    {
        ...p9sSkills["icemeld"],
        startTime: 255,
        endTime: 256,
    },
    {
        ...p9sSkills["shock"],
        startTime: 256,
        endTime: 257,
    },
    {
        ...p9sSkills["two_minds"],
        startTime: 257,
        endTime: 264,
    },
    {
        ...p9sSkills["thunder_3"],
        startTime: 265,
        endTime: 266,
    },
    {
        ...p9sSkills["gluttonys_augur"],
        startTime: 267,
        endTime: 272,
    },
    {
        ...p9sSkills["ravening"],
        startTime: 286,
        endTime: 289,
    },
    {
        ...p9sSkills["soul_surge"],
        startTime: 295,
        endTime: 296,
    },
    {
        ...p9sSkills["charybdis"],
        startTime: 299,
        endTime: 302,
    },
    {
        ...p9sSkills["comet"],
        startTime: 304,
        endTime: 310,
    },
    {
        ...p9sSkills["beastly_bile_cast"],
        startTime: 313,
        endTime: 318,
    },
    {
        ...p9sSkills["thunderbolt"],
        startTime: 321,
        endTime: 324,
    },
    {
        ...p9sSkills["beastly_bile_damage"],
        startTime: 324,
        endTime: 325,
    },
    {
        ...p9sSkills["thunderbolt"],
        startTime: 327,
        endTime: 330,
    },
    {
        ...p9sSkills["beastly_bile_damage"],
        startTime: 330,
        endTime: 331,
    },
    {
        ...p9sSkills["ecliptic_meteor"],
        startTime: 334,
        endTime: 341,
    },
    {
        ...p9sSkills["beastly_fury"],
        startTime: 350,
        endTime: 355,
    },
    {
        ...p9sSkills["ravening"],
        startTime: 370,
        endTime: 374,
    },
    {
        ...p9sSkills["soul_surge"],
        startTime: 379,
        endTime: 380,
    },
    {
        ...p9sSkills["duality_of_death"],
        startTime: 388,
        endTime: 393,
    },
    {
        ...p9sSkills["duality_of_death"],
        startTime: 395,
        endTime: 396,
    },
    {
        ...p9sSkills["archaic_rockbreaker_cast"],
        startTime: 397,
        endTime: 402,
    },
    {
        ...p9sSkills["shockwave"],
        startTime: 402,
        endTime: 403,
    },
    {
        ...p9sSkills["archaic_rockbreaker_damage"],
        startTime: 404,
        endTime: 405,
    },
    {
        ...p9sSkills["dualspell"],
        startTime: 407,
        endTime: 412,
    },
    {
        ...p9sSkills["pile_pyre"],
        startTime: 419,
        endTime: 420,
    },
    {
        ...p9sSkills["gluttonys_augur"],
        startTime: 420,
        endTime: 425,
    },
    {
        ...p9sSkills["chimeric_succession"],
        startTime: 433,
        endTime: 438,
    },
    {
        ...p9sSkills["icemeld"],
        startTime: 447,
        endTime: 448,
    },
    {
        ...p9sSkills["icemeld"],
        startTime: 450,
        endTime: 451,
    },
    {
        ...p9sSkills["front_rear_firestrikes"],
        startTime: 445,
        endTime: 453,
    },
    {
        ...p9sSkills["icemeld"],
        startTime: 454,
        endTime: 455,
    },
    {
        ...p9sSkills["icemeld"],
        startTime: 457,
        endTime: 458,
    },
    {
        ...p9sSkills["swinging_kick"],
        startTime: 456,
        endTime: 459,
    },
    {
        ...p9sSkills["two_minds"],
        startTime: 463,
        endTime: 470,
    },
    {
        ...p9sSkills["thunder_3"],
        startTime: 470,
        endTime: 471,
    },
    {
        ...p9sSkills["ravening"],
        startTime: 482,
        endTime: 486,
    },
    {
        ...p9sSkills["soul_surge"],
        startTime: 491,
        endTime: 492,
    },
    {
        ...p9sSkills["dualspell"],
        startTime: 495,
        endTime: 500,
    },
    {
        ...p9sSkills["pile_pyre"],
        startTime: 507,
        endTime: 508,
    },
    {
        ...p9sSkills["gluttonys_augur"],
        startTime: 508,
        endTime: 513,
    },
    {
        ...p9sSkills["dualspell"],
        startTime: 515,
        endTime: 520,
    },
    {
        ...p9sSkills["thunder_3"],
        startTime: 527,
        endTime: 528,
    },
    {
        ...p9sSkills["duality_of_death"],
        startTime: 530,
        endTime: 535,
    },
    {
        ...p9sSkills["duality_of_death"],
        startTime: 537,
        endTime: 538,
    },
    {
        ...p9sSkills["dualspell"],
        startTime: 539,
        endTime: 544,
    },
    {
        ...p9sSkills["pile_pyre"],
        startTime: 551,
        endTime: 552,
    },
    {
        ...p9sSkills["gluttonys_augur"],
        startTime: 552,
        endTime: 557,
    },
    {
        ...p9sSkills["ravening"],
        startTime: 574,
        endTime: 578,
    },
    {
        ...p9sSkills["soul_surge"],
        startTime: 583,
        endTime: 584,
    },
    {
        ...p9sSkills["disintegration"],
        startTime: 588,
        endTime: 598,
    },
]