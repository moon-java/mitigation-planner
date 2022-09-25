import { damageTypes, targets } from '../cooldowns/constants';

export const p8sp1v1Info =
{
    name: "Abyssos: The Eigth Circle (Savage) | Phase 1 | Dog First",
    abbreviation: "P8S P1 V1",
    boss: "Hephaistos",
    length: 472,
    level: 90
}

export const p8sp1v1Skills =
{
    genesis_of_flame: {
        id: "genesis_of_flame",
        name: "Genesis of Flame",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Raidwide",
    },
    conceptual_octa_tetra: {
        id: "conceptual_octa_tetra",
        name: "Conceptual Octaflare/Tetraflare (cast)",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Individual AoEs (octa) or partner stacks (tetra) stored for later",
    },
    volcanic_torches: {
        id: "volcanic_torches",
        name: "Volcanic Torches",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Blue flames spawn and begin moving",
    },
    torch_flame: {
        id: "torch_flame",
        name: "Torch Flame",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Squares outlined by Volcanic Torches explode",
    },
    sunforge: {
        id: "sunforge",
        name: "Sunforge",
        damageType: damageTypes.MAGIC,
        target: targets.DIRECTIONAL,
        avoidable: true,
        notes: "Spawns snake (cleaves middle) or phoenix (cleaves outsides)",
    },
    emergent_octa_tetra: {
        id: "emergent_octa_tetra",
        name: "Emergent Octaflare/Tetraflare",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Stored octa/tetraflare resolves",
    },
    flameviper_1: {
        id: "flameviper_1",
        name: "Flameviper 1",
        damageType: damageTypes.MAGIC,
        target: targets.MT,
        avoidable: false,
        tankbuster: true,
        notes: "Line cleave tankbuster applies vuln; swap required",
    },
    flameviper_2: {
        id: "flameviper_2",
        name: "Flameviper 2",
        damageType: damageTypes.MAGIC,
        target: targets.MT,
        avoidable: false,
        tankbuster: true,
        notes: "Untelegraphed second hit of buster; must swap back as autos will kill while vuln is up",
    },
    reforged_reflection: {
        id: "reforged_reflection",
        name: "Reforged Reflection",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: true,
        notes: "Transforms into dog or snake",
    },
    footprint: {
        id: "footprint",
        name: "Footprint",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: false,
        notes: "KB as boss drops back to ground after transforming",
    },
    rearing_rampage: {
        id: "rearing_rampage",
        name: "Rearing Rampage",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        avoidable: false,
        notes: "Heavy-hitting raidwide; two players will be hit with uplifts and have Earth Res Down applied",
    },
    stomp_dead: {
        id: "stomp_dead",
        name: "Stomp Dead",
        damageType: damageTypes.PHYS,
        target: targets.PROXIMITY_FAR,
        avoidable: false,
        notes: "Hard-hitting jump on furthest player that must be taken in pairs; will kill if Earth Res Down hasn't fallen off",
    },
    illusory_creation_1: {
        id: "illusory_creation_1",
        name: "Illusory Creation",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Spawns four clones N/S/E/W",
    },
    creation_on_command: {
        id: "creation_on_command",
        name: "Creation on Command",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Clones begin using Sunforge in pairs",
    },
    manifold_flames: {
        id: "manifold_flames",
        name: "Manifold Flames",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Untelegraphed AoEs hit all DPS or all tanks/heals and applies vuln",
    },
    manifold_flames_protean: {
        id: "manifold_flames_protean",
        name: "Nest of Flamevipers",
        damageType: damageTypes.MAGIC,
        target: targets.PROXIMITY_CLOSE4,
        avoidable: false,
        notes: "Line cleaves on four closest players; must be taken by role that didn't get hit with AoEs",
    },
    clone_sunforge_1: {
        id: "clone_sunforge_1",
        name: "Sunforge",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "One clone spawns snake; one clone spawns phoenix",
    },
    clone_sunforge_2: {
        id: "clone_sunforge_2",
        name: "Sunforge",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Two clones both spawn snake or both spawn phoenix",
    },
    flameviper_tetraflare: {
        id: "flameviper_tetraflare",
        name: "Nest of Flamevipers/Tetraflare",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Line cleaves on all party members (Flamevipers) or partner stacks (Tetraflare)",
    },
    snaking_kick: {
        id: "snaking_kick",
        name: "Snaking Kick",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: true,
        notes: "AoE inside boss's hitbox",
    },
    gorgomanteia_1: {
        id: "gorgomanteia_1",
        name: "Gorgomanteia",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Eye/Blood of the Gorgon and First/Second in Line debuffs go out",
    },
    into_the_shadows_1: {
        id: "into_the_shadows_1",
        name: "Into the Shadows",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Spawns snakes in two sets of two",
    },
    petrification: {
        id: "petrification",
        name: "Petrification",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: true,
        notes: "Gaze attack from snakes when they emerge",
    },
    gorgoneion: {
        id: "gorgoneion",
        name: "Gorgoneion",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: true,
        notes: "Adds enrage if not petrified & killed",
    },
    eye: {
        id: "eye",
        name: "Eye of the Gorgon",
        damageType: damageTypes.NONE,
        target: targets.DIRECTIONAL,
        avoidable: true,
        notes: "Party members with Eye debuff shoot petrifying cone AoE in front of them as debuff expires",
    },
    blood: {
        id: "blood",
        name: "Blood of the Gorgon",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Individual AoE on party members with Blood debuff as debuff expires; kills petrified snakes",
    },
    ektothermos: {
        id: "ektothermos",
        name: "Ektothermos",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Heavy-hitting raidwide",
    },
    fourfold_fires: {
        id: "fourfold_fires",
        name: "Fourfold Fires",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Spawns four proximity AoEs from corners",
    },
    abyssal_fires: {
        id: "abyssal_fires",
        name: "Abyssal Fires",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: false,
        notes: "Proximity AoEs resolve and leave fire puddles",
    },
    cthonic_vent_cast: {
        id: "cthonic_vent_cast",
        name: "Cthonic Vent",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Spawns fire snakes in two puddles that begin bubbling more than the other two",
    },
    cthonic_vent_resolves: {
        id: "cthonic_vent_resolves",
        name: "Cthonic Vent (AoE)",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Large AoE around fire puddles as snakes emerge and move to new puddles",
    },
    octa_tetra: {
        id: "octa_tetra",
        name: "Octaflare/Tetraflare",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Individual AoEs (octa) or partner stacks (tetra); resolves at end of cast (not stored)",
    },
    quadrupedal_crush_impact: {
        id: "quadrupedal_crush_impact",
        name: "Quadrupedal Crush/Impact",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: true,
        notes: "Boss jumps to wall with either large AoE (Crush) or long KB (Impact) from landing spot",
    },
    blazing_footfalls: {
        id: "blazing_footfalls",
        name: "Blazing Footfalls",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Shows indicators of location/direction/order of subsequent dashes & jumps",
    },
    trailblaze: {
        id: "trailblaze",
        name: "Trailblaze",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: false,
        notes: "Boss dashes with KB from lines along middle murder zone",
    },
    into_the_shadows_2: {
        id: "into_the_shadows_2",
        name: "Into the Shadows",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Spawns four snakes at once",
    },
    gorgomanteia_2: {
        id: "gorgomanteia_2",
        name: "Gorgomanteia",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Eye/Blood/Crown/Breath of the Gorgon debuffs go out",
    },
    gorgospit_1: {
        id: "gorgospit_1",
        name: "Gorgospit",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Clones shoot line cleaves through outer tiles",
    },
    illusory_creation_2: {
        id: "illusory_creation_2",
        name: "Illusory Creation",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Spawns one clone on outside of arena",
    },
    gorgospit_2: {
        id: "gorgospit_2",
        name: "Gorgospit",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Clone shoots line cleave directly in front; kills any petrified snakes in its path",
    },
    crown: {
        id: "crown",
        name: "Crown of the Gorgon",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: true,
        notes: "Gaze attack from players with Crown debuff as it expires; must line of sight Crown players behind petrified snake",
    },
    breath: {
        id: "breath",
        name: "Breath of the Gorgon",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "4-man stacks on players with Breath debuff as it expires; kills petrified snakes",
    },
    genesis_of_flame_enrage: {
        id: "genesis_of_flame_enrage",
        name: "Genesis of Flamre",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false,
    },
    conceptual_di_tetra: {
        id: "conceptual_di_tetra",
        name: "Conceptual Diflare/Tetraflare",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "4-man stacks (diflare) or partner stacks (tetraflare) stored for later",
    },
    emergent_di_tetra: {
        id: "emergent_di_tetra",
        name: "Emergent Diflare/Tetraflare",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Stored di/tetraflare resolves",
    },
}

