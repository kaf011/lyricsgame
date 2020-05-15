import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Button from "@material-ui/core/Button";

// import logoSrc from "../../assets/logo.svg"  Fixme: logo src needed HERE

const styles = {
  // toolbarMargin: {
  //   ...theme.mixins.toolbar,
  // },

  grow: {
    flexGrow: 1,
  },

  search: {
    position: "relative",
    left: "10%",
    borderRadius: "35px",
    backgroundColor: fade(white, 0.15),
    "&:hover": {
      backgroundColor: fade(white, 0.25),
    },
    // marginRight: theme.spacing(2),
    // marginLeft: theme.spacing(5),
    height: "35px",
    width: "auto",
  },

  searchBtn: {
    position: "relative",
    right: "0px",
    bottom: "3.5px",
  },

  inputRoot: {
    color: "inherit",
  },

  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    // paddingRight: `calc(${theme.spacing(1)}px)`,
    // transition: theme.transitions.create("width"),
    width: "150px",
    position: "relative",
    bottom: "3px",
    // [theme.breakpoints.up("md")]: {
    //   width: "400px",
    // },
  },
};

const useStyles = makeStyles(styles);

export default function HeaderSingerPage() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit">
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{
                "aria-label": "search",
              }}
            />
            <IconButton color="inherit" className={classes.searchBtn}>
              <Badge color="secondary">
                <SearchIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.grow} />
          <img alt="Logo" className={classes.logo} />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </div>
  );
}
