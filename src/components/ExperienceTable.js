import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from "styled-components";
import vodacom from '../pages/images/vodacom.png';
import wtc from '../pages/images/wtc.png';
import tarsus from '../pages/images/tarsus.jpeg';

function createData(title, institution, period, image) {
  return { title, institution ,period, image};
}

const rows = [
  createData('Technical support Intern','Tarsus Technologies', 'Jan 2018 - Feb 2019', tarsus),
  createData('Software Engineer Student', 'WeThinkCode', 'May 2019  -  May 2021', wtc),
  createData('Software Engineer Intern', 'Vodacom', 'Feb 2020 - Jul 2020', vodacom),
  createData('Software Engineer Intern', 'Vodacom', 'Mar 2021 - Present', vodacom),
];

export default function ExperienceTable() {
  return (
    <TableContainer style={{backgroundColor:'black'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell style={{color: 'white', fontSize: "15px", fontWeight: "bold"}}>Title</TableCell>
            <TableCell align="left" style={{color: 'white', fontSize: "15px", fontWeight: "bold"}}>Institution</TableCell>
            <TableCell align="left" style={{color: 'white', fontSize: "15px", fontWeight: "bold"}}>Period</TableCell>
            <TableCell align="left" style={{color: 'white', fontSize: "15px", fontWeight: "bold"}}>Image</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color: 'white'}}>
                {row.title}
              </TableCell>
              <TableCell align="left" style={{color: 'white'}}>{row.institution}</TableCell>
              <TableCell align="left" style={{color: 'white'}}>{row.period}</TableCell>
              <TableCell align="left" style={{color: 'white'}}><ImageContainer><img src={row.image} alt="Logo" /></ImageContainer></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const ImageContainer = styled.div`
    width: auto;
    height: auto;
    background-color: black;

    img{
        height: 100px;
        width: 120px;
        border-radius:5px;
      }
`;