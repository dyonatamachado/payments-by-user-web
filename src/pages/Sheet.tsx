import { Box, Card, CardActions, CardContent, Input } from "@mui/material";

export default function Sheet() {
    return (
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', p: 6 }}>
            <Card>
                <CardContent>
                    <Box sx={{ p: 4 }}>
                        <ul>
                            <li>Você pode importar arquivo no formato .XLSX</li>
                            <li>Se você já tiver importado um arquivo anteriormente, ao fazer o upload, os dados anteriores serão perdidos</li>
                            <li>Será considerada apenas a primeira planilha do documento</li>
                            <li>A planilha não pode conter dados fora das colunas A, B e C</li>
                            <li>Espera-se que a coluna A seja do formato inteiro, a coluna B do formato texto e a coluna C do formato decimal</li>
                            <li>A coluna A representa o Id do pagamento, a coluna B representa o tipo e a coluna C o valor</li>
                            <li>Cada linha da planilha que apresentar dados inválidos será desconsiderada</li>
                        </ul>
                        
                    </Box>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'end', p: 4 }}>
                    <Input type="file"></Input>
                </CardActions>
            </Card>
        </Box>
    );
}