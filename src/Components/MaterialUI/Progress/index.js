import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { PageHeading, SectionHeading } from "../../Common";
import CircularFunctional from "./CircularFunctional";
import InteractiveIntegrationFunctional from "./InteractiveIntegrationFunctional";
import CircularDeterminateFunctional from "./CircularDeterminateFunctional";


const useStyles = makeStyles(() => ({

}));

const Progress = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
          <PageHeading title="Material-UI Progress" />

          <SectionHeading title="Circular - Functional" />
          <CircularFunctional />
          <SectionHeading title="Interactive Integration - Functional" />
          <InteractiveIntegrationFunctional />
          <SectionHeading title="Circular Determinate - Functional" />
          <CircularDeterminateFunctional />
      </Container>
    </>
  );
}

export default Progress;