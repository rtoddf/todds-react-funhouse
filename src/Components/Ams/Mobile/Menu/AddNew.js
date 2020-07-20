import React from "react";
import { Button, Grid, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, Input, FormControl, Select, TextField } from "@material-ui/core";

import { contentTypes, contentSources } from "../../data/MobileMenu";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
    },
    button: {
        ...theme.button,
        marginTop: '20px',
        boxShadow: theme.shadows[1],
    },
    textfield: {
        width: '100%',
    },
}));
  
const AddNew = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [contentTypeChoice, setContentTypeChoice] = React.useState('');
    const [contentSourceChoice, setContentSourceChoice] = React.useState('');

    const handleContentTypeChange = (event) => {
        setContentTypeChoice(event.target.value || '');
    };

    const handleContentSourceChange = (event) => {
        setContentSourceChoice(event.target.value || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={classes.button} onClick={handleClickOpen}>Add new menu item</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Add new menu item</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <FormControl classes={classes.formControl}>
                                    <TextField
                                        id={`outlined-helperText`}
                                        label="Menu title"
                                        defaultValue=""
                                        variant="outlined"
                                        className={classes.textfield}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12}>
                                <FormControl classes={classes.formControl}>
                                    <InputLabel htmlFor="demo-dialog-native">Content Type</InputLabel>
                                    <Select
                                        native
                                        value={contentTypeChoice}
                                        onChange={handleContentTypeChange}
                                        input={<Input />}
                                        className={classes.textfield}
                                    >
                                        <option aria-label="None" value="" />
                                        {contentTypes.map((type, i) => (
                                            <option key={i} value={type}>{type}</option>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={12}>
                                <FormControl classes={classes.formControl}>
                                    <InputLabel htmlFor="dialog-content-source">Content Source</InputLabel>
                                    <Select
                                        native
                                        value={contentSourceChoice}
                                        onChange={handleContentSourceChange}
                                        input={<Input />}
                                        className={classes.textfield}
                                    >
                                        <option aria-label="None" value="" />
                                        {contentSources.map((type, i) => (
                                            <option key={i} value={type}>{type}</option>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.button} onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className={classes.button} onClick={handleClose}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddNew;