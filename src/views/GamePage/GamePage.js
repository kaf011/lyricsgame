import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import HeaderSearchBar from "components/HeaderSearchBar/HeaderSearchBar.js";
import { TransitionGroup } from 'react-transition-group';

import stylesLogin from "assets/jss/material-kit-react/views/singerPage.js";
import Button from '@material-ui/core/Button';
// import styles from "assets/jss/material-kit-react/views/components.js";

const styles = makeStyles((theme) => ({
  stylesLogin,
  buttonDark: {
    paddingLeft:"50px",
    paddingRight:"50px",
    borderRadius: "35px",
    backgroundColor: '#3D1B7C',
    borderColor: '#3D1B7C',
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: ['Noto Sans', 'sans-serif'].join(','),
    textTransform: 'none',
    margin: '10px',
    '&:hover': {
      backgroundColor: '#6B5899',
      borderColor: '#6B5899'
    }
  }
}));



export default function GamePage(props) {
  const state = {
    singerChosen = false,
    next = false,
    lyricsChosen = false,
    submit = false
  };
  transitionHandler = () => {

  }
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = styles();
  const {
    ...rest
  } = props;
  return (
    <div>
    <HeaderSearchBar/>
    <TransitionGroup
          transitionName="background"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
        <Button varient="contained" className={classes.buttonDark} onClick={}>
        Next
        </Button>
    </TransitionGroup>
    </div>);

}
