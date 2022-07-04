import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import MouseBackEnd from 'react-dnd-mouse-backend'

import classes from './App.module.css';
import { Planner, SkillEvent} from './mit-planner';
import skills from './cooldowns/skills.js';
import timelines from './timelines/timelines.js';

import DefaultBasicElement from './mit-planner/Components/DefaultElement/DefaultBasicElement/DefaultBasicElement';
import FightSelector from './mit-planner/Components/Dropdowns/FightSelector'
import JobSelector from './mit-planner/Components/Dropdowns/JobSelector';

const Option = props => (
    <div className={classes.Option}>
        <span style={{marginRight: '10px', fontSize: '14px'}}>{props.children}</span>
        <label className={classes.Switch}>
            <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
            <span className={`${classes.Slider} ${classes.Round}`}></span>
        </label>
    </div>
)

const App = () =>  {
    const [activePartyMember, setActivePartyMember] = useState( 0 );
    const [partyViewEnabled, setPartyViewEnabled] = useState( false );
    const [selectedFight, setSelectedFight] = useState('p1s');
    const [fightInfo, setFightInfo] = useState(timelines['p1s'].info);
    const [fightTimeline, setFightTimeline] = useState(timelines['p1s'].timeline);
    const [partyMembers, setPartyMembers] = useState([
        {
            partyMemberId: 0,
            job: "PLD",
            level: 90
        },
        {
            partyMemberId: 1,
            job: "GNB",
            level: 90
        },
        {
            partyMemberId: 2,
            job: "WHM",
            level: 90
        },
        {
            partyMemberId: 3,
            job: "SCH",
            level: 90
        },
        {
            partyMemberId: 4,
            job: "MNK",
            level: 90
        },
        {
            partyMemberId: 5,
            job: "DRG",
            level: 90
        },
        {
            partyMemberId: 6,
            job: "BRD",
            level: 90
        },
        {
            partyMemberId: 7,
            job: "BLM",
            level: 90
        }
    ]);

    const [timelineItems, setTimelineItems] = useState([
    ]);

    const startTime = 0;
    const endTime = fightInfo.length;

    const addHandler = ( {item, items} ) => {
        console.log( `Added : ${item}` );
        setTimelineItems( items );
    }

    const removeHandler = ( {item, items} ) => {
        console.log( `Removed : ${item}` );
        setTimelineItems( items );
    }

    const updateHandler = ( {item, items} ) => {
        setTimelineItems( items );
    }

    const partyMemberClickHandler = ( partyMemberId ) => {
        setActivePartyMember(partyMemberId);
    }

    const selectedFightChangedHandler = ( fightId ) => {
        setFightInfo(timelines[fightId].info);
        setFightTimeline(timelines[fightId].timeline);
        setSelectedFight(fightId);
    }

    const updatePrimaryJobHandler = ( job ) => {
        let tmpParty = {...partyMembers};
        let tmpItems = timelineItems.filter((item, i) => item.partyMemberId != 0);
        tmpParty[0].job = job;
        setTimelineItems(tmpItems);
        setPartyMembers(tmpParty);
    }

    const partyMemberJobChangeHandler = ( job, index ) => {
        let tmpParty = {...partyMembers};
        let tmpItems = timelineItems.filter((item, i) => item.partyMemberId != index);
        tmpParty[index].job = job;
        setTimelineItems(tmpItems);
        setPartyMembers(tmpParty);
    }

    const options = {
        callBacks : {
            onAdd : addHandler,
            onRemove: removeHandler,
            onUpdate: updateHandler,
            onPartyMemberClick: partyMemberClickHandler,
            onPartyMemberJobChange: partyMemberJobChangeHandler,
        },
        startTime : startTime, 
        endTime: endTime
    }

    const activeJob = partyMembers[activePartyMember].job;
    const activeSkills = skills[activeJob];
    return (
        <>
        <div className={classes.Header}>
            <h1>mitigation planner</h1>
            <h2>im tired of google spreadsheets</h2>
            <div style={{width: `fit-content`, margin: 'auto', height: `100px`, overflowY: `scroll`}}>
            <div style={{width: `fit-content`, margin: 'auto'}}>
                color coding:
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <ul style={{listStylePosition: 'inside'}}>
                        <li>red: physical tankbuster</li>
                        <li>orange: physical raidwide</li>
                        </ul>
                        <ul style={{listStylePosition: 'inside'}}>
                        <li>purple: magical tankbuster</li>
                        <li>pink: magical raidwide</li>
                        </ul>
                        <ul style={{listStylePosition: 'inside'}}>
                        <li>green: avoidable damage</li>
                        <li>blue: non-damaging/informational cast</li>
                        </ul>
                        <ul style={{listStylePosition: 'inside'}}>
                        <li>dark red: enrage</li>
                        <li>gray: i fucked up</li>
                        </ul>
                    </div>
                </div>
                <p>known issues:</p>
                <ul style={{listStylePosition: 'inside'}}>
                    <li>hover tooltips are kinda buggy</li>
                    <li>things that target party members (e.g. intervention) will calculate mit as if on self</li>
                    <li>p4sp2 timeline isnt done bc damage timing depends on how mechs are handled and im too lazy</li>
                </ul>
            </div>
        </div>
        <div className={classes.Content}>
        <div className={classes.Options}>
        <FightSelector onFightChange={selectedFightChangedHandler} />
        <JobSelector onJobChange={updatePrimaryJobHandler}/>
        <Option checked={partyViewEnabled} onChange={() => setPartyViewEnabled( !partyViewEnabled )}>
                        Party View
                    </Option>
        </div>
        </div>
        <DndProvider backend={MouseBackEnd}>
            <div className={classes.Content}>
                <br/>
                <div className={classes.Elements}>
                    {
                        activeSkills.map(( item, index ) => (
                            <div style={{marginRight: '10px'}} key={`main_item_${index}`}>
                                <SkillEvent 
                                    item={item}
                                    shadowed
                                    customElementType={DefaultBasicElement}
                                    useIcon={true}
                                    style={{backgroundColor: 'gray'}}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className={classes.Timeline}>
                    <Planner items={timelineItems}
                             options={options}
                             scroll={true}
                             partyView={partyViewEnabled}
                             partyMembers={partyMembers}
                             activePartyMember={activePartyMember}
                             duration={fightInfo.length}
                             timeline={fightTimeline}/>
                </div>

            </div>
        </DndProvider>
        </>
    );
}

export default App;
