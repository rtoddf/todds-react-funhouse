import React from "react";
import { Container} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SimpleAccordianFunctional from './SimpleAccordianFunctional';

import { PageHeading, SectionHeading } from "../../Common";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginBottom: "50px",
        paddingBottom: "50px",
        borderBottom: "1px solid #999",
    }
}));

const Accordian = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.root}>
                <PageHeading title="Material-UI Accordian" />
                <SectionHeading title="Simple Accordian - Functional" />
                <SimpleAccordianFunctional />
                {/* <SectionHeading title="Simple Card - Class" /> */}
            </Container>

            {/* <Container className={classes.root}>
                <SectionHeading title="Media Card - Functional" />
                <MediaCardFunctional />
                <SectionHeading title="Media Card - Class" />
                <MediaCardClass />
            </Container>

            <Container className={classes.root}>
                <SectionHeading title="Complex Interaction Card" />
                <ComplexCardFunctional />
            </Container>

            <Container className={classes.root}>
                <SectionHeading title="UI Controls - Functional" />
                <UIControlsCardFunctional />
            </Container> */}
        </>
    )
}

export default Accordian;