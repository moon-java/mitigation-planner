import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Typography } from '@mui/material';

const LoadSaveDialog = props => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const generateId = () => {
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < 8; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
    const saveJson =
    {
        selectedCategory: props.selectedCategory,
        selectedFight: props.selectedFight,
        partyViewEnabled: props.partyViewEnabled,
        partyMembers: props.partyMembers,
        timelineItems: props.timelineItems
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

    const handleLoad = () => {
      try {
        fetch('https://oxt6c15wvi.execute-api.us-east-1.amazonaws.com/Prod/' + value)
        .then(response => response.json())
        .then(data => {
          props.onLoad(data.plan);
          setOpen(false);
        });
      }
      catch (error) {
        setResult("Load failed, sorry :(");
      }
    };

    const handleSave = () => {
      try {
        const id = value != "" ? value : generateId();
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: id, plan: saveJson })
        };
        debugger;
        fetch('https://oxt6c15wvi.execute-api.us-east-1.amazonaws.com/Prod', requestOptions)
        .then(response => response.json())
        .then(data => {
          setResult("Successfully saved plan with ID: " + id)
        });
      }
      catch (error) {
        setResult("Save failed, sorry :(");
      }
    };

    const handleClose = () => {
      setOpen(false);
      setResult("");
    }
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    
    let loadSaveButton = <></>;
    if (props.type === "load")
    {
      loadSaveButton =
      <Button autoFocus onClick={handleLoad}>
        Load
      </Button>;
    }
    else
    {
      loadSaveButton =
      <Button autoFocus onClick={handleSave}>
        Save
      </Button>;
    }

    return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonText}
      </Button>
      <Dialog open={open} style={{padding: '12px'}}>
          <DialogContent>
            <Typography>
                {dialogTitle}
            </Typography><br/>
                {dialogText}<br/>
                {warningText}<br/>
                {result}<br/>
            <textarea
                value={value}
                style={{width: '400px', height: '100px'}}
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