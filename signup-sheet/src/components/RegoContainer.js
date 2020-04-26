import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import ArchiveIcon from '@material-ui/icons/Archive';
import Divider from '@material-ui/core/Divider';

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
    title: {
        paddingBottom: '10px',
        verticalAlign: 'bottom'
    },
    icon: {
        display: 'inline-flex',
        verticalAlign: '-6px' 
    }
  }));

  function RegoContainer(){

    const classes = useStyles();
    return(
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div className={classes.title}> 
                            <span> <ArchiveIcon fontSize="large" color="primary" elementType="span" className ={classes.icon}/> Registrations</span>
                        </div>
                        <Divider />
                    </Paper>
                </Grid>
            </Grid>
        </div>);
  }

  export default RegoContainer;