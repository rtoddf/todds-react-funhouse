import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    height: 48,
    padding: "0 30px",
    // background: "linear-gradient(45deg,#2196f3 30%,#21cbf3 90%)",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.tertiary.main,
    border: 0,
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    boxShadow: theme.shadows[1],
  },
});

class ButtonClass extends React.Component {
  render() {
      const { classes } = this.props;

      return <Button className={classes.root}>HOC Button</Button>;
  }
}

export default withStyles(styles, { withTheme: true })(ButtonClass);