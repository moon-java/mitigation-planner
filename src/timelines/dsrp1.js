import { damageTypes, targets } from "../cooldowns/constants";

export const dsrp1Info = {
    name: "Dragonsong Reprise (Ultimate) | Phase 1",
    abbreviation: "DSR/DRU P1",
    boss: "Ser Adelphel, Ser Grinnaux, Ser Charibert",
    length: 162,
    level: 90
}

const dsrp1Skills = {
    holiest_of_holy: {
        id: 'holiest_of_holy',
        name: "Holiest of Holy",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false
    },
    empty_dimension: {
        id: 'empty_dimension',
        name: "Empty Dimension",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Donut AoE around Grinnaux",
        avoidable: true
    },
    empty_full_dimension: {
        id: 'empty_full_dimension',
        name: "Empty/Full Dimension",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: "Donut (Empty) or chariot (Full) around Grinnaux",
        avoidable: true
    },
    holy_shield_bash: {
        id: 'holy_shield_bash',
        name: "Holy Shield Bash",
        damageType: damageTypes.PHYS,
        tankbuster: true,
        target: targets.MT,
        notes: "Tether tankbuster; target is Down for the Count",
        avoidable: false
    },
    holy_bladedance: {
        id: 'holy_bladedance',
        name: "Holy Bladedance",
        damageType: damageTypes.PHYS,
        tankbuster: true,
        target: targets.MT,
        notes: "Downed tank hit for 5 hits",
        avoidable: false
    },
    heavensblaze: {
        id: 'heavensblaze',
        name: "Heavensblaze",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Stack"
    },
    hyperdimensional_slash: {
        id: 'hyperdimensional_slash',
        name: "Hyperdimensional Slash",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Wide laser on 4 party members, stack cleave on other 4; portals spawn at arena wall where lasers hit"
    },
    faith_unmoving: {
        id: 'faith_unmoving',
        name: "Faith Unmoving",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Knockback from Grinnaux"
    },
    shining_blade: {
        id: 'shining_blade',
        name: "Shining Blade",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "Adelphel dashes in Z formation, leaving exploding orbs behind"
    },
    execution: {
        id: 'execution',
        name: "Execution",
        damageType: damageTypes.MAGIC,
        target: targets.OT,
        tankbuster: true,
        avoidable: false,
        notes: "Adelphel drops on his tank, knocking back anyone else in his hitbox upon landing"
    },
    holiest_hallowing: {
        id: 'holiest_hallowing',
        name: "Holiest Hallowing",
        damageType: damageTypes.NONE,
        target: targets.NONE,
        interruptable: true,
        avoidable: false,
        notes: "Adelphel casts Clemency on Grinnaux, must interrupt"
    },
    heavensflame: {
        id: 'heavensflame',
        name: "Heavensflame",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "AoEs on all party members"
    },
    bulls_brightblades_steel: {
        id: 'bulls_brightblades_steel',
        name: "The Bull's/Brightblade's Steel",
        damageType: damageTypes.ENRAGE,
        target: targets.NONE,
        avoidable: false,
        notes: "If alive, Grinnaux/Adelphel heal to full, go untargetable, and get massively buffed"
    },
    planar_prison: {
        id: 'planar_prison',
        name: "Planar Prison",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false,
        notes: "Party pulled into small circle with Charibert"
    },
    shockwave: {
        id: 'shockwave',
        name: "Shockwave",
        damageType: damageTypes.DARK,
        target: targets.PARTY,
        avoidable: false,
        notes: "Small raidwide pulse damage from Haurchefaunt until he dies"
    },
    brightwing: {
        id: 'brightwing',
        name: "Brightwing",
        damageType: damageTypes.MAGIC,
        target: targets.PROXIMITY_CLOSE2,
        avoidable: false,
        notes: "Closest two targeted with cleaves"
    },
    skyblind: {
        id: 'skyblind',
        name: "Skyblind",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        avoidable: true,
        notes: "AoEs dropped upon expiration of Skyblind debuff explode"
    },
    pure_of_heart: {
        id: 'pure_of_heart',
        name: "Pure of Heart",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        avoidable: false,
        notes: "Charibert must be under 30% HP or you die"
    },
}

export const dsrp1Timeline = [
    {
       ...dsrp1Skills["holiest_of_holy"],
       startTime:6,
       endTime:10
    },
    {
       ...dsrp1Skills["empty_dimension"],
       startTime:18,
       endTime:23
    },
    {
       ...dsrp1Skills["holy_shield_bash"],
       startTime:18,
       endTime:23
    },
    {
       ...dsrp1Skills["heavensblaze"],
       startTime:23,
       endTime:28
    },
    {
       ...dsrp1Skills["holy_bladedance"],
       startTime:25,
       endTime:28
    },
    {
       ...dsrp1Skills["hyperdimensional_slash"],
       startTime:38,
       endTime:43
    },
    {
       ...dsrp1Skills["hyperdimensional_slash"],
       startTime:44,
       endTime:50
    },
    {
       ...dsrp1Skills["faith_unmoving"],
       startTime:55,
       endTime:59
    },
    {
       ...dsrp1Skills["holiest_of_holy"],
       startTime:56,
       endTime:60
    },
    {
       ...dsrp1Skills["shining_blade"],
       startTime:62,
       endTime:66
    },
    {
       ...dsrp1Skills["execution"],
       startTime:68,
       endTime:69
    },
    {
       ...dsrp1Skills["holiest_hallowing"],
       startTime:71,
       endTime:75
    },
    {
       ...dsrp1Skills["heavensflame"],
       startTime:80,
       endTime:87
    },
    {
       ...dsrp1Skills["faith_unmoving"],
       startTime:81,
       endTime:85
    },
    {
       ...dsrp1Skills["holiest_hallowing"],
       startTime:90,
       endTime:94
    },
    {
       ...dsrp1Skills["holiest_of_holy"],
       startTime:97,
       endTime:101
    },
    {
       ...dsrp1Skills["empty_full_dimension"],
       startTime:99,
       endTime:104
    },
    {
       ...dsrp1Skills["holiest_hallowing"],
       startTime:109,
       endTime:113
    },
    {
       ...dsrp1Skills["holiest_of_holy"],
       startTime:118,
       endTime:122
    },
    {
       ...dsrp1Skills["bulls_brightblades_steel"],
       startTime:120,
       endTime:122
    },
    {
       ...dsrp1Skills["planar_prison"],
       startTime:124,
       endTime:125
    },
    {
       ...dsrp1Skills["pure_of_heart"],
       startTime:125,
       endTime:160
    },
    {
       ...dsrp1Skills["shockwave"],
       startTime:131,
       endTime:138
    },
    {
       ...dsrp1Skills["brightwing"],
       startTime:136,
       endTime:137
    },
    {
       ...dsrp1Skills["brightwing"],
       startTime:141,
       endTime:142
    },
    {
       ...dsrp1Skills["brightwing"],
       startTime:146,
       endTime:147
    },
    {
       ...dsrp1Skills["brightwing"],
       startTime:151,
       endTime:152
    },
    {
       ...dsrp1Skills["skyblind"],
       startTime:144,
       endTime:145
    },
    {
       ...dsrp1Skills["skyblind"],
       startTime:149,
       endTime:150
    },
    {
       ...dsrp1Skills["skyblind"],
       startTime:154,
       endTime:155
    },
    {
        ...dsrp1Skills["skyblind"],
        startTime:160,
        endTime:161
     }
 ]