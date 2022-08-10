import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from '@mui/material';
import { loadFromDB, saveToDB } from '../../Helpers/DBHelpers';

const LoadSaveDialog = props => {
    const saveJson =
    {
        selectedCategory: props.selectedCategory,
        selectedFight: props.selectedFight,
        partyViewEnabled: props.partyViewEnabled,
        partyMembers: props.partyMembers,
        timelineItems: props.timelineItems,
        prepullTime: props.prepullTime
    }
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [result, setResult] = React.useState("");
    const isLoad = props.type === "load";

    const handleClickOpen = () => {
        setOpen(true);
    };

    const buttonText = isLoad ? "Load" : "Save";
    const dialogTitle = isLoad ? "Load a plan" : "Save a plan";
    const dialogText = isLoad ? "Enter the plan ID to load" : "Enter a plan ID to update a pre-existing plan, or leave blank to make a new one";
    const warningText = isLoad ? "" : "Warning: updating a pre-existing plan will save over it, this is not reversible";

    const handleLoad = async () => {
        const res = await loadFromDB(value);
        if (res.success) {
            props.onLoad(res.data);
            setOpen(false);
        }
        else {
            setResult(res.text)
        }
    };

    const handleSave = async () => {
        const res = await saveToDB(value, saveJson);
        setResult(res.text)
    };

    const handleClose = () => {
        setOpen(false);
        setResult("");
    }
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    let loadSaveButton = <></>;
    if (props.type === "load") {
        loadSaveButton =
            <Button autoFocus onClick={handleLoad}>
                Load
      </Button>;
    }
    else {
        loadSaveButton =
            <Button autoFocus onClick={handleSave}>
                Save
      </Button>;
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} style={{ color: '#d0d0d0', fontWeight: 'bold', background: '#196dc3', marginLeft: '5px', marginRight: '5px' }}>
                {buttonText}
            </Button>
            <Dialog open={open} style={{ padding: '12px' }}>
                <DialogContent>
                    <Typography>
                        {dialogTitle}
                    </Typography><br />
                    {dialogText}<br />
                    {warningText}<br />
                    {result}<br />
                    <textarea
                        value={value}
                        style={{ width: '400px', height: '100px' }}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    {loadSaveButton}
                    <Button autoFocus onClick={handleClose}>
                        Close
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

LoadSaveDialog.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
}

export default LoadSaveDialog;