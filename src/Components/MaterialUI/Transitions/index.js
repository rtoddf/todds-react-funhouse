import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { PageHeading, SectionHeading } from "../../Common";
import CollapseFunctional from "./CollapseFunctional";
import FadeFunctional from "./FadeFunctional";

const useStyles = makeStyles(() => ({

}));

const Transitions = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
          <PageHeading title="Material-UI Transitions" />

          <SectionHeading title="Collapse - Functional" />
          <CollapseFunctional />

          <SectionHeading title="Fade - Functional" />
          <FadeFunctional />
      </Container>
    </>
  );
}

export default Transitions;