import { damageTypes, targets } from '../cooldowns/constants';

export const p11sInfo =
{
    name: "Anabaseios: The Eleventh Circle (Savage)",
    abbreviation: "P11S",
    boss: "Themis",
    length: 676,
    level: 90
}

export const p11sSkills =
{
    eunomia: {
        id: "eunomia",
        name: "Eunomia",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Raidwide with bleed",
        damage: 62000,
    },
    dike: {
        id: "dike",
        name: "Dike",
        damageType: damageTypes.PHYS,
        target: targets.AGGRO_1_2,
        avoidable: false,
        tankbuster: true,
        notes: "2-hit tankbuster",
        damage: 135000,
    },
    jury_overruling: {
        id: "jury_overruling",
        name: "Jury Overruling",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Protean + donuts (dark) or AoEs (light) under all players hit",
        damage: 54000,
    },
    inevitable_sentence_law: {
        id: "inevitable_sentence_law",
        name: "Inevitable Sentence/Law",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Partner stacks (dark) or light party stacks (light) depending on element of last cast",
        damage: 45000,
    },
    upheld_overruling: {
        id: "upheld_overruling",
        name: "Upheld Overruling",
        damageType: damageTypes.MAGIC,
        target: targets.TETHER,
        avoidable: false,
        notes: "AoE tankbuster with bleed into donut (dark) or party stack into chariot (light)",
        damage: 70000,
    },
    divisive_overruling: {
        id: "divisive_overruling",
        name: "Divisive Overruling",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Line AoE through boss hitbox followed by AoE on previously safe areas (dark) or second wider AoE through boss hitbox (light)",
        damage: 70000,
    },
    styx_cast: {
        id: "styx_cast",
        name: "Styx (Cast)",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Multi-hit party stack; initial hit does more damage & total hits increase with each cast",
        damage: 54000,
    },
    styx_hit: {
        id: "styx_hit",
        name: "Styx",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        damage: 25000,
    },
    arcane_revelation: {
        id: "arcane_revelation",
        name: "Arcane Revelation",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: true,
        notes: "Spawns light & dark mirrors or orbs around arena; cast element indicates which are dangerous",
        damage: 0,
    },
    dismissal_overruling: {
        id: "dismissal_overruling",
        name: "Dismissal Overruling",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Knocback followed by donut (dark) or chariot (light)",
        damage: 15000,
    },
    shadowed_messengers: {
        id: "shadowed_messengers",
        name: "Shadowed Messengers",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Spawns clones",
        damage: 0,
    },
    lightstream: {
        id: "lightstream",
        name: "Lightstream",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Spawns three orbs firing line AoEs that rotate CW/CCW",
        damage: 80000,
    },
    dark_and_light: {
        id: "dark_and_light",
        name: "Dark and Light",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Tethers supports to DPS (two long tethers and two short tethers)",
        damage: 0,
    },
    emissarys_will: {
        id: "emissarys_will",
        name: "Emissary's Will",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: true,
        notes: "Removes tethers",
        damage: 0,
    },
    dark_current: {
        id: "dark_current",
        name: "Dark Current",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Spawns three large AoEs in a line that rotate",
        damage: 999999,
    },
    blinding_light: {
        id: "blinding_light",
        name: "Blinding Light",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Individual AoEs",
        damage: 54000,
    },
    letter_of_the_law: {
        id: "letter_of_the_law",
        name: "Letter of the Law",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Spawns clones",
        damage: 0,
    },
    twofold_revelation: {
        id: "twofold_revelation",
        name: "Twofold Revelation",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Spawns light & dark mirrors and orbs",
        damage: 0,
    },
    heart_of_judgement: {
        id: "heart_of_judgement",
        name: "Heart of Judgement",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Spawns two-person towers",
        damage: 0,
    },
    ultimate_verdict: {
        id: "ultimate_verdict",
        name: "Ultimate Verdict",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false,
        damage: 999999,
    },
    divisive_ruling: {
        id: "divisive_ruling",
        name: "Divisive Ruling",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "From clone; same as Divisive Overruling but no final stack/spread",
        damage: 70000,
    },
    upheld_ruling: {
        id: "upheld_ruling",
        name: "Upheld Ruling",
        damageType: damageTypes.MAGIC,
        target: targets.TETHER,
        avoidable: false,
        notes: "From clone; same as Upheld Overruling but no final stack/spread",
        damage: 70000,
    },
    explosion: {
        id: "explosion",
        name: "Explosion",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: false,
        notes: "Towers go off",
        damage: 5000,
    },
}

