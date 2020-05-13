import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import ImageAvatarFunctional from "./ImageAvatarFunctional";
import LetterAvatarFunctional from "./LetterAvatarFunctional";

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
          <SectionHeading title="Letter Avatars - Functional" />
          <LetterAvatarFunctional />
      </Container>
    </>
  );
}

export default Avatar;