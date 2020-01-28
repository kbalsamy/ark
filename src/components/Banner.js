import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core"


const useStyles = makeStyles(theme => ({

    root: {

        backgroundColor: "steelblue",
        height: "400px"

    },

    text: {

        textAlign: "center",


    }


}));


const Banner = () => {

    const classes = useStyles()

    return (

        <div className={classes.root}>
            <Typography className={classes.text} variant="h1">Banner goes here</Typography>
        </div>

    );
};

export default Banner;