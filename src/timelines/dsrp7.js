import { damageTypes, targets } from '../cooldowns/constants';

export const dsrp7Info =
{
    name: "Dragonsong's Reprise (Ultimate) | Phase 7",
    abbreviation: "DSR/DRU P7",
    boss: "Dragon-King Thordan",
    length: 288,
    level: 90
}

export const dsrp7Skills =
{
    resentment: {
        id: "resentment",
        name: "Resentment",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Raidwide + bleed",
    },
    shockwave: {
        id: "shockwave",
        name: "Shockwave",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
    },
    exaflares_edge: {
        id: "exaflares_edge",
        name: "Exaflare's Edge",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Three tri-directional exaflares spawn",
    },
    flames_ice_of_ascalon: {
        id: "flames_ice_of_ascalon",
        name: "Flames/Ice of Ascalon",
        damageType: damageTypes.MAGIC,
        target: targets.DIRECTIONAL,
        avoidable: true,
        notes: "Chariot (fire) or donut (ice) around Thordan",
    },
    trinity_tank: {
        id: "trinity_tank",
        name: "Trinity (Tanks)",
        damageType: damageTypes.MAGIC,
        target: targets.AGGRO_1_2,
        avoidable: false,
        notes: "Dark-aspected auto hits 1st in aggro, light-aspected auto hits second in aggro",
    },
    trinity_other: {
        id: "trinity_other",
        name: "Trinity (DPS/Healer)",
        damageType: damageTypes.PHYS,
        target: targets.PROXIMITY_NEAR,
        avoidable: false,
        notes: "Physical auto on closest player not 1st or 2nd in aggro",
    },
    akh_morns_edge_5: {
        id: "akh_morns_edge_5",
        name: "Akh Morn's Edge (5 hits)",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Three towers spawn (two require three people, one requires both tanks), hit players in them five times",
    },
    akh_morns_edge_6: {
        id: "akh_morns_edge_6",
        name: "Akh Morn's Edge (6 hits)",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Three towers spawn (two require three people, one requires both tanks), hit players in them six times",
    },
    akh_morns_edge_7: {
        id: "akh_morns_edge_7",
        name: "Akh Morn's Edge (7 hits)",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Three towers spawn (two require three people, one requires both tanks), hit players in them seven times",
    },
    gigaflares_edge: {
        id: "gigaflares_edge",
        name: "Gigaflare's Edge",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: false,
        notes: "Three proximity-based AoEs spawn around arena",
    },
    morn_afahs_edge: {
        id: "morn_afahs_edge",
        name: "Morn Afah's Edge",
        damageType: damageTypes.ENRAGE,
        target: targets.ARENA,
        avoidable: false,
        notes: "Enrage sequence; towers spawn in sets of three, killing players who take them until all players are dead",
    },
    alternative_end: {
        id: "alternative_end",
        name: "Alternative End",
        damageType: damageTypes.MAGIC,
        target: targets.PARRTY,
        avoidable: false,
    },
}

export const dsrp7Timeline =
[
    {
        ...dsrp7Skills["resentment"],
        startTime: 16,
        endTime: 17,
    },
    {
        ...dsrp7Skills["shockwave"],
        startTime: 33,
        endTime: 34,
    },
    {
        ...dsrp7Skills["alternative_end"],
        startTime: 49,
        endTime: 50,
    },
    {
        ...dsrp7Skills["exaflares_edge"],
        startTime: 64,
        endTime: 70,
    },
    {
        ...dsrp7Skills["flames_ice_of_ascalon"],
        startTime: 69,
        endTime: 70,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 78,
        endTime: 79,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 78,
        endTime: 79,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 82,
        endTime: 83,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 82,
        endTime: 83,
    },
    {
        ...dsrp7Skills["akh_morns_edge_5"],
        startTime: 85,
        endTime: 92,
    },
    {
        ...dsrp7Skills["flames_ice_of_ascalon"],
        startTime: 91,
        endTime: 92,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 101,
        endTime: 102,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 101,
        endTime: 102,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 105,
        endTime: 106,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 105,
        endTime: 106,
    },
    {
        ...dsrp7Skills["gigaflares_edge"],
        startTime: 108,
        endTime: 116,
    },
    {
        ...dsrp7Skills["flames_ice_of_ascalon"],
        startTime: 115,
        endTime: 116,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 134,
        endTime: 135,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 134,
        endTime: 135,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 139,
        endTime: 140,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 139,
        endTime: 140,
    },
    {
        ...dsrp7Skills["exaflares_edge"],
        startTime: 142,
        endTime: 148,
    },
    {
        ...dsrp7Skills["flames_ice_of_ascalon"],
        startTime: 147,
        endTime: 148,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 156,
        endTime: 157,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 156,
        endTime: 157,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 160,
        endTime: 161,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 160,
        endTime: 161,
    },
    {
        ...dsrp7Skills["akh_morns_edge_6"],
        startTime: 163,
        endTime: 169,
    },
    {
        ...dsrp7Skills["flames_ice_of_ascalon"],
        startTime: 168,
        endTime: 169,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 182,
        endTime: 183,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 182,
        endTime: 183,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 186,
        endTime: 187,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 186,
        endTime: 187,
    },
    {
        ...dsrp7Skills["gigaflares_edge"],
        startTime: 189,
        endTime: 196,
    },
    {
        ...dsrp7Skills["flames_ice_of_ascalon"],
        startTime: 195,
        endTime: 196,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 222,
        endTime: 223,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 222,
        endTime: 223,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 226,
        endTime: 227,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 226,
        endTime: 227,
    },
    {
        ...dsrp7Skills["exaflares_edge"],
        startTime: 229,
        endTime: 235,
    },
    {
        ...dsrp7Skills["flames_ice_of_ascalon"],
        startTime: 234,
        endTime: 235,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 244,
        endTime: 245,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 244,
        endTime: 245,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 248,
        endTime: 249,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 248,
        endTime: 249,
    },
    {
        ...dsrp7Skills["akh_morns_edge_7"],
        startTime: 251,
        endTime: 257,
    },
    {
        ...dsrp7Skills["flames_ice_of_ascalon"],
        startTime: 256,
        endTime: 257,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 266,
        endTime: 267,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 266,
        endTime: 267,
    },
    {
        ...dsrp7Skills["trinity_tank"],
        startTime: 270,
        endTime: 271,
    },
    {
        ...dsrp7Skills["trinity_other"],
        startTime: 270,
        endTime: 271,
    },
    {
        ...dsrp7Skills["morn_afahs_edge"],
        startTime: 273,
        endTime: 288,
    },
]