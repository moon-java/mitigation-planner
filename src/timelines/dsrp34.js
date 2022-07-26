import { damageTypes, targets } from '../cooldowns/constants';

export const dsrp34Info =
{
    name: "Dragonsong's Reprise (Ultimate) | Phases 3 & 4",
    abbreviation: "DSR/DRU P3 & P4",
    boss: "Nidhogg/Nidstinien & the Eyes",
    length: 201,
    level: 90
}

export const dsrp34Skills =
{
    final_chorus: {
        id: "final_chorus",
        name: "Final Chorus",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Opening raidwide",
    },
    dive_from_grace: {
        id: "dive_from_grace",
        name: "Dive From Grace",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Applies jump debuffs to party",
    },
    gnash_lash: {
        id: "gnash_lash",
        name: "Lash/Gnash",
        damageType: damageTypes.MAGIC,
        target: targets.DIRECTIONAL,
        avoidable: true,
        notes: "Lash (in) or Gnash (out)",
    },
    gnash_lash_cast: {
        id: "gnash_lash_cast",
        name: "Lash and Gnash/Gnash and Lash",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Skill name indicates order of Lash (in)/Gnash (out)",
    },
    dark_jump_1: {
        id: "dark_jump_1",
        name: "Dark Jump 1",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        avoidable: false,
        notes: "Party members marked First In Line jumped on; towers spawn relative to them based on high jump/elusive jump/spineshatter dive debuffs",
    },
    dark_jump_2: {
        id: "dark_jump_2",
        name: "Dark Jump 2",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        avoidable: false,
        notes: "Party members marked Second In Line jumped on; towers spawn relative to them based on high jump/elusive jump/spineshatter dive debuffs",
    },
    dark_jump_3: {
        id: "dark_jump_3",
        name: "Dark Jump 3",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        avoidable: false,
        notes: "Party members marked Third In Line jumped on; towers spawn relative to them based on high jump/elusive jump/spineshatter dive debuffs",
    },
    eye_of_the_tyrant: {
        id: "eye_of_the_tyrant",
        name: "Eye of the Tyrant",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Stack on a random party member",
    },
    darkdragon_dive: {
        id: "darkdragon_dive",
        name: "Darkdragon Dive",
        damageType: damageTypes.PHYS,
        target: targets.ARENA,
        avoidable: false,
        notes: "Towers",
    },
    geirskogul: {
        id: "geirskogul",
        name: "Geirskogul",
        damageType: damageTypes.MAGIC,
        target: targets.PROXIMITY_NEAR,
        avoidable: true,
        notes: "Line AoE targeted at closest player to each clone",
    },
    drachenlance: {
        id: "drachenlance",
        name: "Drachenlance",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        avoidable: true,
        notes: "90 degree cleave targeted at random player",
    },
    soul_tether: {
        id: "soul_tether",
        name: "Soul Tether",
        damageType: damageTypes.MAGIC,
        target: targets.MT + " + " + targets.OT,
        avoidable: false,
        tankbuster: true,
        notes: "Heavy-hitting tankbuster tethers",
    },
    revenge_of_the_horde: {
        id: "revenge_of_the_horde",
        name: "Revenge of the Horde",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false,
    },
    soul_of_devotion_friendship: {
        id: "soul_of_devotion_friendship",
        name: "Soul of Devotion/Friendship",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Red & blue buffs go out, get both",
    },
    resentment: {
        id: "resentment",
        name: "Resentment",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Raidwide with a 6s bleed",
    },
    hatebound: {
        id: "hatebound",
        name: "Hatebound",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Four party members get red debuff, four party members get blue debuff",
    },
    flare_nova_star: {
        id: "flare_nova_star",
        name: "Flare Nova/Star",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Magic damage to party members as they pop orbs",
    },
    mirage_dive: {
        id: "mirage_dive",
        name: "Mirage Dive",
        damageType: damageTypes.PHYS,
        target: targets.PARTY,
        avoidable: false,
        notes: "Dive on two players with red tether; applies Piercing Resistance Down",
    },
    steep_in_rage: {
        id: "steep_in_rage",
        name: "Steep in Rage",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false,
    },
}

