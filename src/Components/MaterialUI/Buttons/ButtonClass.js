import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    ...theme.button,
    // boxShadow: theme.shadows[1],
  },
});

class ButtonClass extends React.Component {
  render() {
      const { classes } = this.props;

      return <Button className={classes.button}>HOC Button</Button>;
  }
}

export default withStyles(styles, { withTheme: true })(ButtonClass);