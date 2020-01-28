import React from "react";
import { makeStyles, Paper, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1
    },

    paper: {

        margin: "10px 0px",

    },

    image: {

        width: "100%",
        height: "100%",
        objectFit: "fit"


    }



}));

const Home = () => {

    const classes = useStyles()

    return (

        <div className={classes.root}>

            <Paper className={classes.paper}>

                <Grid container>

                    <Grid item lg={6} md={6} xs={12} style={{ padding: "20px" }}>

                        {/* lg={6} md={6}  */}

                        <img className={classes.image} src="https://picsum.photos/id/10/400/300" alt="ark" />

                    </Grid>
                    <Grid item lg={6} md={6} xs={12} style={{ padding: "20px" }} >

                        <p style={{ fontSize: "1.5rem", ["text-align"]: "justify" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                    </Grid>

                </Grid>

            </Paper>

        </div >


    );


};

export default Home;


