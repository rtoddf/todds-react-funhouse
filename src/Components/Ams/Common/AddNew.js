import React from "react";
import { Button, Grid, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, Input, FormControl, Select, TextField } from "@material-ui/core";

import { contentTypes, contentSources } from "../data/MobileMenu";
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
        marginBottom: '20px',
        boxShadow: theme.shadows[1],
    },
    textfield: {
        width: '100%',
    },
}));
  
const AddNew = (props) => {
    const { type } = props;

    let typeText = "";

    switch (type) {
        case 'menu':
            typeText = "Menu Item"
            break;
        case 'section':
            typeText = "Section Header"
            break;
        case 'source':
            typeText = "Data Source"
            break;
        default:
            typeText = "Section Header"
    }

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
            <Button className={classes.button} onClick={handleClickOpen}>Add New { typeText }</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Add New { typeText }</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <Grid container spacing={2}>
                            {type === 'menu' && (
                                <>
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
                                </>
                            )}
                            {type === 'section' && (
                                <>
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
                                    <Grid item md={12}>
                                        <FormControl classes={classes.formControl}>
                                        <TextField
                                            id={`outlined-helperText`}
                                            label="Story Count"
                                            defaultValue=""
                                            variant="outlined"
                                            className={classes.textfield}
                                        />
                                        </FormControl>
                                    </Grid>
                                </>
                            )}
                            {type === 'source' && (
                                <>
                                    <Grid item md={12}>
                                        <TextField
                                            id={`outlined-helperText`}
                                            label="Name"
                                            defaultValue=""
                                            variant="outlined"
                                            className={classes.textfield}
                                        />
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField
                                            id={`outlined-helperText`}
                                            label="Source"
                                            defaultValue=""
                                            variant="outlined"
                                            className={classes.textfield}
                                        />
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField
                                            id={`outlined-helperText`}
                                            label="Type"
                                            defaultValue=""
                                            variant="outlined"
                                            className={classes.textfield}
                                        />
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField
                                            id={`outlined-helperText`}
                                            label="Path"
                                            defaultValue=""
                                            variant="outlined"
                                            className={classes.textfield}
                                        />
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField
                                            id={`outlined-helperText`}
                                            label="Base URL"
                                            defaultValue=""
                                            variant="outlined"
                                            className={classes.textfield}
                                        />
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField
                                            id={`outlined-helperText`}
                                            label="Source"
                                            defaultValue=""
                                            variant="outlined"
                                            className={classes.textfield}
                                        />
                                    </Grid>
                                </>
                            )}
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