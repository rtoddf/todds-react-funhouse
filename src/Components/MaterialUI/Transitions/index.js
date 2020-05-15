import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { PageHeading, SectionHeading } from "../../Common";

const useStyles = makeStyles(() => ({

}));

const Transitions = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
          <PageHeading title="Material-UI Transitions" />
      </Container>
    </>
  );
}

export default Transitions;