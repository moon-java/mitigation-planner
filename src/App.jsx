import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import MouseBackEnd from 'react-dnd-mouse-backend';

import classes from './App.module.css';
import { Planner, SkillEvent } from './mit-planner';
import skillsByJob from './cooldowns/skills.js';
import { timelines, categories } from './timelines/timelines.js';
import Collapsible from 'react-collapsible';
import * as uiConstants from './mit-planner/Constants/UIConstants.js';
import Button from '@mui/material/Button';

import DefaultBasicElement from './mit-planner/Components/DefaultElement/DefaultBasicElement/DefaultBasicElement';
import CategorySelector from './mit-planner/Components/Dropdowns/CategorySelector'
import FightSelector from './mit-planner/Components/Dropdowns/FightSelector'
import JobSelector from './mit-planner/Components/Dropdowns/JobSelector';
import LoadSaveDialog from './mit-planner/Components/Dialogs/LoadSaveDialog';
import MergeDialog from './mit-planner/Components/Dialogs/MergeDialog';

const PartyViewToggle = props => (
    <div className={classes.Option}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '10px', fontSize: '14px' }}>Party View</div>
            <label className={classes.Switch}>
                <input type="checkbox" checked={props.checked} onChange={props.onChange} />
                <span className={`${classes.Slider} ${classes.Round}`}></span>
            </label>
        </div>
    </div>
)

const GaugeViewToggle = props => (
    <div className={classes.Option}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '10px', fontSize: '14px' }}>Show Gauges</div>
            <label className={classes.Switch}>
                <input type="checkbox" checked={props.checked} onChange={props.onChange} />
                <span className={`${classes.Slider} ${classes.Round}`}></span>
            </label>
        </div>
    </div>
)

const ClearAllButton = props => (
    <div className={classes.Option}>
        <Button variant="outlined" size='small' style={{ color: '#d0d0d0', background: '#aa3030', marginBottom: '20px' }} onClick={props.onClick}>
            Remove All
        </Button>
    </div>
)

const PrepullInput = props => (
    <div className={classes.Option}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '10px', fontSize: '14px' }}>Prepull</div>
            <input
                type="number"
                style={{ width: '40px', color: '#202020', textAlign: "center", background: '#d0d0d0', paddingTop: '3px', paddingBottom: '3px', marginLeft: '5px', marginRight: '5px' }}
                onChange={props.onChange}
                value={props.prepullTime}
                max="30"
                min="0"
            />
        </div>
    </div>
)

