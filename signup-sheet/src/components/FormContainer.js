import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Form from './Form';

const theme = createMuiTheme();

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  }));

function FormContainer(){
    const classes = useStyles();

    return(
    <div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                <Form />
                </Paper>
            </Grid>
        </Grid>
    </div>);
}

export default FormContainer;