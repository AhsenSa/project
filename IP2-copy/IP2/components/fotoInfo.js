import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(foto, location, data, camara) {
    return { foto, location, data, camara};
  }
  
  const rows = [
    createData(1, "Stuttgart", "15.01.2022", 24),
    createData(2, "Esslingen", "15.01.2022", 37),
    createData(3, "  Ulm", "15.01.2022", 24),
    createData(4, "Hamburg", "15.01.2022", 67),
    createData(5, "sulz", "15.01.2022", 49)
  ];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Foto</TableCell>
            <TableCell align="right">location</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">camara</TableCell>
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
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.data}</TableCell>
              <TableCell align="right">{row.camara}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
