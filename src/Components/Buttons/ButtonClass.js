import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
    root: {
      background: "linear-gradient(45deg,#2196f3 30%,#21cbf3 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
  };

class ButtonClass extends React.Component {
    render() {
        const { classes } = this.props;

        return <Button className={classes.root}>HOC Button</Button>;
    }
}

export default withStyles(styles)(ButtonClass);