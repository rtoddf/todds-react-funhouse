import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import ImageAvatarFunctional from "./ImageAvatarFunctional";

import { PageHeading, SectionHeading } from "../../Common";

const useStyles = makeStyles(() => ({
  root: {
      flexGrow: 1,
      marginBottom: "50px",
      paddingBottom: "50px",
      borderBottom: "1px solid #999",
  }
}));

const Avatar = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
          <PageHeading title="Material-UI Avatar" />
          <SectionHeading title="Image Avatars - Functional" />
          <ImageAvatarFunctional />
          {/* <SectionHeading title="Simple Card - Class" /> */}
          {/* <SimpleCardClass /> */}
      </Container>
    </>
  );
}

export default Avatar;