import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '75vw',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));
  
function Form() {

    const classes = useStyles();

    return(
        <div className="form-holder">
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Full Name" variant="outlined" />
            <TextField id="outlined-basic" label="Occupation" variant="outlined" />
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Non-binary</MenuItem>
                <MenuItem value={30}>Prefer not to say</MenuItem>
                </Select>
            </FormControl>
            </form>
        </div>
    )
}

export default Form;