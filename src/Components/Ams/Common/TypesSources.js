import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, Input, FormControl, Select } from "@material-ui/core";

import { contentTypes } from "../data/MobileMenu";
import { contentSources } from "../data/MobileMenu";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
        formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        ...theme.button,
        boxShadow: theme.shadows[1],
    },
}));
  
const TypesSources = (props) => {
    const {type} = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [choice, setChoice] = React.useState('');

    const handleChange = (event) => {
        setChoice(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dataSource = type == "type" ? contentTypes : contentSources

    return (
        <div>
            <Button className={classes.button} onClick={handleClickOpen}>Change</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Select a Content {type == "type" ? "Type" : "Source"}</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-dialog-native">Content {type == "type" ? "Type" : "Source"}</InputLabel>
                            <Select
                                native
                                value={choice}
                                onChange={handleChange}
                                input={<Input />}
                            >
                                <option aria-label="None" value="" />
                                {dataSource.map((type, i) => (
                                    <option key={i} value={type}>{type}</option>
                                ))}
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default TypesSources;