import { damageTypes, targets } from '../cooldowns/constants';

export const dsrp2Info =
{
    name: "Dragonsong's Reprise (Ultimate) | Phase 2",
    abbreviation: "DSR/DRU P2",
    boss: "King Thordan",
    length: 196,
    level: 90
}

export const dsrp2Skills =
{
    ascalons_mercy: {
        id: "ascalons_mercy",
        name: "Ascalon's Mercy Concealed",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        avoidable: true,
        notes: "Non-telegraphed baited proteans",
    },
    ascalons_might: {
        id: "ascalons_might",
        name: "Ascalon's Might",
        damageType: damageTypes.PHYS,
        target: targets.MT,
        avoidable: false,
        tankbuster: true,
        notes: "3-hit cone tankbuster",
    },
    strength_of_the_ward: {
        id: "strength_of_the_ward",
        name: "Strength of the Ward",
        damageType: damageTypes.NONE,
        target: targets.NONE,
        avoidable: false,
    },
    spiral_thrust: {
        id: "spiral_thrust",
        name: "Spiral Thrust",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: true,
        notes: "3 dives across the arena; leaves one cardinal/intercardinal pair safe",
    },
    heavy_impact: {
        id: "heavy_impact",
        name: "Heavy Impact",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Expanding concentric earthquake AoE",
    },
    lightning_storm: {
        id: "lightning_storm",
        name: "Lightning Storm",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "AoEs on all party members",
    },
    dimensional_collapse: {
        id: "dimensional_collapse",
        name: "Dimensional Collapse",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: true,
        notes: "Expanding AoEs",
    },
    the_dragons_rage: {
        id: "the_dragons_rage",
        name: "The Dragon's Rage",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Stack damage on unmarked players",
    },
    skyward_leap: {
        id: "skyward_leap",
        name: "Skyward Leap",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Large AoEs on 3 marked players",
    },
    conviction: {
        id: "conviction",
        name: "Conviction",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Towers",
    },
    holy_shield_bash: {
        id: "holy_shield_bash",
        name: "Holy Shield Bash",
        damageType: damageTypes.PHYS,
        target: targets.MT + " + " + targets.OT,
        avoidable: false,
        tankbuster: true,
        notes: "Tether tankbuster; target is Down for the Count",
    },
    holy_bladedance: {
        id: "holy_bladedance",
        name: "Holy Bladedance",
        damageType: damageTypes.PHYS,
        target: targets.MT + " + " + targets.OT,
        avoidable: false,
        tankbuster: true,
        notes: "Multi-hit tankbuster on downed tank",
    },
    ancient_quaga: {
        id: "ancient_quaga",
        name: "Ancient Quaga",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
    },
    heavenly_heel: {
        id: "heavenly_heel",
        name: "Heavenly Heel",
        damageType: damageTypes.PHYS,
        target: targets.MT,
        avoidable: false,
        tankbuster: true,
        notes: "Tankbuster; applies Slashing Resistance Down",
    },
    sanctity_of_the_ward: {
        id: "sanctity_of_the_ward",
        name: "Sanctity of the Ward",
        damageType: damageTypes.NONE,
        target: targets.NONE,
        avoidable: false,
    },
    the_dragons_gaze_glory: {
        id: "the_dragons_gaze_glory",
        name: "The Dragon's Gaze/Glory",
        damageType: damageTypes.NONE,
        target: targets.GAZE,
        avoidable: true,
        notes: "Applies Hysteria if looking at eyeball or Thordan",
    },
    sacred_sever: {
        id: "sacred_sever",
        name: "Sacred Sever",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        avoidable: false,
        notes: "DRK plunges on players marked 1 & 2; proximity-based stack damage",
    },
    shining_blade: {
        id: "shining_blade",
        name: "Shining Blade",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "PLDs dash around arena leaving exploding orbs behind",
    },
    hiemal_storm: {
        id: "hiemal_storm",
        name: "Hiemal Storm",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "DPS or T/H targeted with shared ice AoEs",
    },
    holy_comet_cast: {
        id: "holy_comet_cast",
        name: "Holy Comet",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Two players marked for 7 comets",
    },
    holy_comet_fall: {
        id: "holy_comet_fall",
        name: "Comet Falls",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: false,
        notes: "Small proximity damage from comet",
    },
    faith_unmoving: {
        id: "faith_unmoving",
        name: "Faith Unmoving",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: false,
        notes: "Knockback from center of arena",
    },
    ultimate_end: {
        id: "ultimate_end",
        name: "Ultimate End",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Heavy-hitting raidwide (no cast)",
    },
    broad_swing: {
        id: "broad_swing",
        name: "Broad Swing",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: true,
        notes: "Thordan cleaves 120 degrees to his left/right/rear",
    },
    aetheric_burst: {
        id: "aetheric_burst",
        name: "Aetheric Burst",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false,
    },
}

