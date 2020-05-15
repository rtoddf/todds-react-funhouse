import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { PageHeading, SectionHeading } from "../../Common";
import BasicBadgesFunctional from "./BasicBadgesFunctional";

const useStyles = makeStyles(() => ({

}));

const Badges = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
          <PageHeading title="Material-UI Badges" />
          <SectionHeading title="Basic Badges - Functional" />
          <BasicBadgesFunctional />
      </Container>
    </>
  );
}

export default Badges;