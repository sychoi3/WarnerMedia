import { useEffect, useState } from "react";
import {
  Stack,
  TablePagination,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  TableFooter,
} from "@mui/material";
import { Box } from "@mui/system";

import { Outlet } from "react-router";
import titleApi from "../api/title";

export default function Titles() {
  const [titles, setTitles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSearchChange = (event)=>{
    setSearchQuery(event.target.value);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log(
      "rowsPerPage changed:",
      event.target.value,
      parseInt(event.target.value, 10)
    );
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const searchTitles = () => {
    titleApi
      .getTitles(searchQuery, null, page + 1, rowsPerPage)
      .then(async (data) => {
        console.log("data: ", data.results);
        setTotalCount(data.count);
        setTitles(data.results);
      });
  };
  useEffect(() => {
    searchTitles();
  }, [searchQuery, page, rowsPerPage]);

  return (
    <div>
      <h1>Search</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={handleSearchChange}
        />
      </Box>
      <Paper>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {titles.map((row) => (
                <TableRow key={row.title_id}>
                  <TableCell component="th" scope="row">
                    <Link href={`titles/${row.title_id}`} underline="none">
                      {row.title_name} ({row.release_year})
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={totalCount}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
