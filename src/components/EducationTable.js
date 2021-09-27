import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from "styled-components";
import wtc from '../pages/images/wtc.png';
import dbe from '../pages/images/dbe.png';
import ti from '../pages/images/ti.png';
import mancosa from '../pages/images/mancosa.png';


function createData(qualification, institution, year, image) {
  return { qualification, institution ,year, image};
}
console.log(wtc);

const rows = [
  createData('Matric','Insitute for quality collegiate', 2017, dbe),
  createData('NQF 5 Technical Support', 'Torque It', 2018, ti),
  createData('Higher Certificate in Information Technology', 'Mancosa', 2019, mancosa),
  createData('Software Engineer Course', 'WeThinkCode', '2019-2021', wtc),
  createData('Higher Certificate in Systems Development', 'WeThinkCode', '2019-2021', wtc),

];

export default function EducationTable() {
  return (
    <TableContainer style={{backgroundColor:'black'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell style={{color: 'white', fontSize: "15px", fontWeight: "bold"}}>Qualification</TableCell>
            <TableCell align="left" style={{color: 'white', fontSize: "15px", fontWeight: "bold"}}>Institution</TableCell>
            <TableCell align="left" style={{color: 'white', fontSize: "15px", fontWeight: "bold"}}>Years</TableCell>
            <TableCell align="left" style={{color: 'white', fontSize: "15px", fontWeight: "bold"}}>Image</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.qualification}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{color: 'white'}}>
                {row.qualification}
              </TableCell>
              <TableCell align="left" style={{color: 'white'}}>{row.institution}</TableCell>
              <TableCell align="left" style={{color: 'white'}}>{row.year}</TableCell>
              <TableCell align="left" style={{color: 'white'}}><ImageContainer> <img src={row.image} alt="Logo" /></ImageContainer></TableCell>
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
