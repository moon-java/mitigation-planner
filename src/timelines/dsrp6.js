import { damageTypes, targets } from '../cooldowns/constants';

export const dsrp6Info =
{
    name: "Dragonsong's Reprise (Ultimate) | Phase 6",
    abbreviation: "DSR/DRU P6",
    boss: "Nidhogg & Hraesvelgr",
    length: 178,
    level: 90
}

export const dsrp6Skills =
{
    dread_wyrmsbreath: {
        id: "dread_wyrmsbreath",
        name: "Dread Wyrmsbreath",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Three non-tanks tethered to Nidhogg for cone AoE with proximity-based damage that applies Pyretic and Boiling. Getting hit by cone from Hraesvelgr cancels Boiling.",
    },
    great_wyrmsbreath: {
        id: "great_wyrmsbreath",
        name: "Great Wyrmsbreath",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Three non-tanks tethered to Hraesvelgr for cone AoE with proximity-based damage that applies Deep Freeze and Freezing. Getting hit by cone from Nidhogg cancels Freezing.",
    },
    dark_staggering_breath: {
        id: "dark_staggering_breath",
        name: "Dark/Staggering Breath",
        damageType: damageTypes.PHYS,
        target: targets.MT,
        avoidable: false,
        tankbuster: true,
        notes: "If Nidhogg's mouth is not glowing, Nidhogg tank takes Staggering Breath, a solo buster; if both dragon mouths are glowing, Nidhogg tank takes Dark Breath, which applies the Dark Orb debuff, cancelled by stacking with Hraesvelgr tank taking Holy Breath.",
    },
    holy_staggering_breath: {
        id: "holy_staggering_breath",
        name: "Holy/Staggering Breath",
        damageType: damageTypes.PHYS,
        target: targets.MT,
        avoidable: false,
        tankbuster: true,
        notes: "If Hraesvelgr's mouth is not glowing, Hraesvelgr tank takes Staggering Breath, a solo buster; if both dragon mouths are glowing, Hraesvelgr tank takes Holy Breath, which applies Holy Orb debuff, cancelled by stacking with Nidhogg tank taking Dark Breath.",
    },
    akh_afah: {
        id: "akh_afah",
        name: "Akh Afah",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Stacks targeting each healer; Nidhogg & Hraesvelgr must be within 3% HP of each other or they do lethal damage",
    },
    cauterize: {
        id: "cauterize",
        name: "Cauterize",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Divebomb",
    },
    hallowed_wings: {
        id: "hallowed_wings",
        name: "Hallowed Wings",
        damageType: damageTypes.MAGIC,
        target: targets.DIRECTIONAL,
        avoidable: true,
        notes: "Hraesvelgr cleaves half of the arena based on which wing is glowing",
    },
    hallowed_plume: {
        id: "hallowed_plume",
        name: "Hallowed Plume",
        damageType: damageTypes.MAGIC,
        target: targets.MT + " + " + targets.OT,
        avoidable: false,
        tankbuster: true,
        notes: "AoE tankbusters targeting closest two players (if Hraesvelgr's head is down) or furthest two players (if his head is up)",
    },
    wroth_flames: {
        id: "wroth_flames",
        name: "Wroth Flames",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Applies Spreading Flame debuff to four random players and Entangled Pyre debuff to two random players",
    },
    mortal_vow: {
        id: "mortal_vow",
        name: "Mortal Vow",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Random party member receives initial Mortal Vow debuff",
    },
    mortal_vow_expires: {
        id: "mortal_vow_expires",
        name: "Mortal Vow Expires",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Mortal Vow expires, damaging the player who had it and applying it to one player in the area around them",
    },
    akh_morn: {
        id: "akh_morn",
        name: "Akh Morn",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Four hits of stack damage on a random player that leave persisting puddles which inflict a heavy bleed",
    },
    hot_tail_wing: {
        id: "hot_tail_wing",
        name: "Hot Tail/Wing",
        damageType: damageTypes.MAGIC,
        target: targets.DIRECTIONAL,
        avoidable: true,
        notes: "Line cleave through Nidhogg's center (Tail) or outside his hitbox from his wings (Wing)",
    },
    touchdown: {
        id: "touchdown",
        name: "Touchdown",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: false,
        notes: "Proximity damage from where dragon lands",
    },
    revenge_of_the_horde: {
        id: "revenge_of_the_horde",
        name: "Revenge of the Horde",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false,
    },
    fire_debuffs_expire: {
        id: "fire_debuffs_expire",
        name: "Spreading Flame & Entangled Pyre Expire",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
    },
}

