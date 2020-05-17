import React from "react";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
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

const SimpleTableFunctional = () => {
  const classes = useStyles();

  return (
        <Grid container spacing={2}>
            <Grid item xs={12} className={classes.gridItem}>
                <TableContainer component={Paper}>
                    {/* dense - size="small"  */}
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell className={classes.tableCell}>Calories</TableCell>
                                <TableCell className={classes.tableCell}>Fat&nbsp;(g)</TableCell>
                                <TableCell className={classes.tableCell}>Carbs&nbsp;(g)</TableCell>
                                <TableCell className={classes.tableCell}>Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell className={classes.tableCell}>{row.calories}</TableCell>
                                    <TableCell className={classes.tableCell}>{row.fat}</TableCell>
                                    <TableCell className={classes.tableCell}>{row.carbs}</TableCell>
                                    <TableCell className={classes.tableCell}>{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default SimpleTableFunctional;