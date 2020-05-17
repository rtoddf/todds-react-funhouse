import React from "react";
import { Badge, Grid } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles(theme => ({
    icon: {
      ...theme.icon.default,
      color: theme.palette.quinary.main,
    },
    iconMd: {
      ...theme.icon.iconMd,
    },
}));

// look up this syntax!!!
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        padding: "0 4px",
        color: theme.palette.primary.contrastText,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}))(Badge);

const CustomizedBadgesFunctional = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={1}>
                <IconButton>
                    <StyledBadge badgeContent={4} color="primary">
                        <ShoppingCartIcon className={[classes.icon, classes.iconMd].join(' ')} />
                    </StyledBadge>
                </IconButton>
            </Grid>
            <Grid item xs={12} md={1}>
                <IconButton>
                    <StyledBadge badgeContent={4} color="primary">
                        <ShoppingCartIcon className={[classes.icon, classes.iconMd].join(' ')} />
                    </StyledBadge>
                </IconButton>
            </Grid>
            <Grid item xs={12} md={1}>
                <IconButton>
                    <StyledBadge badgeContent={4} color="primary">
                        <ShoppingCartIcon className={[classes.icon, classes.iconMd].join(' ')} />
                    </StyledBadge>
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default CustomizedBadgesFunctional;