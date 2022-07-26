import {p1sInfo, p1sTimeline} from './p1s';
import {p2sInfo, p2sTimeline} from './p2s';
import {p3sInfo, p3sTimeline} from './p3s';
import {p4sp1Info, p4sp1Timeline} from './p4sp1';
import {p4sp2Info, p4sp2Timeline} from './p4sp2';
import {dsrp1Info, dsrp1Timeline} from './dsrp1';
import {dsrp2Info, dsrp2Timeline} from './dsrp2';
import {dsrp34Info, dsrp34Timeline} from './dsrp34';
import {dsrp5Info, dsrp5Timeline} from './dsrp5';
import {dsrp6Info, dsrp6Timeline} from './dsrp6';
import {dsrp7Info, dsrp7Timeline} from './dsrp7';
import {dsrpostdoorbossInfo, dsrpostdoorbossTimeline} from './dsrpostdoorboss';

export const timelines =
[

    {
        info: dsrp1Info,
        timeline: dsrp1Timeline,
        id: 'dsrp1'
    },
    {
        info: dsrpostdoorbossInfo,
        timeline: dsrpostdoorbossTimeline,
        id: 'dsrpostdoorboss'
    },
    {
        info: dsrp2Info,
        timeline: dsrp2Timeline,
        id: 'dsrp2'
    },
    {
        info: dsrp34Info,
        timeline: dsrp34Timeline,
        id: 'dsrp34'
    },
    {
        info: dsrp5Info,
        timeline: dsrp5Timeline,
        id: 'dsrp5'
    },
    {
        info: dsrp6Info,
        timeline: dsrp6Timeline,
        id: 'dsrp6'
    },
    {
        info: dsrp7Info,
        timeline: dsrp7Timeline,
        id: 'dsrp7'
    },
    {
        info: p1sInfo,
        timeline: p1sTimeline,
        id: 'p1s'
    },
    {
        info: p2sInfo,
        timeline: p2sTimeline,
        id: 'p2s'
    },
    {
        info: p3sInfo,
        timeline: p3sTimeline,
        id: 'p3s'
    },
    {
        info: p4sp1Info,
        timeline: p4sp1Timeline,
        id: 'p4sp1'
    },
    {
        info: p4sp2Info,
        timeline: p4sp2Timeline,
        id: 'p4sp2'
    },
]

export const categories = 
[
    {
        id: 'dsr',
        name: "Dragonsong's Reprise (Ultimate) [DSR/DRU]",
        timelines: ['dsrp1', 'dsrpostdoorboss', 'dsrp2', 'dsrp34', 'dsrp5', 'dsrp6', 'dsrp7']
    },
    {
        id: 'asphodelos',
        name: 'Pandaemonium: Asphodelos (Savage) [P1S - P4S]',
        timelines: [ 'p1s', 'p2s', 'p3s', 'p4sp1', 'p4sp2']
    },
    {
        id: 'tea',
        name: 'The Epic of Alexander (Ultimate) [TEA]',
        timelines: []
    },
    {
        id: 'uwu',
        name: "The Weapon's Refrain (Ultimate) [UWU]",
        timelines: []
    },
    {
        id: 'ucob',
        name: 'The Unending Coil of Bahamut (Ultimate) [UCoB]',
        timelines: []
    }
]
