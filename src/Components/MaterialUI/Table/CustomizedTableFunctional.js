import React from "react";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.quaternary.dark,
      color: theme.palette.quaternary.contrastText,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles(theme => ({
    gridItem: {
        marginBottom: 30,
    },
    table: {
        minWidth: 650,
    },
    tableCell: {
        textAlign: "right",
    }
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const CustomizedTableFunctional = (props) => {
  const classes = useStyles();

  return (
        <Grid container spacing={2}>
            <Grid item xs={12} className={classes.gridItem}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                <StyledTableCell className={classes.tableCell}>Calories</StyledTableCell>
                                <StyledTableCell className={classes.tableCell}>Fat&nbsp;(g)</StyledTableCell>
                                <StyledTableCell className={classes.tableCell}>Carbs&nbsp;(g)</StyledTableCell>
                                <StyledTableCell className={classes.tableCell}>Protein&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell className={classes.tableCell}>{row.calories}</StyledTableCell>
                                    <StyledTableCell className={classes.tableCell}>{row.fat}</StyledTableCell>
                                    <StyledTableCell className={classes.tableCell}>{row.carbs}</StyledTableCell>
                                    <StyledTableCell className={classes.tableCell}>{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default CustomizedTableFunctional;