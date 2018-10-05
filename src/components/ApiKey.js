import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Dev Joe', 159, '2018/06/01', 24, 4.0),
  createData('Staging 1', 237, '2018/06/02', 37, 4.3),
  createData('Staging 2', 262, '2018/06/03', 24, 6.0),
  createData('Productions', 305, '2018/06/04', 67, 4.3),
  createData('Gingerbread', 356, '2018/06/05', 49, 3.9),
];



class ApiKey extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell numeric>Key</TableCell>
                        <TableCell numeric>Date Created</TableCell>
                        <TableCell numeric>Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map(row => {
                        return (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                            {row.name}
                            </TableCell>
                            <TableCell numeric>{row.calories}</TableCell>
                            <TableCell numeric>{row.fat}</TableCell>
                            <TableCell numeric>{row.carbs}</TableCell>
                        </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
ApiKey.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(ApiKey);
