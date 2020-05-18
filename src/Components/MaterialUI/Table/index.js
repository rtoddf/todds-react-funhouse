import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { PageHeading, SectionHeading } from "../../Common";
import SimpleTableFunctional from "./SimpleTableFunctional";
import CustomizedTableFunctional from "./CustomizedTableFunctional";

const useStyles = makeStyles(() => ({

}));

const Table = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
          <PageHeading title="Material-UI Table" />

          <SectionHeading title="Simple Table - Functional" />
          <SimpleTableFunctional />
          <SectionHeading title="Customized Table - Functional" />
          <CustomizedTableFunctional />
          
      </Container>
    </>
  );
}

export default Table;