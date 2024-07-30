import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import bike1 from "./assets/bike1.png"
import bike2 from "./assets/bike2.png"
import bike3 from "./assets/bike3.png"

function createData(name, SE03Lite, SE03, SE03Max) {
  return { name, SE03Lite, SE03, SE03Max };
}

let s = {
    width : "10rem"
}

const rows = [
  createData('Image', <img style={s} src={bike1}/>, <img style={s} src={bike2}/>, <img style={s} src={bike3}/>),
  createData('Battery', "1.8Kwh", "2.7Kwh", "2.7Kwh"),
  createData(
    'Battery features',
    "LFP with 1500 cycles Active Balancing Waterproof (IP67)",
    "LFP with 1500 cycles Active Balancing Waterproof (IP67)",
    "LFP with 1500 cycles Active Balancing Waterproof (IP67)"
    ),
  createData('Battery warranty', "3 years", "3 years", "3 years"),
  createData('Charging time', "3 hours (12A)", "4 hours (12A)", "4 hours (12A)"),
  createData('Motor', "1500W", "1500W", "1000W" ),
  createData('Max Speed', "50km/h", "55km/h", "65km/h" ),
  createData('Warranty on electronics', "1 years", "1 years", "1 years" ),
  createData('Max range (@30km/h)', "100km", "120km", "150km" ),
  createData('Max range (@45km/h)', "90km", "100km", "110km" ),
  createData('Max range @full speed', "70km", "80km", "90km" ),
  createData(
    'Other key benefits',
    "Fire-safe Battery Range prediction Comfortable ride Stable and safe",
    "Fire-safe Battery Range prediction Comfortable ride Stable and safe",
    "Fire-safe Battery Range prediction Comfortable ride Stable and safe"
    ),
];

export default function BasicTable() {
    <img src={bike1}/>
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight : "700", fontSize : "larger"}}>Features</TableCell>
            <TableCell align="left" sx={{fontWeight : "700", fontSize : "larger"}}>SE03 Lite</TableCell>
            <TableCell align="left" sx={{fontWeight : "700", fontSize : "larger"}}>SE03</TableCell>
            <TableCell align="left" sx={{fontWeight : "700", fontSize : "larger"}}>SE03 Max</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.SE03Lite}</TableCell>
              <TableCell align="left">{row.SE03}</TableCell>
              <TableCell align="left">{row.SE03Max}</TableCell>
            </TableRow>
          ))}
          <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Button size='large' sx={{color : "white", backgroundColor : "black", borderRadius : "10px"}} variant="outlined">Buy now</Button>
              </TableCell>
              <TableCell>
                <Button size='large' sx={{color : "white", backgroundColor : "black", borderRadius : "10px"}} variant="outlined">Buy now</Button>
              </TableCell>
              <TableCell>
                <Button size='large' sx={{color : "white", backgroundColor : "black", borderRadius : "10px"}} variant="outlined">Buy now</Button>
              </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
