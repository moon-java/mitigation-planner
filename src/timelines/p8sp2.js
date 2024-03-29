import { damageTypes, targets } from '../cooldowns/constants';

export const p8sp2Info =
{
    name: "Abyssos: The Eigth Circle (Savage) | Phase 2",
    abbreviation: "P8S P2",
    boss: "Hephaistos",
    length: 506,
    level: 90
}

export const p8sp2Skills =
{
    aioniopyr: {
        id: "aioniopyr",
        name: "Aioniopyr",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Heavy-hitting raidwide with bleed",
    },
    tyrants_unholy_darkness: {
        id: "tyrants_unholy_darkness",
        name: "Tyrant's Unholy Darkness",
        damageType: damageTypes.MAGIC,
        target: targets.AGGRO_1_2,
        avoidable: false,
        tankbuster: true,
        notes: "Individual tankbusters",
    },
    natural_alignment: {
        id: "natural_alignment",
        name: "Natural Alignment",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Two players marked with Natural Alignment debuff/bleed",
    },
    twist_nature: {
        id: "twist_nature",
        name: "Twist Nature",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Natural Alignment gauges appear and begin to fill",
    },
    tyrants_flare: {
        id: "tyrants_flare",
        name: "Tyrant's Flare",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: true,
        notes: "AoEs spawn under all players",
    },
    forcible_fire_2_3: {
        id: "forcible_fire_2_3",
        name: "Forcible Fire II/III",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Individual AoEs when purple gauge fills or 6-man stack when stack gauge fills",
    },
    forcible_trifire_difreeze: {
        id: "forcible_trifire_difreeze",
        name: "Forcible Trifire/Difreeze",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Three sets of two-man stacks targeting furthest players (fire) or two sets of three-man stacks targeting closest two players (ice)",
    },
    end_of_days: {
        id: "end_of_days",
        name: "End of Days",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Line AoEs from clones on outside of arena",
    },
    high_concept: {
        id: "high_concept",
        name: "High Concept",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Very heavy-hitting raidwide; boss goes untargetable",
    },
    conceptual_shift: {
        id: "conceptual_shift",
        name: "Conceptual Shift",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Large AoEs around players as alpha/beta/gamma debuffs expire",
    },
    splicer: {
        id: "splicer",
        name: "Splicer",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Solo/Super/Multisplice resolve",
    },
    ashing_blaze: {
        id: "ashing_blaze",
        name: "Ashing Blaze",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Boss cleaves half of arena telegraphed by flaming wing",
    },
    arcane_control: {
        id: "arcane_control",
        name: "Arcane Control",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Green/blue/purple towers spawn",
    },
    arcane_channel: {
        id: "arcane_channel",
        name: "Arcane Channel",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Towers resolve",
    },
    deconceptualize: {
        id: "deconceptualize",
        name: "Deconceptualize",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "High Concept debuffs are removed",
    },
    limitless_desolation: {
        id: "limitless_desolation",
        name: "Limitless Desolation",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Begins spawning instant AoEs/baited AoEs/towers",
    },
    tyrants_fire_3: {
        id: "tyrants_fire_3",
        name: "Tyrant's Fire III",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Untelegraphed AoEs on two players",
    },
    tyrants_flare_2: {
        id: "tyrants_flare_2",
        name: "Tyrant's Flare II",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "AoEs spawn under two players",
    },
    burst: {
        id: "burst",
        name: "Burst",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Two towers resolve",
    },
    inverse_magicks: {
        id: "inverse_magicks",
        name: "Inverse Magicks",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "One or both players with Natural Alignment get Inverse Magicks debuff; Inverse Magicks reverses the order that mechanics occur from what the gauges show",
    },
    ego_death: {
        id: "ego_death",
        name: "Ego Death",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Kills party; party is resurrected if phoenix was made in High Concept 2",
    },
    aionagonia: {
        id: "aionagonia",
        name: "Aionagonia",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Even heavier-hitting raidwide with bleed; each cast makes the next hit harder",
    },
    dominion: {
        id: "dominion",
        name: "Dominion",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        avoidable: false,
        notes: "Raidwide",
    },
    orogenic_deformation: {
        id: "orogenic_deformation",
        name: "Orogenic Deformation",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        avoidable: false,
        notes: "Four party member hit with Uplifts that apply Earth Res Down",
    },
    orogenic_shift: {
        id: "orogenic_shift",
        name: "Orogenic Shift",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: false,
        notes: "Four tunneling towers spawn; taking tower with Earth Res Down kills",
    },
    ego_death_enrage: {
        id: "ego_death_enrage",
        name: "Ego Death",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false,
        notes: "for real this time",
    },
}

