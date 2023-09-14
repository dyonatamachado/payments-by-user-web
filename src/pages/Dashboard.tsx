import { Box, Card, CardContent, FormControl, MenuItem, Select } from "@mui/material";
import PaymentTable from "../components/PaymentTable";

export default function Dashboard() {


    return (
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', p: 6 }}>
            <Card>
                <CardContent>
                    <Box sx={{ p: 4 }}>
                        <Box>Você ainda não fez o upload da sua planilha e/ou não adicionou nenhum usuário.</Box>
                    </Box>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <Box sx={{ p: 2 }}>
                        <FormControl fullWidth>
                            <span>Usuário</span>
                            <Select id="demo-simple-select">
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ p: 2, display: 'flex', gap: 2, justifyContent: 'space-between', mt: 2 }}>  
                        <PaymentTable></PaymentTable>
                        <PaymentTable></PaymentTable>
                        <PaymentTable></PaymentTable>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}