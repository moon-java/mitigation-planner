import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from '@mui/material';
import { loadFromDB, saveToDB } from '../../Helpers/DBHelpers';

const MergeDialog = props => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [loadError, setLoadError] = useState("");
    const [mergeError, setMergeError] = useState("");
    const [loadedGroupItems, setLoadedGroupItems] = useState( {} );
    const [loadedPartyMembers, setLoadedPartyMembers] = useState( {} );
    const [selectedCurrent, setSelectedCurrent] = useState( [true, true, true, true, true, true, true, true]);
    const [selectedLoaded, setSelectedLoaded] = useState( [false, false, false, false, false, false, false, false]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [keepIndexes, setKeepIndexes] = useState(true);

    const groupItems = (items) =>
    {
        const groupedItemsTmp = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: []};
        items.forEach( item => {
            if ( !groupedItemsTmp[item.partyMemberId] ) 
            {
                groupedItemsTmp[item.partyMemberId] = []
            }

            groupedItemsTmp[item.partyMemberId].push( item );
        })
        return groupedItemsTmp
    }

    const currentGroupItems = groupItems(props.items);
    const currentPartyMembers = props.partyMembers;
    console.log(currentPartyMembers)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleLoad = async () => {
        const res = await loadFromDB(value);
        if (res.success)
        {
            if (res.data.selectedFight !== props.selectedFight)
            {
                setLoadError("The loaded plan is not for the currently selected fight")
            }
            else
            {
                const loadedItems = groupItems(res.data.timelineItems)
                setLoadedGroupItems(loadedItems);
                setLoadedPartyMembers(res.data.partyMembers);
                setIsLoaded(true);
                console.log(loadedItems);
            }
        }
        else
        {
            setLoadError(res.text)
        }
      };

    const handleClose = () => {
        setOpen(false);
        setLoadError("");
        setMergeError("");
        setIsLoaded(false);
    }
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleMerge = () => {
        const selectedCurrentCount = selectedCurrent.filter(x => x === true).length;
        const selectedLoadedCount = selectedLoaded.filter(x => x === true).length;
        if (selectedCurrentCount + selectedLoadedCount !== 8)
        {
            setMergeError("Select 8 party members");
            return;
        }
        setMergeError("ok")
        let newPartyMembers = [];
        let newItems = [];
        if (keepIndexes)
        {
            debugger;
            let j = 0;
            for (let i = 0; i < 8; i++)
            {
                if (selectedCurrent[i])
                {
                    newPartyMembers[i] = currentPartyMembers[i];
                    newItems = [...newItems, ...currentGroupItems[i]];
                }
                else
                {
                    for (; j < 8; j++)
                    {
                        if (selectedLoaded[j])
                        {
                            newPartyMembers[i] = loadedPartyMembers[j];
                            newPartyMembers[i].partyMemberId = i;
                            loadedGroupItems[j].forEach(item => {
                                item.partyMemberId = i;
                                newItems.push(item);
                            })
                            j++
                            break;
                        }
                    }
                }
            }
        }
        else
        {
            let index = 0;
            for (let i = 0; i < 8; i++)
            {
                if (selectedCurrent[i])
                {
                    newPartyMembers[index] = currentPartyMembers[i];
                    newPartyMembers[index].partyMemberId = index;
                    currentGroupItems[i].forEach(item => {
                        item.partyMemberId = index;
                        newItems.push(item);
                    })
                    index++
                }
            }
            for (let i = 0; i < 8; i++)
            {
                if (selectedLoaded[i])
                {
                    newPartyMembers[index] = loadedPartyMembers[i];
                    newPartyMembers[index].partyMemberId = index;
                    loadedGroupItems[i].forEach(item => {
                        item.partyMemberId = index;
                        newItems.push(item);
                    })
                    index++
                }
            }
        }
        props.handleImport(
            {
                selectedFight: props.selectedFight,
                selectedCategory: props.selectedCategory,
                partyViewEnabled: true,
                partyMembers: newPartyMembers,
                timelineItems: newItems
            }
        )
        handleClose();
    }

    let currentItems = []
    let loadedItems = []

    if (isLoaded)
    {
        for (let i = 0; i < 8; i++)
        {
            const partyMember = currentPartyMembers[i];
            currentItems.push(
                <>
                <input
                    onChange={() => {
                        const tmpSelected = [...selectedCurrent];
                        tmpSelected[i] = !tmpSelected[i]
                        setSelectedCurrent(tmpSelected);
                    }}
                    checked={selectedCurrent[i]}
                    type="checkbox"
                    style={{gridColumn: '1', gridRow: `${i+3}`}}
                    />
                <div style={{gridColumn: `2`, gridRow: `${i+3}`}}>
                    {partyMember.job}
                </div>
                <div style={{gridColumn: `3`, gridRow: `${i+3}`}}>
                    {currentGroupItems[partyMember.partyMemberId].length}
                </div>
                </>
            )
        }
        for (let i = 0; i < 8; i++)
        {
            const partyMember = loadedPartyMembers[i];
            loadedItems.push(
                <>
                <input
                    onChange={() => {
                        const tmpSelected = [...selectedLoaded];
                        tmpSelected[i] = !tmpSelected[i]
                        setSelectedLoaded(tmpSelected);
                    }}
                    checked={selectedLoaded[i]}
                    type="checkbox"
                    style={{gridColumn: '1', gridRow: `${i+3}`}}
                />
                <div style={{gridColumn: `2`, gridRow: `${i+3}`}}>
                    {partyMember.job}
                </div>
                <div style={{gridColumn: `3`, gridRow: `${i+3}`}}>
                    {loadedGroupItems[partyMember.partyMemberId].length}
                </div>
                </>
            )
        }
    }

    return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Import/Merge
      </Button>
      <Dialog open={open} style={{padding: '12px'}}>
          <DialogContent>
            <Typography>
                Import from/merge with a saved plan
            </Typography><br/>
            <div style={{display: "flex", margin: "auto", justifyContent: "center", textAlign: "center", verticalAlign: "middle"}}>
                <div style={{marginTop: "auto", marginBottom: "auto"}}>
                Enter a plan ID:
                </div>
                <textarea
                value={value}
                onChange={handleChange}
                />      
                <Button autoFocus onClick={handleLoad}>
                Load
              </Button><br/>
              </div>
                <div style={{display: "flex", margin: "auto", justifyContent: "center", textAlign: "center", verticalAlign: "middle"}}>
                    {loadError}
                </div>
                <div style={{display: "flex", margin: "auto", justifyContent: "center", textAlign: "center", verticalAlign: "middle"}}>
                    Select which party members to keep in the current plan on the left,
                    then select which party members to import from the loaded plan on the right. <br/> <br/>
                    Total number of selected party members must equal 8.
                </div>
                <div style={{display: "flex", margin: "auto", justifyContent: "center", textAlign: "center", verticalAlign: "middle"}}>
                    {mergeError}
                </div>
                <div style={{display: `${isLoaded ? "grid" : "none"}`, textAlign: "center", border: '2px solid black'}}>
                <div style={{display: "grid", gridColumn: '1', borderRight: '2px solid black'}}>
                        <div style={{gridColumnStart: `1`, gridColumnEnd: `4`, gridRow: `1`, borderBottom: '2px solid black'}}>
                            Current
                        </div>
                        <div style={{gridColumn: `1`, gridRow: `2`}}>
                            Keep?
                        </div>
                        <div style={{gridColumn: `2`, gridRow: `2`}}>
                            Job
                        </div>
                        <div style={{gridColumn: `3`, gridRow: `2`}}>
                            # Skills<br/>Placed
                        </div>
                        {currentItems}
                    </div>
                    <div style={{display: "grid", gridColumn: '2'}}>
                        <div style={{gridColumnStart: `1`, gridColumnEnd: `4`, gridRow: `1`, borderBottom: '2px solid black'}}>
                            Loaded
                        </div>
                        <div style={{gridColumn: `1`, gridRow: `2`}}>
                            Keep?
                        </div>
                        <div style={{gridColumn: `2`, gridRow: `2`}}>
                            Job
                        </div>
                        <div style={{gridColumn: `3`, gridRow: `2`}}>
                            # Skills<br/>Placed
                        </div>
                        {loadedItems}
                    </div>
                </div>
                <br/>
                <div style={{display: `${isLoaded ? "flex" : "none"}`, margin: "auto", justifyContent: "center", textAlign: "center", verticalAlign: "middle"}}>
                <input
                    onChange={() => {
                        setKeepIndexes(!keepIndexes)
                    }}
                    checked={keepIndexes}
                    type="checkbox"
                />
                <div style={{paddingLeft: "10px", width: "80%"}}>
                    Select to keep current party members in their current spots
                    and have imported party members fill in the gaps.
                    Unselect to have current party members move up to fill any gaps,
                    and have imported party members added to the bottom.
                </div>
                </div>
        </DialogContent>
        <DialogActions>
           <Button autoFocus onClick={handleMerge}>
            Merge
          </Button>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
    </Dialog>
    </div>
    );
}

MergeDialog.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
}

export default MergeDialog;