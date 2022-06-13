import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import MouseBackEnd from 'react-dnd-mouse-backend'

import classes from './App.module.css';
import { Planner, SkillEvent} from './react-planning';
import skills from './cooldowns/skills.js';

import DefaultBasicElement from './react-planning/Components/DefaultElement/DefaultBasicElement/DefaultBasicElement';
import FightSelector from './react-planning/Components/Dropdowns/FightSelector'
import JobSelector from './react-planning/Components/Dropdowns/JobSelector';

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
    const [partyMembers, setPartyMembers] = useState([
        {
            partyMemberId: 0,
            job: "DRK",
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

    const [fixedItems, setFixedItems] = useState([
    ]);

    const startTime = 0;
    const endTime = 300;

    const addHandler = ( {item, items} ) => {
        console.log( `Added : ${item}` );
        setFixedItems( items );
    }

    const removeHandler = ( {item, items} ) => {
        console.log( `Removed : ${item}` );
        setFixedItems( items );
    }

    const updateHandler = ( {item, items} ) => {
        setFixedItems( items );
    }

    const partyMemberClickHandler = ( partyMemberId ) => {
        setActivePartyMember(partyMemberId);
    }

    const updatePrimaryJobHandler = ( job ) => {
        let tmpParty = {...partyMembers};
        tmpParty[0].job = job;
        setPartyMembers(tmpParty);
    }

    const options = {
        callBacks : {
            onAdd : addHandler,
            onRemove: removeHandler,
            onUpdate: updateHandler,
            onPartyMemberClick: partyMemberClickHandler
        },
        startTime : startTime, 
        endTime: endTime
    }

    const activeJob = partyMembers[activePartyMember].job;
    const activeSkills = skills[activeJob];
    return (
        <>
        <div className={classes.Options}>
        <FightSelector/>
        <JobSelector onPrimaryJobChange={updatePrimaryJobHandler}/>
        <Option checked={partyViewEnabled} onChange={() => setPartyViewEnabled( !partyViewEnabled )}>
                        Party View
                    </Option>
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
                                />
                            </div>
                        ))
                    }
                </div>
                <div className={classes.Timeline}>
                    <Planner items={fixedItems}
                             options={options}
                             scroll={true}
                             partyView={partyViewEnabled}
                             partyMembers={partyMembers}
                             activePartyMember={activePartyMember}
                             duration={300}/>
                </div>

            </div>
        </DndProvider>
        </>
    );
}

export default App;
