import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { User } from "../core/entities/User";
import { PaymentTypeEnum } from "../core/enums/payment-type.enum";

interface UserTableProps {
    users: User[];
}

export default function UserTable(props: UserTableProps) {

    function getPaymentTypeText(type: PaymentTypeEnum) {
        if(type === PaymentTypeEnum.Water) return "Água";
        else if (type === PaymentTypeEnum.Eletricity) return "Luz";
        else return "Internet"
    }

    return (
        <Box sx={{ border: 1, minWidth: '30%' }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Grid A</TableCell>
                            <TableCell>Grid B</TableCell>
                            <TableCell>Grid C</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            props.users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{getPaymentTypeText(user.gridA)}</TableCell>
                                    <TableCell>{getPaymentTypeText(user.gridB)}</TableCell>
                                    <TableCell>{getPaymentTypeText(user.gridC)}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}