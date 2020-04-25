import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


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
                {/* //Name and occupation section */}
            <TextField id="outlined-basic" label="Full Name" variant="outlined" />
            <TextField id="outlined-basic" label="Occupation" variant="outlined" />
                {/* //Gender dropdown */}
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
            {/* // class switches */}
            <FormControlLabel
                control={<Switch name="react-fundamentals" />}
                label="React fundamentals - 10am"
            />
            <FormControlLabel
                control={<Switch name="node-email-techniques" />}
                label="Node.js email techniques - 11am"
            />
            <FormControlLabel
                control={<Switch name="vue-fundamentals" />}
                label="Vue fundamentals - 10am"
            />

            </form>
        </div>
    )
}

export default Form;