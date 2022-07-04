import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import MouseBackEnd from 'react-dnd-mouse-backend';

import classes from './App.module.css';
import { Planner, SkillEvent} from './mit-planner';
import skills from './cooldowns/skills.js';
import timelines from './timelines/timelines.js';
import Collapsible from 'react-collapsible';

import DefaultBasicElement from './mit-planner/Components/DefaultElement/DefaultBasicElement/DefaultBasicElement';
import FightSelector from './mit-planner/Components/Dropdowns/FightSelector'
import JobSelector from './mit-planner/Components/Dropdowns/JobSelector';

const Option = props => (
    <div className={classes.Option}>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{marginRight: '10px'}}>Party View</div>
        <label className={classes.Switch}>
            <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
            <span className={`${classes.Slider} ${classes.Round}`}></span>
        </label>
        </div>
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
    let isMobile = window.matchMedia("only screen and (max-width: 480px)").matches;
    if (isMobile) {
        return <div className={classes.Header}> <h1> mobile user BEGONE </h1> <h2>get that tiny screen outta here</h2> </div>
    }

    let triggerStyle= { color: `#c0c0c0`,
                        display: 'flex',
                        margin: 'auto',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',
                        marginTop: '16px',
                        backgroundColor: '#3e3f41',
                        width: '70%',
                        padding: '10px'}

    return (
        <>
        <div className={classes.Header}>
            <h1 className={classes.Title}>mitigation planner</h1>
        <div className={classes.Options}>
            <div style={{display: 'flex', flexDirection: 'horizontal', margin: 'auto', justifyContent: 'center'}}>
        <       FightSelector onFightChange={selectedFightChangedHandler} />
                <JobSelector onJobChange={updatePrimaryJobHandler}/>
                <Option className={classes.PartyToggle} checked={partyViewEnabled} onChange={() => setPartyViewEnabled( !partyViewEnabled )}/>
            </div>
        </div>
        </div>
        <Collapsible className={classes.InfoBox} triggerStyle={triggerStyle} trigger="Info">
            <div className={classes.Info}>
            <div style={{width: `fit-content`, margin: 'auto'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div>
                        <div style={{ color: '#252627',
                                      backgroundColor: '#d63731',
                                      border: '4px solid #a60701',
                                      borderRadius: '2px',
                                      padding: '5px',
                                      margin: '5px'}}>
                            physical tankbuster
                        </div>
                        <div style={{ color: '#252627',
                                      backgroundColor: '#ff8b4d',
                                      border: '4px solid #cf5b1d',
                                      borderRadius: '2px',
                                      padding: '5px',
                                      margin: '5px'}}>
                            physical raidwide
                        </div>
                    </div>
                    <div>
                    <div style={{ color: '#252627',
                                      backgroundColor: '#c05cff',
                                      border: '4px solid #9029ff',
                                      borderRadius: '2px',
                                      padding: '5px',
                                      margin: '5px'}}>
                            magical tankbuster
                        </div>
                        <div style={{ color: '#252627',
                                      backgroundColor: '#ff5cb0',
                                      border: '4px solid #cf2c90',
                                      borderRadius: '2px',
                                      padding: '5px',
                                      margin: '5px'}}>
                            magical raidwide
                        </div>
                    </div>
                    <div>
                    <div style={{ color: '#252627',
                                      backgroundColor: '#9ba88c',
                                      border: '4px solid #6b785c',
                                      borderRadius: '2px',
                                      padding: '5px',
                                      margin: '5px'}}>
                            avoidable damage
                        </div>
                        <div style={{ color: '#252627',
                                      backgroundColor: '#89c9cc',
                                      border: '4px solid #59999c',
                                      borderRadius: '2px',
                                      padding: '5px',
                                      margin: '5px'}}>
                            non-damaging/informational
                        </div>
                    </div>
                    <div>
                    <div style={{ color: '#252627',
                                      backgroundColor: '#b50300',
                                      border: '4px solid #850000',
                                      borderRadius: '2px',
                                      padding: '5px',
                                      margin: '5px'}}>
                            enrage
                        </div>
                        <div style={{ color: '#252627',
                                      backgroundColor: 'gray',
                                      border: '4px solid black',
                                      borderRadius: '2px',
                                      padding: '5px',
                                      margin: '5px'}}>
                            none of the above (i fucked up)
                        </div>
                    </div>
                    </div>
                </div>
                <p>known issues:</p>
                <ul style={{listStylePosition: 'inside'}}>
                    <li>hover tooltips are kinda buggy</li>
                    <li>things that target party members (e.g. intervention) will calculate mit as if on self</li>
                    <li>p4sp2 timeline isnt done bc damage timing depends on how mechs are handled and im too lazy</li>
                </ul>
                </div>
        </Collapsible>
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
