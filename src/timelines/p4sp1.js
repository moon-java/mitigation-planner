import { damageTypes, targets } from "../cooldowns/constants";

export const p4sp1Info = {
    name: "Asphodelos: The Fourth Circle (Savage) | Phase 1",
    abbreviation: "P4S P1",
    boss: "Hesperos",
    length: 438,
    level: 90
}

const p4sp1Skills = {
    decollation: {
        id: 'decollation',
        name: "Decollation",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        avoidable: false
    },
    bloodrake: {
        id: 'bloodrake',
        name: "Bloodrake",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: 'Targets 4 or 8 party members to "mark" them for upcoming mechanics',
        avoidable: false
    },
    aetheric_chlamys: {
        id: 'aetheric_chlamys',
        name: "Aetheric Chlamys",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false
    },
    inversive_chlamys: {
        id: 'inversive_chlamys',
        name: "Inversive Chlamys",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false
    },
    directors_belone: {
        id: 'directors_belone',
        name: "Director's Belone",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        avoidable: false
    },
    elegant_evisceration_1: {
        id: 'elegant_evisceration_1',
        name: "Elegant Evisceration",
        damageType: damageTypes.MAGIC,
        target: targets.MT,
        notes: '2-hit tankbuster that applies magic vuln up, swap or invuln required',
        avoidable: false
    },
    elegant_evisceration_2: {
        id: 'elegant_evisceration_2',
        name: "Elegant Evisceration",
        damageType: damageTypes.MAGIC,
        target: targets.MT,
        avoidable: false
    },
    setting_the_scene: {
        id: 'setting_the_scene',
        name: "Setting the Scene",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Elemental floor tiles spawn",
        avoidable: false
    },
    pinax: {
        id: 'pinax',
        name: "Pinax",
        damageType: damageTypes.NONE,
        target: targets.ARENA,
        notes: "Elemental floor tiles begin resolving",
        avoidable: false
    },
    pinax_water_lightning: {
        id: 'pinax_water_lightning',
        name: "Pinax (Water/Lightning)",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Lightning = proximity AoE from center, water = KB from center",
        avoidable: false
    },
    pinax_fire_poison: {
        id: 'pinax_fire_poison',
        name: "Pinax (Fire/Poison)",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: "Fire = healer stacks, poison = spread",
        avoidable: false
    },
    directional_shift: {
        id: 'directional_shift',
        name: "Directional Shift",
        damageType: damageTypes.MAGIC,
        target: targets.DIRECTIONAL,
        notes: "Cast indicates direction (N/S/E/W), glowing cape = KB, glowing sword = ~145 degree cleave",
        avoidable: true
    },
    vengeful_belone: {
        id: 'vengeful_belone',
        name: "Vengeful Belone",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Acting Tank/Healer/DPS debuffs go out",
        avoidable: false
    },
    elemental_belone: {
        id: 'elemental_belone',
        name: "Elemental Belone",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: "Elemental resistance down debuffs go out",
        avoidable: false
    },
    belone_bursts: {
        id: 'belone_bursts',
        name: "Belone Bursts",
        damageType: damageTypes.NONE,
        target: targets.PARTY,
        notes: '8 orbs spawn, tether to closest player and are assigned "Not [target player role]"',
        avoidable: false
    },
    periaktoi: {
        id: 'periaktoi',
        name: "Periaktoi",
        damageType: damageTypes.MAGIC,
        target: targets.PARTY,
        notes: 'All floor tiles explode, tiles tethered during first Bloodrake post-Pinax are lethal',
        avoidable: false
    },
    belone_coils: {
        id: 'belone_coils',
        name: "Belone Coils",
        damageType: damageTypes.MAGIC,
        target: targets.ARENA,
        notes: '4 towers spawned, marked either "Not DPS" or "Not T/H"',
        avoidable: false
    },
    decollation_enrage: {
        id: 'decollation_enrage',
        name: "Decollation (Enrage)",
        damageType: damageTypes.ENRAGE,
        target: targets.PARTY,
        notes: "Boss goes untargetable",
        avoidable: false
    },
}

