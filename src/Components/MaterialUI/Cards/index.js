import React from "react";
import { Container} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SimpleCardFunctional from "./SimpleCardFunctional";
import MediaCardFunctional from "./MediaCardFunctional";
import MediaCardClass from "./MediaCardClass";
import ComplexCardFunctional from "./ComplexCardFunctional";

import { PageHeading, SectionHeading } from "../../Common";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "50px",
        paddingBottom: "50px",
        borderBottom: "1px solid #999",
    }
}));

const Cards = props => {
    const classes = useStyles();

    return (
        <>
            <Container className={classes.root}>
                <PageHeading title="Material-UI Cards" />
                <SectionHeading title="Simple Card" />
                <SimpleCardFunctional />
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
                <SectionHeading title="UI Controls" />
            </Container>
        </>
    )
}

export default Cards;