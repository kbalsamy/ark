import React from 'react';
import { makeStyles, Grid, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({

    root: {

        flexGrow: 1,
        backgroundColor: "black"
    }

}));



const Footer = () => {

    const classes = useStyles()

    return (

        <div className={classes.root}>

            <Grid container justify="center" alignItems="center">

                <Grid item lg={4} md={4} xs={12}>
                    <Typography color="secondary" >Address</Typography>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <Typography color="secondary" >info</Typography>

                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <Typography color="secondary">sitemap</Typography>

                </Grid>


            </Grid>


        </div>

    );


};

export default Footer;

