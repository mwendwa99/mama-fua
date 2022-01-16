import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function createData(name, price) {
    return { name, price };
}

const rows = [
    createData('Bucket Wash', 400),
    createData('Kitchen Wash', 600),
];

export default function BasicTable() {
    return (
        <Box sx={{ pt: '2rem' }}>
            <TableContainer>
                <Typography variant='h6' fontWeight={700} >Cart Items</Typography>
                <Divider />
                <Table aria-label="simple table"
                    sx={{
                        [`& .${tableCellClasses.root}`]: {
                            borderBottom: "none"
                        }
                    }}
                >
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* <TableCell component="th" scope="row"> */}
                                <TableCell align='left'>
                                    <Typography variant='body1'>{row.name}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant='body1'>Kes. {row.price}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableBody>
                        <TableRow>
                            {/* add subtotal */}
                            <TableCell>
                                <Typography variant='body1'>Subtotal</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant='body1' fontWeight={700}>{rows.reduce((acc, cur) => acc + cur.price, 0)}</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {/* add tax */}
                            <TableCell>
                                <Typography variant='body1'>Tax</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant='body1' fontWeight={700}>{rows.reduce((acc, curr) => acc + curr.price, 0) * 16 / 100}</Typography>
                            </TableCell>

                        </TableRow>
                        <Divider />
                        <TableRow>
                            {/* add total */}
                            <TableCell>
                                <Typography variant='h6' fontWeight={700} >Total</Typography>
                            </TableCell>
                            <TableCell align="right">
                                {/* round upward */}
                                <Typography variant='body1' fontWeight={700}>{Math.ceil(rows.reduce((acc, curr) => acc + curr.price, 0) * 1.16)}</Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
