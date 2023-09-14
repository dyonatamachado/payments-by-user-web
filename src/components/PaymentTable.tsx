import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function PaymentTable() {
    return (
        <Box sx={{ border: 1, minWidth: '30%' }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Tipo</TableCell>
                            <TableCell>Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Água</TableCell>
                            <TableCell>200</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Internet</TableCell>
                            <TableCell>100</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>Luz</TableCell>
                            <TableCell>50</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}