export const dsrp2Timeline =
[
    {
        ...dsrp2Skills["ascalons_mercy"],
        startTime: 12,
        endTime: 13,
    },
    {
        ...dsrp2Skills["ascalons_might"],
        startTime: 15,
        endTime: 18,
    },
    {
        ...dsrp2Skills["strength_of_the_ward"],
        startTime: 25,
        endTime: 29,
    },
    {
        ...dsrp2Skills["spiral_thrust"],
        startTime: 36,
        endTime: 42,
    },
    {
        ...dsrp2Skills["heavy_impact"],
        startTime: 36,
        endTime: 46,
    },
    {
        ...dsrp2Skills["lightning_storm"],
        startTime: 41,
        endTime: 42,
    },
    {
        ...dsrp2Skills["ascalons_mercy"],
        startTime: 47,
        endTime: 49,
    },
    {
        ...dsrp2Skills["dimensional_collapse"],
        startTime: 49,
        endTime: 58,
    },
    {
        ...dsrp2Skills["the_dragons_rage"],
        startTime: 52,
        endTime: 57,
    },
    {
        ...dsrp2Skills["skyward_leap"],
        startTime: 57,
        endTime: 58,
    },
    {
        ...dsrp2Skills["holy_shield_bash"],
        startTime: 57,
        endTime: 58,
    },
    {
        ...dsrp2Skills["holy_bladedance"],
        startTime: 61,
        endTime: 63,
    },
    {
        ...dsrp2Skills["conviction"],
        startTime: 63,
        endTime: 64,
    },
    {
        ...dsrp2Skills["ancient_quaga"],
        startTime: 64,
        endTime: 70,
    },
    {
        ...dsrp2Skills["heavenly_heel"],
        startTime: 76,
        endTime: 80,
    },
    {
        ...dsrp2Skills["ascalons_might"],
        startTime: 83,
        endTime: 86,
    },
    {
        ...dsrp2Skills["sanctity_of_the_ward"],
        startTime: 93,
        endTime: 97,
    },
    {
        ...dsrp2Skills["the_dragons_gaze_glory"],
        startTime: 106,
        endTime: 110,
    },
    {
        ...dsrp2Skills["sacred_sever"],
        startTime: 110,
        endTime: 111,
    },
    {
        ...dsrp2Skills["shining_blade"],
        startTime: 111,
        endTime: 114,
    },
    {
        ...dsrp2Skills["sacred_sever"],
        startTime: 112,
        endTime: 113,
    },
    {
        ...dsrp2Skills["sacred_sever"],
        startTime: 114,
        endTime: 115,
    },
    {
        ...dsrp2Skills["sacred_sever"],
        startTime: 116,
        endTime: 117,
    },
    {
        ...dsrp2Skills["conviction"],
        startTime: 121,
        endTime: 133,
    },
    {
        ...dsrp2Skills["hiemal_storm"],
        startTime: 121,
        endTime: 129,
    },
    {
        ...dsrp2Skills["holy_comet_cast"],
        startTime: 121,
        endTime: 133,
    },
    {
        ...dsrp2Skills["conviction"],
        startTime: 136,
        endTime: 147,
    },
    {
        ...dsrp2Skills["faith_unmoving"],
        startTime: 140,
        endTime: 144,
    },
    {
        ...dsrp2Skills["ultimate_end"],
        startTime: 164,
        endTime: 165,
    },
    {
        ...dsrp2Skills["broad_swing"],
        startTime: 174,
        endTime: 180,
    },
    {
        ...dsrp2Skills["broad_swing"],
        startTime: 182,
        endTime: 188,
    },
    {
        ...dsrp2Skills["aetheric_burst"],
        startTime: 190,
        endTime: 196,
    },
    {
        ...dsrp2Skills["holy_comet_fall"],
        startTime: 136,
        endTime: 137,
    },
    {
        ...dsrp2Skills["holy_comet_fall"],
        startTime: 137,
        endTime: 138,
    },
    {
        ...dsrp2Skills["holy_comet_fall"],
        startTime: 138,
        endTime: 139,
    },
    {
        ...dsrp2Skills["holy_comet_fall"],
        startTime: 139,
        endTime: 140,
    },
    {
        ...dsrp2Skills["holy_comet_fall"],
        startTime: 140,
        endTime: 141,
    },
    {
        ...dsrp2Skills["holy_comet_fall"],
        startTime: 141,
        endTime: 142,
    },
    {
        ...dsrp2Skills["holy_comet_fall"],
        startTime: 142,
        endTime: 143,
    },
]