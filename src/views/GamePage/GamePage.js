import React, { Component } from "react";
// @material-ui/core components
import classes from "./GamePage.module.css";
import { makeStyles } from "@material-ui/core/styles";
import HeaderSearchBar from "components/HeaderSearchBar/HeaderSearchBar.js";
import { TransitionGroup } from "react-transition-group";

import stylesLogin from "assets/jss/material-kit-react/views/singerPage.js";
import Button from "@material-ui/core/Button";
// import styles from "assets/jss/material-kit-react/views/components.js";

// const styles = makeStyles((theme) => ({
//   stylesLogin,
//   buttonDark: {
//     paddingLeft: "50px",
//     paddingRight: "50px",
//     borderRadius: "35px",
//     backgroundColor: "#3D1B7C",
//     borderColor: "#3D1B7C",
//     color: "#FFFFFF",
//     fontSize: 20,
//     fontFamily: ["Noto Sans", "sans-serif"].join(","),
//     textTransform: "none",
//     margin: "10px",
//     "&:hover": {
//       backgroundColor: "#6B5899",
//       borderColor: "#6B5899",
//     },
//   },
// }));

class GamePage extends Component {
  state = {
    singerChosen: false,
    next: false,
    lyricsChosen: false,
    submit: false,
    btnText: "Next",
  };
  // let btnText = "Next";
  transitionHandler = () => {
    if (this.state.next == false) {
      this.setState({
        next: true,
        btnText: "submit",
      });
    } else if (this.state.next == true && this.state.submit == false) {
      this.setState({ submit: true });
    }
  };
  // const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  // setTimeout(function() {
  //   setCardAnimation("");
  // }, 700);
  // const classes = styles();
  // const { ...rest } = props;
  render() {
    // const classes = styles();
    return (
      <div>
        <HeaderSearchBar />

        <button
          varient="contained"
          onClick={this.transitionHandler}
          className={classes.buttonDark}
        >
          {this.state.btnText}
        </button>
      </div>
    );
  }
}

export default GamePage;