export const p8sp2Timeline =
    [
        {
            ...p8sp2Skills["aioniopyr"],
            startTime: 10,
            endTime: 15,
        },
        {
            ...p8sp2Skills["tyrants_unholy_darkness"],
            startTime: 21,
            endTime: 27,
        },
        {
            ...p8sp2Skills["natural_alignment"],
            startTime: 35,
            endTime: 40,
        },
        {
            ...p8sp2Skills["twist_nature"],
            startTime: 46,
            endTime: 49,
        },
        {
            ...p8sp2Skills["tyrants_flare"],
            startTime: 52,
            endTime: 55,
        },
        {
            ...p8sp2Skills["forcible_fire_2_3"],
            startTime: 57,
            endTime: 58,
        },
        {
            ...p8sp2Skills["ashing_blaze"],
            startTime: 58,
            endTime: 64,
        },
        {
            ...p8sp2Skills["forcible_fire_2_3"],
            startTime: 63,
            endTime: 64,
        },
        {
            ...p8sp2Skills["forcible_trifire_difreeze"],
            startTime: 75,
            endTime: 76,
        },
        {
            ...p8sp2Skills["end_of_days"],
            startTime: 75,
            endTime: 76,
        },
        {
            ...p8sp2Skills["forcible_trifire_difreeze"],
            startTime: 81,
            endTime: 82,
        },
        {
            ...p8sp2Skills["end_of_days"],
            startTime: 81,
            endTime: 82,
        },
        {
            ...p8sp2Skills["aioniopyr"],
            startTime: 83,
            endTime: 88,
        },
        {
            ...p8sp2Skills["tyrants_unholy_darkness"],
            startTime: 96,
            endTime: 103,
        },
        {
            ...p8sp2Skills["high_concept"],
            startTime: 109,
            endTime: 114,
        },
        {
            ...p8sp2Skills["arcane_control"],
            startTime: 123,
            endTime: 126,
        },
        {
            ...p8sp2Skills["conceptual_shift"],
            startTime: 125,
            endTime: 126,
        },
        {
            ...p8sp2Skills["splicer"],
            startTime: 125,
            endTime: 126,
        },
        {
            ...p8sp2Skills["ashing_blaze"],
            startTime: 132,
            endTime: 138,
        },
        {
            ...p8sp2Skills["arcane_channel"],
            startTime: 137,
            endTime: 138,
        },
        {
            ...p8sp2Skills["conceptual_shift"],
            startTime: 143,
            endTime: 144,
        },
        {
            ...p8sp2Skills["arcane_control"],
            startTime: 141,
            endTime: 144,
        },
        {
            ...p8sp2Skills["ashing_blaze"],
            startTime: 150,
            endTime: 156,
        },
        {
            ...p8sp2Skills["arcane_channel"],
            startTime: 155,
            endTime: 156,
        },
        {
            ...p8sp2Skills["deconceptualize"],
            startTime: 159,
            endTime: 162,
        },
        {
            ...p8sp2Skills["aioniopyr"],
            startTime: 166,
            endTime: 171,
        },
        {
            ...p8sp2Skills["limitless_desolation"],
            startTime: 180,
            endTime: 185,
        },
        {
            ...p8sp2Skills["tyrants_fire_3"],
            startTime: 185,
            endTime: 186,
        },
        {
            ...p8sp2Skills["tyrants_fire_3"],
            startTime: 188,
            endTime: 189,
        },
        {
            ...p8sp2Skills["tyrants_fire_3"],
            startTime: 192,
            endTime: 192,
        },
        {
            ...p8sp2Skills["tyrants_fire_3"],
            startTime: 194,
            endTime: 195,
        },
        {
            ...p8sp2Skills["tyrants_flare_2"],
            startTime: 194,
            endTime: 197,
        },
        {
            ...p8sp2Skills["burst"],
            startTime: 196,
            endTime: 197,
        },
        {
            ...p8sp2Skills["tyrants_flare_2"],
            startTime: 197,
            endTime: 200,
        },
        {
            ...p8sp2Skills["burst"],
            startTime: 199,
            endTime: 200,
        },
        {
            ...p8sp2Skills["tyrants_flare_2"],
            startTime: 200,
            endTime: 203,
        },
        {
            ...p8sp2Skills["burst"],
            startTime: 202,
            endTime: 203,
        },
        {
            ...p8sp2Skills["tyrants_flare_2"],
            startTime: 203,
            endTime: 206,
        },
        {
            ...p8sp2Skills["burst"],
            startTime: 205,
            endTime: 206,
        },
        {
            ...p8sp2Skills["aioniopyr"],
            startTime: 208,
            endTime: 213,
        },
        {
            ...p8sp2Skills["tyrants_unholy_darkness"],
            startTime: 221,
            endTime: 227,
        },
        {
            ...p8sp2Skills["natural_alignment"],
            startTime: 237,
            endTime: 242,
        },
        {
            ...p8sp2Skills["inverse_magicks"],
            startTime: 245,
            endTime: 248,
        },
        {
            ...p8sp2Skills["twist_nature"],
            startTime: 251,
            endTime: 254,
        },
        {
            ...p8sp2Skills["forcible_fire_2_3"],
            startTime: 262,
            endTime: 263,
        },
        {
            ...p8sp2Skills["end_of_days"],
            startTime: 262,
            endTime: 263,
        },
        {
            ...p8sp2Skills["forcible_fire_2_3"],
            startTime: 268,
            endTime: 269,
        },
        {
            ...p8sp2Skills["end_of_days"],
            startTime: 268,
            endTime: 269,
        },
        {
            ...p8sp2Skills["forcible_trifire_difreeze"],
            startTime: 281,
            endTime: 282,
        },
        {
            ...p8sp2Skills["end_of_days"],
            startTime: 281,
            endTime: 282,
        },
        {
            ...p8sp2Skills["forcible_trifire_difreeze"],
            startTime: 288,
            endTime: 288,
        },
        {
            ...p8sp2Skills["end_of_days"],
            startTime: 288,
            endTime: 288,
        },
        {
            ...p8sp2Skills["ashing_blaze"],
            startTime: 288,
            endTime: 294,
        },
        {
            ...p8sp2Skills["aioniopyr"],
            startTime: 296,
            endTime: 302,
        },
        {
            ...p8sp2Skills["tyrants_unholy_darkness"],
            startTime: 311,
            endTime: 317,
        },
        {
            ...p8sp2Skills["high_concept"],
            startTime: 323,
            endTime: 332,
        },
        {
            ...p8sp2Skills["arcane_control"],
            startTime: 337,
            endTime: 340,
        },
        {
            ...p8sp2Skills["conceptual_shift"],
            startTime: 339,
            endTime: 340,
        },
        {
            ...p8sp2Skills["splicer"],
            startTime: 339,
            endTime: 340,
        },
        {
            ...p8sp2Skills["arcane_channel"],
            startTime: 351,
            endTime: 352,
        },
        {
            ...p8sp2Skills["ashing_blaze"],
            startTime: 346,
            endTime: 352,
        },
        {
            ...p8sp2Skills["arcane_control"],
            startTime: 355,
            endTime: 358,
        },
        {
            ...p8sp2Skills["conceptual_shift"],
            startTime: 357,
            endTime: 358,
        },
        {
            ...p8sp2Skills["end_of_days"],
            startTime: 369,
            endTime: 370,
        },
        {
            ...p8sp2Skills["arcane_channel"],
            startTime: 369,
            endTime: 370,
        },
        {
            ...p8sp2Skills["ego_death"],
            startTime: 380,
            endTime: 391,
        },
        {
            ...p8sp2Skills["aionagonia"],
            startTime: 417,
            endTime: 425,
        },
        {
            ...p8sp2Skills["dominion"],
            startTime: 428,
            endTime: 435,
        },
        {
            ...p8sp2Skills["orogenic_deformation"],
            startTime: 435,
            endTime: 436,
        },
        {
            ...p8sp2Skills["orogenic_shift"],
            startTime: 436,
            endTime: 443,
        },
        {
            ...p8sp2Skills["orogenic_shift"],
            startTime: 442,
            endTime: 449,
        },
        {
            ...p8sp2Skills["aionagonia"],
            startTime: 446,
            endTime: 454,
        },
        {
            ...p8sp2Skills["dominion"],
            startTime: 457,
            endTime: 464,
        },
        {
            ...p8sp2Skills["orogenic_deformation"],
            startTime: 464,
            endTime: 465,
        },
        {
            ...p8sp2Skills["orogenic_shift"],
            startTime: 465,
            endTime: 472,
        },
        {
            ...p8sp2Skills["orogenic_shift"],
            startTime: 471,
            endTime: 478,
        },
        {
            ...p8sp2Skills["aionagonia"],
            startTime: 475,
            endTime: 483,
        },
        {
            ...p8sp2Skills["ego_death_enrage"],
            startTime: 490,
            endTime: 506,
        },
    ]