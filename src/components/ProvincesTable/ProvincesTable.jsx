import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./ProvincesTable.module.css";

const ProvincesTable = ({ country, data }) => {
  if (data[0]) {
    console.log("ProvincesTable, props.data:", data);
    if (data.length === 1 && !data[0].provinceState)
      data[0].provinceState = country;

    let headTitles = Object.keys(data[0]);
    console.log("HeadTitles:", headTitles);

    headTitles = headTitles.filter((title) => data[0][title] !== null);
    console.log("HeadTitles after filter:", headTitles);

    const StyledTableCell = withStyles((theme) => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
      root: {
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }))(TableRow);

    return (
      <TableContainer className={styles.provincesTable} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              {headTitles.map((title, index) => (
                <StyledTableCell key={index}>{title}</StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={index}>
                {headTitles.map((title, index) => (
                  <StyledTableCell key={index}>{row[title]}</StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else return null;
};

export default ProvincesTable;
