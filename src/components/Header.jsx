import React from "react";
import { makeStyles, Container, Typography, AppBar, Toolbar, Button } from "@material-ui/core"


const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1
    },

    title: {
        flexGrow: 1
    },

    ribbon: {

        background: 'grey',



    }

}));


const Header = () => {

    const classes = useStyles()

    return (

        <div className={classes.root} >
            <AppBar className={classes.ribbon} position="static" >
                <Toolbar>
                    <Typography className={classes.title} variant='h5'>Ark</Typography>
                    <Button color="inherit">Pets</Button>
                    <Button color="inherit">Excess Baggage</Button>
                    <Button color="inherit">Human Remains</Button>
                    <Button color="inherit">Booking</Button>
                    <Button color="inherit">Tracking</Button>
                </Toolbar>
            </AppBar>
        </div>


    );
};

export default Header;







