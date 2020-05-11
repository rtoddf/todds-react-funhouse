import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import SimpleDialogFunctional from "./SimpleDialogFunctional";

import { PageHeading, SectionHeading } from "../../Common";

const useStyles = makeStyles(() => ({
  root: {
      flexGrow: 1,
      marginBottom: "50px",
      paddingBottom: "50px",
      borderBottom: "1px solid #999",
  }
}));

const Dialog = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
          <PageHeading title="Material-UI Dialog" />
          <SectionHeading title="Dialog - Functional" />
          <SimpleDialogFunctional />
          {/* <SectionHeading title="Simple Card - Class" /> */}
          {/* <SimpleCardClass /> */}
      </Container>
    </>
  );
}

export default Dialog;