export const p11sTimeline =
[
    {
        ...p11sSkills["eunomia"],
        startTime: 10,
        endTime: 15,
    },
    {
        ...p11sSkills["dike"],
        startTime: 18,
        endTime: 25,
    },
    {
        ...p11sSkills["dike"],
        startTime: 27,
        endTime: 28,
    },
    {
        ...p11sSkills["jury_overruling"],
        startTime: 35,
        endTime: 41,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 46,
        endTime: 47,
    },
    {
        ...p11sSkills["upheld_overruling"],
        startTime: 54,
        endTime: 61,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 65,
        endTime: 66,
    },
    {
        ...p11sSkills["divisive_overruling"],
        startTime: 73,
        endTime: 79,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 83,
        endTime: 84,
    },
    {
        ...p11sSkills["styx_cast"],
        startTime: 88,
        endTime: 93,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 93,
        endTime: 94,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 94,
        endTime: 95,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 95,
        endTime: 96,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 96,
        endTime: 97,
    },
    {
        ...p11sSkills["arcane_revelation"],
        startTime: 108,
        endTime: 113,
    },
    {
        ...p11sSkills["dismissal_overruling"],
        startTime: 115,
        endTime: 120,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 125,
        endTime: 126,
    },
    {
        ...p11sSkills["shadowed_messengers"],
        startTime: 148,
        endTime: 152,
    },
    {
        ...p11sSkills["divisive_ruling"],
        startTime: 158,
        endTime: 167,
    },
    {
        ...p11sSkills["divisive_overruling"],
        startTime: 163,
        endTime: 172,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 173,
        endTime: 174,
    },
    {
        ...p11sSkills["upheld_ruling"],
        startTime: 169,
        endTime: 179,
    },
    {
        ...p11sSkills["jury_overruling"],
        startTime: 184,
        endTime: 190,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 195,
        endTime: 196,
    },
    {
        ...p11sSkills["styx_cast"],
        startTime: 199,
        endTime: 204,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 204,
        endTime: 205,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 205,
        endTime: 206,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 206,
        endTime: 207,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 207,
        endTime: 208,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 208,
        endTime: 209,
    },
    {
        ...p11sSkills["lightstream"],
        startTime: 218,
        endTime: 222,
    },
    {
        ...p11sSkills["divisive_overruling"],
        startTime: 234,
        endTime: 240,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 245,
        endTime: 246,
    },
    {
        ...p11sSkills["eunomia"],
        startTime: 253,
        endTime: 258,
    },
    {
        ...p11sSkills["upheld_overruling"],
        startTime: 265,
        endTime: 272,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 276,
        endTime: 277,
    },
    {
        ...p11sSkills["dark_and_light"],
        startTime: 291,
        endTime: 294,
    },
    {
        ...p11sSkills["arcane_revelation"],
        startTime: 304,
        endTime: 309,
    },
    {
        ...p11sSkills["jury_overruling"],
        startTime: 318,
        endTime: 324,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 330,
        endTime: 331,
    },
    {
        ...p11sSkills["divisive_overruling"],
        startTime: 337,
        endTime: 343,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 347,
        endTime: 348,
    },
    {
        ...p11sSkills["emissarys_will"],
        startTime: 352,
        endTime: 355,
    },
    {
        ...p11sSkills["styx_cast"],
        startTime: 358,
        endTime: 363,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 363,
        endTime: 364,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 364,
        endTime: 365,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 365,
        endTime: 366,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 366,
        endTime: 367,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 367,
        endTime: 368,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 368,
        endTime: 369,
    },
    {
        ...p11sSkills["dike"],
        startTime: 375,
        endTime: 382,
    },
    {
        ...p11sSkills["dike"],
        startTime: 384,
        endTime: 385,
    },
    {
        ...p11sSkills["dark_current"],
        startTime: 401,
        endTime: 420,
    },
    {
        ...p11sSkills["blinding_light"],
        startTime: 414,
        endTime: 415,
    },
    {
        ...p11sSkills["jury_overruling"],
        startTime: 422,
        endTime: 429,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 434,
        endTime: 435,
    },
    {
        ...p11sSkills["upheld_overruling"],
        startTime: 441,
        endTime: 448,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 452,
        endTime: 453,
    },
    {
        ...p11sSkills["divisive_overruling"],
        startTime: 462,
        endTime: 468,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 472,
        endTime: 473,
    },
    {
        ...p11sSkills["eunomia"],
        startTime: 481,
        endTime: 486,
    },
    {
        ...p11sSkills["letter_of_the_law"],
        startTime: 508,
        endTime: 512,
    },
    {
        ...p11sSkills["twofold_revelation"],
        startTime: 515,
        endTime: 520,
    },
    {
        ...p11sSkills["heart_of_judgement"],
        startTime: 526,
        endTime: 528,
    },
    {
        ...p11sSkills["upheld_ruling"],
        startTime: 521,
        endTime: 531,
    },
    {
        ...p11sSkills["explosion"],
        startTime: 540,
        endTime: 541,
    },
    {
        ...p11sSkills["divisive_ruling"],
        startTime: 536,
        endTime: 544,
    },
    {
        ...p11sSkills["dismissal_overruling"],
        startTime: 545,
        endTime: 550,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 554,
        endTime: 555,
    },
    {
        ...p11sSkills["styx_cast"],
        startTime: 559,
        endTime: 564,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 564,
        endTime: 565,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 565,
        endTime: 566,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 566,
        endTime: 567,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 567,
        endTime: 568,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 568,
        endTime: 569,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 569,
        endTime: 570,
    },
    {
        ...p11sSkills["styx_hit"],
        startTime: 570,
        endTime: 571,
    },
    {
        ...p11sSkills["lightstream"],
        startTime: 579,
        endTime: 583,
    },
    {
        ...p11sSkills["divisive_overruling"],
        startTime: 595,
        endTime: 601,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 605,
        endTime: 606,
    },
    {
        ...p11sSkills["dike"],
        startTime: 616,
        endTime: 623,
    },
    {
        ...p11sSkills["dike"],
        startTime: 625,
        endTime: 626,
    },
    {
        ...p11sSkills["jury_overruling"],
        startTime: 636,
        endTime: 642,
    },
    {
        ...p11sSkills["inevitable_sentence_law"],
        startTime: 647,
        endTime: 648,
    },
    {
        ...p11sSkills["eunomia"],
        startTime: 654,
        endTime: 659,
    },
    {
        ...p11sSkills["ultimate_verdict"],
        startTime: 665,
        endTime: 675,
    },
]