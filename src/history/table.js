import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import FilterListIcon from "@material-ui/icons/FilterList";
import React from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
  title: {
    fontWeight: 550,
  },
});

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: "1 1 100%",
    fontWeight: 550,
  },
}));

export const SimpleTable = (props) => {
  const classes = useStyles();
  const toolbarClasses = useToolbarStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = props.data;

  return (
    <Card>
      <CardContent>
        <TableContainer>
          <Toolbar className={toolbarClasses.root}>
            <Typography
              className={toolbarClasses.title}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              {props.symbol}
            </Typography>
            <Tooltip title="Filter list">
              <IconButton aria-label="filter list">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.title}>Time</TableCell>
                <TableCell className={classes.title} align="right">
                  Open&nbsp;($)
                </TableCell>
                <TableCell className={classes.title} align="right">
                  High&nbsp;($)
                </TableCell>
                <TableCell className={classes.title} align="right">
                  Low&nbsp;($)
                </TableCell>
                <TableCell className={classes.title} align="right">
                  Close&nbsp;($)
                </TableCell>
                <TableCell className={classes.title} align="right">
                  Volume
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      {row.time}
                    </TableCell>
                    <TableCell align="right">{row.open}</TableCell>
                    <TableCell align="right">{row.high}</TableCell>
                    <TableCell align="right">{row.low}</TableCell>
                    <TableCell align="right">{row.close}</TableCell>
                    <TableCell align="right">{row.volume}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      </CardContent>
    </Card>
  );
};