export const p4sp1Timeline = [
    {
        ...p4sp1Skills["decollation"],
        startTime: 10,
        endTime: 15
     },
    {
       ...p4sp1Skills["bloodrake"],
       startTime: 19,
       endTime: 23
    },
    {
       ...p4sp1Skills["aetheric_chlamys"],
       startTime: 26,
       endTime: 30
    },
    {
       ...p4sp1Skills["bloodrake"],
       startTime: 34,
       endTime: 38
    },
    {
       ...p4sp1Skills["directors_belone"],
       startTime: 43,
       endTime: 48
    },
    {
       ...p4sp1Skills["inversive_chlamys"],
       startTime: 56,
       endTime: 63
    },
    {
       ...p4sp1Skills["decollation"],
       startTime: 68,
       endTime: 73
    },
    {
       ...p4sp1Skills["elegant_evisceration_1"],
       startTime: 78,
       endTime: 82
    },
    {
       ...p4sp1Skills["elegant_evisceration_2"],
       startTime: 85,
       endTime: 86
    },
    {
       ...p4sp1Skills["setting_the_scene"],
       startTime: 97,
       endTime: 101
    },
    {
       ...p4sp1Skills["pinax"],
       startTime: 108,
       endTime: 113
    },
    {
       ...p4sp1Skills["pinax_water_lightning"],
       startTime: 123,
       endTime: 124
    },
    {
       ...p4sp1Skills["pinax_fire_poison"],
       startTime: 126,
       endTime: 127
    },
    {
       ...p4sp1Skills["directional_shift"],
       startTime: 131,
       endTime: 139
    },
    {
       ...p4sp1Skills["pinax_water_lightning"],
       startTime: 137,
       endTime: 138
    },
    {
       ...p4sp1Skills["pinax_fire_poison"],
       startTime: 147,
       endTime: 148
    },
    {
       ...p4sp1Skills["elegant_evisceration_1"],
       startTime: 152,
       endTime: 157
    },
    {
       ...p4sp1Skills["elegant_evisceration_2"],
       startTime: 160,
       endTime: 161
    },
    {
       ...p4sp1Skills["bloodrake"],
       startTime: 164,
       endTime: 168
    },
    {
       ...p4sp1Skills["setting_the_scene"],
       startTime: 178,
       endTime: 180
    },
    {
       ...p4sp1Skills["vengeful_belone"],
       startTime: 187,
       endTime: 191
    },
    {
       ...p4sp1Skills["elemental_belone"],
       startTime: 196,
       endTime: 200
    },
    {
       ...p4sp1Skills["bloodrake"],
       startTime: 205,
       endTime: 209
    },
    {
       ...p4sp1Skills["belone_bursts"],
       startTime: 212,
       endTime: 217
    },
    {
       ...p4sp1Skills["periaktoi"],
       startTime: 226,
       endTime: 231
    },
    {
       ...p4sp1Skills["bloodrake"],
       startTime: 239,
       endTime: 243
    },
    {
       ...p4sp1Skills["belone_coils"],
       startTime: 246,
       endTime: 250
    },
    {
       ...p4sp1Skills["inversive_chlamys"],
       startTime: 254,
       endTime: 261
    },
    {
       ...p4sp1Skills["aetheric_chlamys"],
       startTime: 264,
       endTime: 268
    },
    {
       ...p4sp1Skills["bloodrake"],
       startTime: 272,
       endTime: 276
    },
    {
       ...p4sp1Skills["belone_coils"],
       startTime: 280,
       endTime: 284
    },
    {
       ...p4sp1Skills["directors_belone"],
       startTime: 293,
       endTime: 298
    },
    {
       ...p4sp1Skills["inversive_chlamys"],
       startTime: 308,
       endTime: 315
    },
    {
       ...p4sp1Skills["decollation"],
       startTime: 318,
       endTime: 323
    },
    {
       ...p4sp1Skills["elegant_evisceration_1"],
       startTime: 328,
       endTime: 333
    },
    {
       ...p4sp1Skills["elegant_evisceration_2"],
       startTime: 336,
       endTime: 337
    },
    {
       ...p4sp1Skills["setting_the_scene"],
       startTime: 347,
       endTime: 351
    },
    {
       ...p4sp1Skills["pinax"],
       startTime: 359,
       endTime: 364
    },
    {
       ...p4sp1Skills["pinax_water_lightning"],
       startTime: 374,
       endTime: 375
    },
    {
       ...p4sp1Skills["pinax_fire_poison"],
       startTime: 377,
       endTime: 378
    },
    {
       ...p4sp1Skills["directional_shift"],
       startTime: 381,
       endTime: 389
    },
    {
       ...p4sp1Skills["pinax_water_lightning"],
       startTime: 387,
       endTime: 388
    },
    {
       ...p4sp1Skills["pinax_fire_poison"],
       startTime: 398,
       endTime: 399
    },
    {
       ...p4sp1Skills["decollation"],
       startTime: 399,
       endTime: 404
    },
    {
       ...p4sp1Skills["decollation"],
       startTime: 408,
       endTime: 413
    },
    {
       ...p4sp1Skills["decollation"],
       startTime: 417,
       endTime: 420
    },
    {
        ...p4sp1Skills["decollation_enrage"],
        startTime: 433,
        endTime: 438
     }
 ]