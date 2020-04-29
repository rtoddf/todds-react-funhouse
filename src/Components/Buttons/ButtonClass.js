import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    height: 48,
    padding: "0 30px",
    // background: "linear-gradient(45deg,#2196f3 30%,#21cbf3 90%)",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    border: 0,
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    boxShadow: theme.shadows[1],
    "&:hover" : {
      backgroundColor: theme.palette.tertiary.main,
      color: theme.palette.primary.main,
    }
  },
});

class ButtonClass extends React.Component {
  render() {
      const { classes } = this.props;

      return <Button className={classes.button}>HOC Button</Button>;
  }
}

export default withStyles(styles, { withTheme: true })(ButtonClass);