export const dsrp34Timeline =
[
    {
        ...dsrp34Skills["final_chorus"],
        startTime: 0,
        endTime: 2,
    },
    {
        ...dsrp34Skills["dive_from_grace"],
        startTime: 15,
        endTime: 20,
    },
    {
        ...dsrp34Skills["gnash_lash_cast"],
        startTime: 22,
        endTime: 29,
    },
    {
        ...dsrp34Skills["gnash_lash"],
        startTime: 31,
        endTime: 32,
    },
    {
        ...dsrp34Skills["gnash_lash"],
        startTime: 34,
        endTime: 35,
    },
    {
        ...dsrp34Skills["dark_jump_1"],
        startTime: 28,
        endTime: 29,
    },
    {
        ...dsrp34Skills["eye_of_the_tyrant"],
        startTime: 28,
        endTime: 29,
    },
    {
        ...dsrp34Skills["darkdragon_dive"],
        startTime: 33,
        endTime: 35,
    },
    {
        ...dsrp34Skills["geirskogul"],
        startTime: 37,
        endTime: 42,
    },
    {
        ...dsrp34Skills["dark_jump_2"],
        startTime: 37,
        endTime: 38,
    },
    {
        ...dsrp34Skills["gnash_lash_cast"],
        startTime: 42,
        endTime: 49,
    },
    {
        ...dsrp34Skills["gnash_lash"],
        startTime: 52,
        endTime: 53,
    },
    {
        ...dsrp34Skills["gnash_lash"],
        startTime: 56,
        endTime: 57,
    },
    {
        ...dsrp34Skills["darkdragon_dive"],
        startTime: 42,
        endTime: 45,
    },
    {
        ...dsrp34Skills["geirskogul"],
        startTime: 47,
        endTime: 52,
    },
    {
        ...dsrp34Skills["dark_jump_3"],
        startTime: 48,
        endTime: 49,
    },
    {
        ...dsrp34Skills["eye_of_the_tyrant"],
        startTime: 49,
        endTime: 50,
    },
    {
        ...dsrp34Skills["darkdragon_dive"],
        startTime: 53,
        endTime: 56,
    },
    {
        ...dsrp34Skills["geirskogul"],
        startTime: 58,
        endTime: 63,
    },
    {
        ...dsrp34Skills["drachenlance"],
        startTime: 65,
        endTime: 69,
    },
    {
        ...dsrp34Skills["darkdragon_dive"],
        startTime: 70,
        endTime: 75,
    },
    {
        ...dsrp34Skills["geirskogul"],
        startTime: 78,
        endTime: 82,
    },
    {
        ...dsrp34Skills["soul_tether"],
        startTime: 78,
        endTime: 82,
    },
    {
        ...dsrp34Skills["drachenlance"],
        startTime: 103,
        endTime: 107,
    },
    {
        ...dsrp34Skills["revenge_of_the_horde"],
        startTime: 108,
        endTime: 119,
    },
    {
        ...dsrp34Skills["soul_of_devotion_friendship"],
        startTime: 130,
        endTime: 136,
    },
    {
        ...dsrp34Skills["resentment"],
        startTime: 140,
        endTime: 141,
    },
    {
        ...dsrp34Skills["hatebound"],
        startTime: 146,
        endTime: 149,
    },
    {
        ...dsrp34Skills["flare_nova_star"],
        startTime: 150,
        endTime: 180,
    },
    {
        ...dsrp34Skills["mirage_dive"],
        startTime: 172,
        endTime: 175,
    },
    {
        ...dsrp34Skills["mirage_dive"],
        startTime: 180,
        endTime: 181,
    },
    {
        ...dsrp34Skills["mirage_dive"],
        startTime: 185,
        endTime: 186,
    },
    {
        ...dsrp34Skills["mirage_dive"],
        startTime: 191,
        endTime: 192,
    },
    {
        ...dsrp34Skills["steep_in_rage"],
        startTime: 195,
        endTime: 201,
    },
]