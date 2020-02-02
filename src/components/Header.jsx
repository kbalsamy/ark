import React from "react";
import Banner from "./Banner";
import {
  makeStyles,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Drawer,
  IconButton,
  Breadcrumbs
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  title: {
    flexGrow: 1
  },

  ribbon: {
    background: "grey"
  },

  sidepanel: {
    width: "240px",
    marginTop: "10px"
  },

  mobileNav: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },

  navMenu: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  menuList: {
    display: "flex",
    justifyContent: "center"
  },

  mobileMenu: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "5px",
    marginTop: "10px"
  }
}));

const menu = ["Booking", "Excess Baggage", "Human remains", "Pets", "Track"];

const Header = () => {
  const classes = useStyles();
  const [mobileOpen, setmobileOpen] = React.useState(false);

  const handleMobileDrawer = () => {
    setmobileOpen(!mobileOpen);
  };

  const SidePanel = () => (
    <div
      className={classes.sidepanel}
      onClick={handleMobileDrawer}
      onkeydown={handleMobileDrawer}
    >
      {menu.map((catagory, index) => (
        <div className={classes.mobileNav}>
          <Button
            component={Link}
            key={index}
            color="inherit"
            fullWidth
            to={`/${catagory}`}
          >
            {catagory}
          </Button>
        </div>
      ))}
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.ribbon} position="sticky">
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            Ark
          </Typography>
          <div className={classes.mobileNav}>
            <IconButton color="inherit" onClick={handleMobileDrawer}>
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.navMenu}>
            <List component="nav" className={classes.menuList}>
              {menu.map((catagory, index) => (
                <Button
                  component={Link}
                  key={index}
                  color="inherit"
                  to={`/${catagory}`}
                >
                  {catagory}
                </Button>
              ))}
            </List>
          </div>
        </Toolbar>
      </AppBar>
      <Banner />

      <Drawer open={mobileOpen} onClose={handleMobileDrawer} anchor="right">
        <SidePanel />
      </Drawer>
    </div>
  );
};

export default Header;