const App = () => {
    let tempTimelines = [];
    if (localStorage.getItem('selectedCategory')) {
        const category = JSON.parse(localStorage.getItem('selectedCategory'));
        category.timelines.forEach(timelineId => {
            tempTimelines.push(timelines.find(item => item.id === timelineId));
        })
    }
    else {
        tempTimelines = [timelines[0], timelines[1], timelines[2], timelines[3], timelines[4], timelines[5], timelines[6]];
    }

    const [activePartyMember, setActivePartyMember] = useState(0);
    const [partyViewEnabled, setPartyViewEnabled] = useState(localStorage.getItem('partyViewEnabled') ? JSON.parse(localStorage.getItem('partyViewEnabled')) : false);
    const [gaugeViewEnabled, setGaugeViewEnabled] = useState(localStorage.getItem('gaugeViewEnabled') ? JSON.parse(localStorage.getItem('gaugeViewEnabled')) : false);
    const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('selectedCategory') ? JSON.parse(localStorage.getItem('selectedCategory')) : categories[0]);
    const [availableTimelines, setAvailableTimelines] = useState(tempTimelines);
    const [selectedFight, setSelectedFight] = useState(localStorage.getItem('selectedFight') ? JSON.parse(localStorage.getItem('selectedFight')).id : timelines[0].id);
    const [fightInfo, setFightInfo] = useState(localStorage.getItem('selectedFight') ? JSON.parse(localStorage.getItem('selectedFight')).info : timelines[0].info);
    const [fightTimeline, setFightTimeline] = useState(localStorage.getItem('selectedFight') ? JSON.parse(localStorage.getItem('selectedFight')).timeline : timelines[0].timeline);
    const [prepullTime, setPrepullTime] = useState(localStorage.getItem('prepullTime') ? parseInt(localStorage.getItem('prepullTime')) : 0);
    const [partyMembers, setPartyMembers] = useState(localStorage.getItem('partyMembers') ? JSON.parse(localStorage.getItem('partyMembers')) : [
        {
            partyMemberId: 0,
            job: "PLD",
            level: 90,
            hasGauge: false
        },
        {
            partyMemberId: 1,
            job: "GNB",
            level: 90,
            hasGauge: false
        },
        {
            partyMemberId: 2,
            job: "WHM",
            level: 90,
            hasGauge: true,
            passiveGaugeTimer: 20,
            startingGauge: 0
        },
        {
            partyMemberId: 3,
            job: "SCH",
            level: 90,
            hasGauge: true,
            startingGauge: 0,
            passiveGaugeTimer: -1
        },
        {
            partyMemberId: 4,
            job: "MNK",
            level: 90,
            hasGauge: false
        },
        {
            partyMemberId: 5,
            job: "DRG",
            level: 90,
            hasGauge: false
        },
        {
            partyMemberId: 6,
            job: "BRD",
            level: 90,
            hasGauge: false
        },
        {
            partyMemberId: 7,
            job: "BLM",
            level: 90,
            hasGauge: false
        }
    ]);
    let allSkills = {};
    for (let job in skillsByJob) {
        let skillset = skillsByJob[job];
        skillset.forEach(skill => {
            allSkills[skill.skillId] = skill;
        });
    }

    let importItems = [];
    if (localStorage.getItem('timelineItems')) {
        const loadedItems = JSON.parse(localStorage.getItem('timelineItems'))
        for (let i = 0; i < loadedItems.length; i++) {
            importItems[i] = {
                ...allSkills[loadedItems[i].skillId],
                partyMemberId: loadedItems[i].partyMemberId,
                startTime: loadedItems[i].startTime
            }
            for (let j = 0; j < importItems[i].effects.length; j++) {
                importItems[i].effects[j].endTime = importItems[i].startTime + importItems[i].effects[j].duration
            }
        }
    }
    const [timelineItems, setTimelineItems] = useState(importItems);
    const startTime = 0;
    const endTime = fightInfo.length;

    const addHandler = ({ item, items }) => {
        setTimelineItems(items);
        localStorage.setItem('timelineItems', JSON.stringify(formatItemsForExport(items)));
    }

    const removeHandler = ({ item, items }) => {
        setTimelineItems(items);
        localStorage.setItem('timelineItems', JSON.stringify(formatItemsForExport(items)));
    }

    const updateHandler = ({ item, items }) => {
        setTimelineItems(items);
        localStorage.setItem('timelineItems', JSON.stringify(formatItemsForExport(items)));
    }

    const partyMemberClickHandler = (partyMemberId) => {
        setActivePartyMember(partyMemberId);
    }

    const selectedFightChangedHandler = (fightId) => {
        let fight = timelines.find(item => item.id === fightId);
        setFightInfo(fight.info);
        setFightTimeline(fight.timeline);
        setSelectedFight(fightId);
        localStorage.setItem('selectedFight', JSON.stringify(fight))
    }

    const selectedCategoryChangedHandler = (categoryId) => {
        let category = categories.find(item => item.id === categoryId);
        setSelectedCategory(category);
        let categoryTimelines = [];
        category.timelines.forEach(timelineId => {
            categoryTimelines.push(timelines.find(item => item.id === timelineId));
        })
        setAvailableTimelines(categoryTimelines);
        if (categoryTimelines[0]) {
            setFightInfo(categoryTimelines[0].info);
            setFightTimeline(categoryTimelines[0].timeline);
            setSelectedFight(categoryTimelines[0].id);
        }
        localStorage.setItem('selectedCategory', JSON.stringify(category))
    }

    const updatePrimaryJobHandler = (job) => {
        let tmpParty = { ...partyMembers };
        let tmpItems = timelineItems.filter((item, i) => item.partyMemberId !== 0);
        tmpParty[0].job = job;
        tmpParty[0].hasGauge = job === "SGE" || job === "WHM" || job === "SCH";
        tmpParty[0].startingGauge = job === "SGE" ? 3 : 0;
        tmpParty[0].passiveGaugeTimer = job === "SGE" ? 30 : (job === "WHM" ? 20 : 0);
        setTimelineItems(tmpItems);
        setPartyMembers(tmpParty);
        localStorage.setItem('partyMembers', JSON.stringify(tmpParty));
    }

    const partyMemberJobChangeHandler = (job, index) => {
        let tmpParty = { ...partyMembers };
        let tmpItems = timelineItems.filter((item, i) => item.partyMemberId !== index);
        tmpParty[index].job = job;
        tmpParty[index].hasGauge = job === "SGE" || job === "WHM" || job === "SCH";
        tmpParty[index].startingGauge = job === "SGE" ? 3 : 0;
        tmpParty[index].passiveGaugeTimer = job === "SGE" ? 30 : (job === "WHM" ? 20 : 0);
        setTimelineItems(tmpItems);
        setPartyMembers(tmpParty);
        localStorage.setItem('partyMembers', JSON.stringify(tmpParty));
    }

    const formatItemsForExport = (items) => {
        let exportItems = [];
        for (let i = 0; i < items.length; i++) {
            exportItems[i] = {
                skillId: items[i].skillId,
                partyMemberId: items[i].partyMemberId,
                startTime: items[i].startTime
            }
        }
        return exportItems;
    }

    const importHandler = (importInfo) => {
        selectedCategoryChangedHandler(importInfo.selectedCategory);
        selectedFightChangedHandler(importInfo.selectedFight);
        setPartyViewEnabled(importInfo.partyViewEnabled);
        updatePrimaryJobHandler(importInfo.partyMembers[0].job);
        for (let i = 0; i < 8; i++) {
            partyMemberJobChangeHandler(importInfo.partyMembers[i].job, i);
        }

        let importItems = [];
        for (let i = 0; i < importInfo.timelineItems.length; i++) {
            importItems[i] = {
                ...allSkills[importInfo.timelineItems[i].skillId],
                partyMemberId: importInfo.timelineItems[i].partyMemberId,
                startTime: importInfo.timelineItems[i].startTime
            }
            for (let j = 0; j < importItems[i].effects.length; j++) {
                importItems[i].effects[j].endTime = importItems[i].startTime + importItems[i].effects[j].duration
            }
        }
        setTimelineItems(importItems);
        const tmpPrepullTime = importInfo.prepullTime === undefined ? 0 : importInfo.prepullTime;
        setPrepullTime(tmpPrepullTime);

        localStorage.setItem('timelineItems', JSON.stringify(importInfo.timelineItems));
        localStorage.setItem('partyViewEnabled', importInfo.partyViewEnabled);
        localStorage.setItem('prepullTime', tmpPrepullTime);
    }

    const options = {
        callBacks: {
            onAdd: addHandler,
            onRemove: removeHandler,
            onUpdate: updateHandler,
            onPartyMemberClick: partyMemberClickHandler,
            onPartyMemberJobChange: partyMemberJobChangeHandler,
        },
        startTime: startTime,
        endTime: endTime
    }

    const activeJob = partyMembers[activePartyMember].job;
    const activeJobSkills = skillsByJob[activeJob];
    let isMobile = window.matchMedia("only screen and (max-width: 480px)").matches;
    if (isMobile) {
        return <div className={classes.Header}> <h1> mobile user BEGONE </h1> <h2>get that tiny screen outta here</h2> </div>
    }

    let triggerStyle = {
        color: `#c0c0c0`,
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: '16px',
        backgroundColor: '#3e3f41',
        width: '90%',
        paddingTop: '10px',
        paddingBottom: '10px'
    }

    let enrageMin = Math.floor(fightInfo.length / 60);
    let enrageSec = (fightInfo.length % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    let exportItems = formatItemsForExport(timelineItems);

    return (
        <>
            <div className={classes.Header}>
                <h1 className={classes.Title}>mitigation planner</h1>
                <div className={classes.Options}>
                    <div style={{ display: 'flex', flexDirection: 'horizontal', marginRight: 'auto', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'horizontal', marginRight: 'auto', marginBottom: 'auto', verticalAlign: 'center' }}>
                            <LoadSaveDialog type='load' onLoad={importHandler} />
                            <LoadSaveDialog type='save' selectedCategory={selectedCategory.id}
                                selectedFight={selectedFight}
                                partyViewEnabled={partyViewEnabled}
                                partyMembers={partyMembers}
                                timelineItems={exportItems}
                                prepullTime={prepullTime} />
                            <MergeDialog selectedCategory={selectedCategory.id}
                                selectedFight={selectedFight}
                                partyViewEnabled={partyViewEnabled}
                                partyMembers={partyMembers}
                                items={exportItems}
                                prepullTime={prepullTime}
                                handleImport={importHandler} />
                        </div>
                        <ClearAllButton onClick={() => { localStorage.setItem('timelineItems', '[]'); setTimelineItems([]) }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'horizontal', marginRight: 'auto', justifyContent: 'center' }}>
                        <CategorySelector onCategoryChange={selectedCategoryChangedHandler} categories={categories} value={selectedCategory.name} />
                        <FightSelector onFightChange={selectedFightChangedHandler} fights={availableTimelines} value={fightInfo.name} />
                        <JobSelector onJobChange={updatePrimaryJobHandler} selectedJob={partyMembers[0].job} />
                        <PartyViewToggle className={classes.PartyToggle} checked={partyViewEnabled} onChange={() => { localStorage.setItem('partyViewEnabled', !partyViewEnabled); setPartyViewEnabled(!partyViewEnabled); }} />
                        <GaugeViewToggle className={classes.PartyToggle} checked={gaugeViewEnabled} onChange={() => { localStorage.setItem('gaugeViewEnabled', !gaugeViewEnabled); setGaugeViewEnabled(!gaugeViewEnabled); }} />
                        <PrepullInput prepullTime={-1 * prepullTime} onChange={(e) => {
                            e.target.value = e.target.value > 30 ? 30 : (e.target.value < 0 ? 0 : e.target.value);
                            setPrepullTime(-1 * e.target.value)
                            localStorage.setItem('prepullTime', -1 * e.target.value)
                        }} />

                    </div>
                </div>
            </div>
            <Collapsible className={classes.InfoBox} triggerStyle={triggerStyle} trigger="Info">
                <div className={classes.Info}>
                    <div className={classes.FightInfo}>
                        <h2>{fightInfo.name}</h2>
                        <div style={{ display: 'flex', flexDirection: 'horizontal', justifyContent: 'center' }}>
                            <h3 style={{ marginRight: '30px' }}>Boss(es): {fightInfo.boss}</h3>
                            <h3 style={{ marginRight: '30px' }}>Level: {fightInfo.level}</h3>
                            <h3 style={{ marginRight: '30px' }}>Enrage: {enrageMin}:{enrageSec}</h3>
                        </div>
                    </div>
                    <div style={{ width: `fit-content`, margin: 'auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div>
                                <div style={{
                                    color: '#252627',
                                    backgroundColor: `${uiConstants.PHYS_TB_BG}`,
                                    border: `4px solid ${uiConstants.PHYS_TB_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    physical tankbuster
                        </div>
                                <div style={{
                                    color: '#252627',
                                    backgroundColor: `${uiConstants.PHYS_AOE_BG}`,
                                    border: `4px solid ${uiConstants.PHYS_AOE_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    physical raidwide
                        </div>
                                <div style={{
                                    color: '#252627',
                                    backgroundColor: `${uiConstants.PHYS_OTHER_BG}`,
                                    border: `4px solid ${uiConstants.PHYS_OTHER_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    physical (other)
                        </div>
                            </div>
                            <div>
                                <div style={{
                                    color: '#252627',
                                    backgroundColor: `${uiConstants.MAGIC_TB_BG}`,
                                    border: `4px solid ${uiConstants.MAGIC_TB_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    magical tankbuster
                        </div>
                                <div style={{
                                    color: '#252627',
                                    backgroundColor: `${uiConstants.MAGIC_AOE_BG}`,
                                    border: `4px solid ${uiConstants.MAGIC_AOE_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    magical raidwide
                        </div>
                                <div style={{
                                    color: '#252627',
                                    backgroundColor: `${uiConstants.MAGIC_OTHER_BG}`,
                                    border: `4px solid ${uiConstants.MAGIC_OTHER_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    magical (other)
                        </div>
                            </div>
                            <div>
                                <div style={{
                                    color: '#252627',
                                    backgroundColor: `${uiConstants.INTERRUPTABLE_BG}`,
                                    border: `4px solid ${uiConstants.INTERRUPTABLE_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    can interrupt/stun
                        </div>
                                <div style={{
                                    color: '#252627',
                                    backgroundColor: `${uiConstants.AVOIDABLE_BG}`,
                                    border: `4px solid ${uiConstants.AVOIDABLE_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    avoidable damage
                        </div>
                                <div style={{
                                    color: '#252627',
                                    backgroundColor: `${uiConstants.INFO_BG}`,
                                    border: `4px solid ${uiConstants.INFO_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    non-damaging/informational
                        </div>
                            </div>
                            <div>
                                <div style={{
                                    color: '#c0c0c0',
                                    backgroundColor: `${uiConstants.DARK_BG}`,
                                    border: `4px solid ${uiConstants.DARK_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    darkness (not physical or magical)
                        </div>
                                <div style={{
                                    color: '#c0c0c0',
                                    backgroundColor: `${uiConstants.ENRAGE_BG}`,
                                    border: `4px solid ${uiConstants.ENRAGE_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    enrage
                        </div>
                                <div style={{
                                    color: '#252627',
                                    backgroundColor: `${uiConstants.DEFAULT_BG}`,
                                    border: `4px solid ${uiConstants.DEFAULT_BORDER}`,
                                    borderRadius: '2px',
                                    padding: '5px',
                                    margin: '5px'
                                }}>
                                    none of the above (i fucked up)
                        </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Collapsible>
            <DndProvider backend={MouseBackEnd}>
                <div className={classes.Content}>
                    <br />
                    <div className={classes.SkillBank}>
                        {
                            activeJobSkills.map((item, index) => {
                                let maxApplicableLevel = item.maxApplicableLevel ? item.maxApplicableLevel : 90;
                                if (item.level <= fightInfo.level && maxApplicableLevel >= fightInfo.level) {
                                    return (<div style={{ marginRight: '10px' }} key={`main_item_${index}`}>
                                        <SkillEvent
                                            item={item}
                                            shadowed
                                            customElementType={DefaultBasicElement}
                                            useIcon={true}
                                            style={{ backgroundColor: `${uiConstants.DEFAULT_BG}` }}
                                        />
                                    </div>);
                                }
                                return <></>
                            }
                            )
                        }
                    </div>
                    <div className={classes.UsageInfo}>
                        Double-click a placed skill to remove
                </div>
                    <div className={classes.Timeline}>
                        <Planner items={timelineItems}
                            options={options}
                            scroll={true}
                            partyView={partyViewEnabled}
                            partyMembers={partyMembers}
                            activePartyMember={activePartyMember}
                            duration={fightInfo.length}
                            timeline={fightTimeline}
                            isGaugeViewEnabled={gaugeViewEnabled}
                            prepullTime={prepullTime} />
                    </div>

                </div>
            </DndProvider>
        </>
    );
}

export default App;
