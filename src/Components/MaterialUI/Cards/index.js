import React from "react";
import { Container} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SimpleCardFunctional from "./SimpleCardFunctional";
import SimpleCardClass from "./SimpleCardClass";
import MediaCardFunctional from "./MediaCardFunctional";
import MediaCardClass from "./MediaCardClass";
import ComplexCardFunctional from "./ComplexCardFunctional";
import UIControlsCardFunctional from "./UIControlsCardFunctional";

import { PageHeading, SectionHeading } from "../../Common";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginBottom: "50px",
        paddingBottom: "50px",
        borderBottom: "1px solid #999",
    }
}));

const Cards = () => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.root}>
                <PageHeading title="Material-UI Cards" />
                <SectionHeading title="Simple Card - Functional" />
                <SimpleCardFunctional />
                <SectionHeading title="Simple Card - Class" />
                <SimpleCardClass />
            </Container>

            <Container className={classes.root}>
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
            </Container>
        </>
    )
}

export default Cards;