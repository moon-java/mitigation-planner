import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { TextField, Typography } from '@mui/material';

const ImportExportDialog = props => {
    const exportJson =
    {
        selectedCategory: props.selectedCategory,
        selectedFight: props.selectedFight,
        partyViewEnabled: props.partyViewEnabled,
        partyMembers: props.partyMembers,
        timelineItems: props.timelineItems
    }
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const isImport = props.type == "import";

    const handleClickOpen = () => {
      setOpen(true);
      const startValue = isImport ? "" : JSON.stringify(exportJson);
      setValue(startValue);
    };
  
    const buttonText = isImport ? "Import" : "Export";
    const dialogText = isImport ? "Import a plan" : "Export this plan";
    const closeText = isImport ? "Import" : "Close";

    const handleClose = () => {
      if (props.type == "import")
      {
      try {
        let importInfo = JSON.parse(value);
        props.onImport(importInfo);
        setOpen(false);
      }
      catch (error) {
        setValue("json's busted, babe");
      }
    }
    else
    {
      setOpen(false);
    }
    };

    const handleChange = (event) => {
        if (props.type == "import")
        {
            setValue(event.target.value);
        }
      };

    return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonText}
      </Button>
      <Dialog onClose={handleClose} open={open} style={{padding: '12px'}}>
          <DialogContent>
            <Typography>
                {dialogText}
            </Typography>
            <textarea
                value={value}
                style={{width: '400px', height: '100px'}}
                onChange={handleChange}
            />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {closeText}
          </Button>
        </DialogActions>
    </Dialog>
    </div>
    );
}

ImportExportDialog.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
}

export default ImportExportDialog;