export const p8sp1v1Timeline =
[
    {
        ...p8sp1v1Skills["genesis_of_flame"],
        startTime: 7,
        endTime: 12,
    },
    {
        ...p8sp1v1Skills["conceptual_octa_tetra"],
        startTime: 15,
        endTime: 18,
    },
    {
        ...p8sp1v1Skills["volcanic_torches"],
        startTime: 21,
        endTime: 24,
    },
    {
        ...p8sp1v1Skills["torch_flame"],
        startTime: 37,
        endTime: 38,
    },
    {
        ...p8sp1v1Skills["sunforge"],
        startTime: 32,
        endTime: 40,
    },
    {
        ...p8sp1v1Skills["emergent_octa_tetra"],
        startTime: 40,
        endTime: 41,
    },
    {
        ...p8sp1v1Skills["flameviper_1"],
        startTime: 42,
        endTime: 48,
    },
    {
        ...p8sp1v1Skills["flameviper_2"],
        startTime: 50,
        endTime: 51,
    },
    {
        ...p8sp1v1Skills["reforged_reflection"],
        startTime: 60,
        endTime: 63,
    },
    {
        ...p8sp1v1Skills["footprint"],
        startTime: 69,
        endTime: 70,
    },
    {
        ...p8sp1v1Skills["rearing_rampage"],
        startTime: 71,
        endTime: 77,
    },
    {
        ...p8sp1v1Skills["rearing_rampage"],
        startTime: 78,
        endTime: 79,
    },
    {
        ...p8sp1v1Skills["rearing_rampage"],
        startTime: 80,
        endTime: 81,
    },
    {
        ...p8sp1v1Skills["rearing_rampage"],
        startTime: 82,
        endTime: 83,
    },
    {
        ...p8sp1v1Skills["stomp_dead"],
        startTime: 84,
        endTime: 89,
    },
    {
        ...p8sp1v1Skills["stomp_dead"],
        startTime: 91,
        endTime: 92,
    },
    {
        ...p8sp1v1Skills["stomp_dead"],
        startTime: 93,
        endTime: 94,
    },
    {
        ...p8sp1v1Skills["stomp_dead"],
        startTime: 95,
        endTime: 96,
    },
    {
        ...p8sp1v1Skills["illusory_creation_1"],
        startTime: 111,
        endTime: 114,
    },
    {
        ...p8sp1v1Skills["creation_on_command"],
        startTime: 117,
        endTime: 120,
    },
    {
        ...p8sp1v1Skills["manifold_flames"],
        startTime: 123,
        endTime: 128,
    },
    {
        ...p8sp1v1Skills["clone_sunforge_1"],
        startTime: 121,
        endTime: 129,
    },
    {
        ...p8sp1v1Skills["manifold_flames_protean"],
        startTime: 132,
        endTime: 133,
    },
    {
        ...p8sp1v1Skills["flameviper_tetraflare"],
        startTime: 135,
        endTime: 141,
    },
    {
        ...p8sp1v1Skills["clone_sunforge_2"],
        startTime: 133,
        endTime: 141,
    },
    {
        ...p8sp1v1Skills["torch_flame"],
        startTime: 152,
        endTime: 153,
    },
    {
        ...p8sp1v1Skills["genesis_of_flame"],
        startTime: 153,
        endTime: 157,
    },
    {
        ...p8sp1v1Skills["reforged_reflection"],
        startTime: 167,
        endTime: 170,
    },
    {
        ...p8sp1v1Skills["snaking_kick"],
        startTime: 176,
        endTime: 177,
    },
    {
        ...p8sp1v1Skills["gorgomanteia_1"],
        startTime: 180,
        endTime: 183,
    },
    {
        ...p8sp1v1Skills["into_the_shadows_1"],
        startTime: 186,
        endTime: 189,
    },
    {
        ...p8sp1v1Skills["petrification"],
        startTime: 195,
        endTime: 203,
    },
    {
        ...p8sp1v1Skills["gorgoneion"],
        startTime: 206,
        endTime: 209,
    },
    {
        ...p8sp1v1Skills["eye"],
        startTime: 206,
        endTime: 207,
    },
    {
        ...p8sp1v1Skills["blood"],
        startTime: 209,
        endTime: 210,
    },
    {
        ...p8sp1v1Skills["petrification"],
        startTime: 203,
        endTime: 211,
    },
    {
        ...p8sp1v1Skills["gorgoneion"],
        startTime: 214,
        endTime: 217,
    },
    {
        ...p8sp1v1Skills["eye"],
        startTime: 214,
        endTime: 215,
    },
    {
        ...p8sp1v1Skills["blood"],
        startTime: 217,
        endTime: 218,
    },
    {
        ...p8sp1v1Skills["ektothermos"],
        startTime: 222,
        endTime: 227,
    },
    {
        ...p8sp1v1Skills["conceptual_octa_tetra"],
        startTime: 243,
        endTime: 246,
    },
    {
        ...p8sp1v1Skills["fourfold_fires"],
        startTime: 249,
        endTime: 252,
    },
    {
        ...p8sp1v1Skills["abyssal_fires"],
        startTime: 253,
        endTime: 258,
    },
    {
        ...p8sp1v1Skills["cthonic_vent_cast"],
        startTime: 258,
        endTime: 261,
    },
    {
        ...p8sp1v1Skills["cthonic_vent_resolves"],
        startTime: 268,
        endTime: 269,
    },
    {
        ...p8sp1v1Skills["cthonic_vent_resolves"],
        startTime: 276,
        endTime: 277,
    },
    {
        ...p8sp1v1Skills["octa_tetra"],
        startTime: 272,
        endTime: 277,
    },
    {
        ...p8sp1v1Skills["cthonic_vent_resolves"],
        startTime: 285,
        endTime: 286,
    },
    {
        ...p8sp1v1Skills["sunforge"],
        startTime: 283,
        endTime: 291,
    },
    {
        ...p8sp1v1Skills["emergent_octa_tetra"],
        startTime: 290,
        endTime: 291,
    },
    {
        ...p8sp1v1Skills["flameviper_1"],
        startTime: 293,
        endTime: 298,
    },
    {
        ...p8sp1v1Skills["flameviper_2"],
        startTime: 300,
        endTime: 301,
    },
    {
        ...p8sp1v1Skills["reforged_reflection"],
        startTime: 311,
        endTime: 314,
    },
    {
        ...p8sp1v1Skills["footprint"],
        startTime: 319,
        endTime: 320,
    },
    {
        ...p8sp1v1Skills["quadrupedal_crush_impact"],
        startTime: 321,
        endTime: 326,
    },
    {
        ...p8sp1v1Skills["conceptual_di_tetra"],
        startTime: 330,
        endTime: 333,
    },
    {
        ...p8sp1v1Skills["blazing_footfalls"],
        startTime: 336,
        endTime: 348,
    },
    {
        ...p8sp1v1Skills["trailblaze"],
        startTime: 348,
        endTime: 349,
    },
    {
        ...p8sp1v1Skills["emergent_di_tetra"],
        startTime: 349,
        endTime: 350,
    },
    {
        ...p8sp1v1Skills["quadrupedal_crush_impact"],
        startTime: 353,
        endTime: 354,
    },
    {
        ...p8sp1v1Skills["trailblaze"],
        startTime: 356,
        endTime: 357,
    },
    {
        ...p8sp1v1Skills["quadrupedal_crush_impact"],
        startTime: 358,
        endTime: 359,
    },
    {
        ...p8sp1v1Skills["torch_flame"],
        startTime: 362,
        endTime: 363,
    },
    {
        ...p8sp1v1Skills["flameviper_1"],
        startTime: 372,
        endTime: 377,
    },
    {
        ...p8sp1v1Skills["flameviper_2"],
        startTime: 379,
        endTime: 380,
    },
    {
        ...p8sp1v1Skills["reforged_reflection"],
        startTime: 390,
        endTime: 393,
    },
    {
        ...p8sp1v1Skills["snaking_kick"],
        startTime: 399,
        endTime: 400,
    },
    {
        ...p8sp1v1Skills["gorgomanteia_2"],
        startTime: 403,
        endTime: 406,
    },
    {
        ...p8sp1v1Skills["into_the_shadows_2"],
        startTime: 409,
        endTime: 412,
    },
    {
        ...p8sp1v1Skills["petrification"],
        startTime: 418,
        endTime: 427,
    },
    {
        ...p8sp1v1Skills["gorgospit_1"],
        startTime: 429,
        endTime: 430,
    },
    {
        ...p8sp1v1Skills["eye"],
        startTime: 429,
        endTime: 430,
    },
    {
        ...p8sp1v1Skills["gorgoneion"],
        startTime: 429,
        endTime: 432,
    },
    {
        ...p8sp1v1Skills["blood"],
        startTime: 429,
        endTime: 430,
    },
    {
        ...p8sp1v1Skills["illusory_creation_2"],
        startTime: 431,
        endTime: 434,
    },
    {
        ...p8sp1v1Skills["eye"],
        startTime: 435,
        endTime: 436,
    },
    {
        ...p8sp1v1Skills["blood"],
        startTime: 435,
        endTime: 436,
    },
    {
        ...p8sp1v1Skills["gorgospit_2"],
        startTime: 444,
        endTime: 445,
    },
    {
        ...p8sp1v1Skills["crown"],
        startTime: 444,
        endTime: 445,
    },
    {
        ...p8sp1v1Skills["breath"],
        startTime: 445,
        endTime: 446,
    },
    {
        ...p8sp1v1Skills["genesis_of_flame"],
        startTime: 454,
        endTime: 459,
    },
    {
        ...p8sp1v1Skills["genesis_of_flame_enrage"],
        startTime: 467,
        endTime: 472,
    },
]