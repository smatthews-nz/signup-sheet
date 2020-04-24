import React from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    
    root: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
      },

    appBar: {
        borderRadius: 4
    },

    menuButton: {
      marginRight: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2)
      }
  }));

function Header(){

    const classes = useStyles();
    return(
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                        <Typography variant="h6" className={classes.title}>
                            Conference Signup
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
        </Grid>
        </Grid>
    )
}

export default Header;