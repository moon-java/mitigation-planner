import {p1sInfo, p1sTimeline} from './p1s';
import {p2sInfo, p2sTimeline} from './p2s';
import {p3sInfo, p3sTimeline} from './p3s';
import {p4sp1Info, p4sp1Timeline} from './p4sp1';

export const timelines =
{
    p1s:
    {
        info: p1sInfo,
        timeline: p1sTimeline
    },
    p2s:
    {
        info: p2sInfo,
        timeline: p2sTimeline
    },
    p3s:
    {
        info: p3sInfo,
        timeline: p3sTimeline
    },
    p4sp1:
    {
        info: p4sp1Info,
        timeline: p4sp1Timeline
    },
}

export default timelines;