export const dsrp6Timeline =
[
    {
        ...dsrp6Skills["dread_wyrmsbreath"],
        startTime: 6,
        endTime: 12,
    },
    {
        ...dsrp6Skills["great_wyrmsbreath"],
        startTime: 6,
        endTime: 12,
    },
    {
        ...dsrp6Skills["dark_staggering_breath"],
        startTime: 12,
        endTime: 13,
    },
    {
        ...dsrp6Skills["holy_staggering_breath"],
        startTime: 12,
        endTime: 13,
    },
    {
        ...dsrp6Skills["mortal_vow"],
        startTime: 19,
        endTime: 20,
    },
    {
        ...dsrp6Skills["akh_afah"],
        startTime: 23,
        endTime: 31,
    },
    {
        ...dsrp6Skills["hallowed_wings"],
        startTime: 37,
        endTime: 45,
    },
    {
        ...dsrp6Skills["cauterize"],
        startTime: 41,
        endTime: 46,
    },
    {
        ...dsrp6Skills["hallowed_plume"],
        startTime: 45,
        endTime: 46,
    },
    {
        ...dsrp6Skills["mortal_vow_expires"],
        startTime: 54,
        endTime: 55,
    },
    {
        ...dsrp6Skills["wroth_flames"],
        startTime: 57,
        endTime: 60,
    },
    {
        ...dsrp6Skills["akh_morn"],
        startTime: 63,
        endTime: 71,
    },
    {
        ...dsrp6Skills["cauterize"],
        startTime: 66,
        endTime: 71,
    },
    {
        ...dsrp6Skills["hot_tail_wing"],
        startTime: 77,
        endTime: 84,
    },
    {
        ...dsrp6Skills["fire_debuffs_expire"],
        startTime: 84,
        endTime: 85,
    },
    {
        ...dsrp6Skills["mortal_vow_expires"],
        startTime: 88,
        endTime: 89,
    },
    {
        ...dsrp6Skills["akh_afah"],
        startTime: 93,
        endTime: 101,
    },
    {
        ...dsrp6Skills["hallowed_wings"],
        startTime: 105,
        endTime: 113,
    },
    {
        ...dsrp6Skills["hot_tail_wing"],
        startTime: 107,
        endTime: 114,
    },
    {
        ...dsrp6Skills["hallowed_plume"],
        startTime: 113,
        endTime: 114,
    },
    {
        ...dsrp6Skills["mortal_vow_expires"],
        startTime: 121,
        endTime: 122,
    },
    {
        ...dsrp6Skills["dread_wyrmsbreath"],
        startTime: 126,
        endTime: 133,
    },
    {
        ...dsrp6Skills["great_wyrmsbreath"],
        startTime: 126,
        endTime: 133,
    },
    {
        ...dsrp6Skills["dark_staggering_breath"],
        startTime: 133,
        endTime: 134,
    },
    {
        ...dsrp6Skills["holy_staggering_breath"],
        startTime: 133,
        endTime: 134,
    },
    {
        ...dsrp6Skills["cauterize"],
        startTime: 141,
        endTime: 146,
    },
    {
        ...dsrp6Skills["touchdown"],
        startTime: 151,
        endTime: 152,
    },
    {
        ...dsrp6Skills["mortal_vow_expires"],
        startTime: 155,
        endTime: 156,
    },
    {
        ...dsrp6Skills["revenge_of_the_horde"],
        startTime: 154,
        endTime: 178,
    },
]