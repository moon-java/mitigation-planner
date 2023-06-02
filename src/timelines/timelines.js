import { p1sInfo, p1sTimeline } from './p1s';
import { p2sInfo, p2sTimeline } from './p2s';
import { p3sInfo, p3sTimeline } from './p3s';
import { p4sp1Info, p4sp1Timeline } from './p4sp1';
import { p4sp2Info, p4sp2Timeline } from './p4sp2';
import { p5sInfo, p5sTimeline } from './p5s';
import { p6sInfo, p6sTimeline } from './p6s';
import { p7sInfo, p7sTimeline } from './p7s';
import { p8sp1v1Info, p8sp1v1Timeline } from './p8sp1v1';
import { p8sp1v2Info, p8sp1v2Timeline } from './p8sp1v2';
import { p8sp2Info, p8sp2Timeline } from './p8sp2';
import { dsrp1Info, dsrp1Timeline } from './dsrp1';
import { dsrp2Info, dsrp2Timeline } from './dsrp2';
import { dsrp34Info, dsrp34Timeline } from './dsrp34';
import { dsrp5Info, dsrp5Timeline } from './dsrp5';
import { dsrp6Info, dsrp6Timeline } from './dsrp6';
import { dsrp7Info, dsrp7Timeline } from './dsrp7';
import { dsrpostdoorbossInfo, dsrpostdoorbossTimeline } from './dsrpostdoorboss';
import { topInfo, topTimeline } from './top';
import { p9sInfo, p9sTimeline } from './p9s';
import { p10sInfo, p10sTimeline } from './p10s';

export const timelines =
    [
        {
            info: p9sInfo,
            timeline: p9sTimeline,
            id: 'p9s'
        },
        {
            info: p10sInfo,
            timeline: p10sTimeline,
            id: 'p10s'
        },
        {
            info: topInfo,
            timeline: topTimeline,
            id: 'top'
        },
        {
            info: p5sInfo,
            timeline: p5sTimeline,
            id: 'p5s'
        },
        {
            info: p6sInfo,
            timeline: p6sTimeline,
            id: 'p6s'
        },
        {
            info: p7sInfo,
            timeline: p7sTimeline,
            id: 'p7s'
        },
        {
            info: p8sp1v1Info,
            timeline: p8sp1v1Timeline,
            id: 'p8sp1v1'
        },
        {
            info: p8sp1v2Info,
            timeline: p8sp1v2Timeline,
            id: 'p8sp1v2'
        },
        {
            info: p8sp2Info,
            timeline: p8sp2Timeline,
            id: 'p8sp2'
        },
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
            id: 'anabaseios',
            name: "Pandaemonium: Anabaseios (Savage) [P9S-P12S]",
            timelines: ['p9s', 'p10s']
        },
        {
            id: 'top',
            name: "The Omega Protocol (Ultimate) [TOP]",
            timelines: ['top']
        },
        {
            id: 'abyssos',
            name: 'Pandaemonium: Abyssos (Savage) [P5S-P8S]',
            timelines: ['p5s', 'p6s', 'p7s', 'p8sp1v1', 'p8sp1v2', 'p8sp2']
        },
        {
            id: 'dsr',
            name: "Dragonsong's Reprise (Ultimate) [DSR/DRU]",
            timelines: ['dsrp1', 'dsrpostdoorboss', 'dsrp2', 'dsrp34', 'dsrp5', 'dsrp6', 'dsrp7']
        },
        {
            id: 'asphodelos',
            name: 'Pandaemonium: Asphodelos (Savage) [P1S - P4S]',
            timelines: ['p1s', 'p2s', 'p3s', 'p4sp1', 'p4sp2']
        },
        /*{
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
        }*/
    ]
