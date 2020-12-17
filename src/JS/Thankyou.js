import React from "react";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import "../CSS/Thankyou.css";
import logo from "../Media/logo2.png"
import thankyoubanner from "../Media/thankyoubanner.webp"

function Thankyou() {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="company logo"/>
        <img src={thankyoubanner} alt="thankyou banner" />
        <a className="linktohome" href="https://gstinsuvidhakendra.com/">
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<HomeIcon />}
          >
            <span className="gotohome__button">Go To Home</span>
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Thankyou;
