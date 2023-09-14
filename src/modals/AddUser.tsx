import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { PaymentTypeEnum } from "../core/enums/payment-type.enum";
import { useState } from "react";
import { User } from "../core/entities/User";
import UserService from "../services/UserService";

const userService = new UserService();

interface AddUserProps {
    onClose(): void;
}

export default function AddUser(props: AddUserProps) {
    const [idErrorMessage, setIdErrorMessage] = useState<string>("");
    const [nameErrorMessage, setNameErrorMessage] = useState<string>("");
    const [gridAErrorMessage, setGridAErrorMessage] = useState<string>("");
    const [gridBErrorMessage, setGridBErrorMessage] = useState<string>("");
    const [gridCErrorMessage, setGridCErrorMessage] = useState<string>("");

    const gridOptions = ["Água", "Luz", "Internet"];

    const [id, setId] = useState<string>();
    const [name, setName] = useState<string>();
    const [gridA, setGridA] = useState<string>();
    const [gridB, setGridB] = useState<string>();
    const [gridC, setGridC] = useState<string>();

    function handleSaveBtnClick() {
        if(!validate()) return;

        const user: User = {
            id: id ? +id : 0,
            name: name ? name : "",
            gridA: setGridType(gridA),
            gridB: setGridType(gridB),
            gridC: setGridType(gridC)
        };

        userService.createUser(user)
            .then(() => dismiss())
            .catch((error) => console.log(error));
    }

    function setGridType(value?: string) : PaymentTypeEnum {
        if(value === "Luz") return PaymentTypeEnum.Eletricity;
        if(value === "Internet") return PaymentTypeEnum.Internet;
        return PaymentTypeEnum.Water;
    }

    function validate() : boolean {
        const idIsValid = validateId();
        const nameIsValid = validateName();
        const gridAIsValid = validateGridA();
        const gridBIsValid = validateGridB();
        const gridCIsValid = validateGridC();

        const isValid = idIsValid &&
            nameIsValid &&
            gridAIsValid &&
            gridBIsValid &&
            gridCIsValid;

        return isValid;
    }

    function validateId() : boolean {
        if(id === undefined || id === "")
        {
            setIdErrorMessage("O campo id é obrigatório");
            return false;
        }
        if(+id < 1)
        {
            setIdErrorMessage("O campo id deve ser maior que zero");
            return false;
        }

        setIdErrorMessage("")
        return true;
    }

    function validateName() : boolean {
        if(name === undefined)
        {
            setNameErrorMessage("O campo nome é obrigatório");
            return false;
        }

        setNameErrorMessage("");
        return true;
    }

    function validateGridA() : boolean {
        if(gridA === undefined)
        {
            setGridAErrorMessage("O campo Grid A é obrigatório");
            return false;
        }
        if(gridA === gridB || gridA === gridC)
        {
            setGridAErrorMessage("O campo Grid A não pode ser igual ao Grid B nem ao Grid C");
            return false;
        }

        setGridAErrorMessage("");
        return true;
    }

    function validateGridB() : boolean {
        if(gridA === undefined)
        {
            setGridBErrorMessage("O campo Grid B é obrigatório");
            return false;
        }
        if(gridA === gridB || gridB === gridC)
        {
            setGridBErrorMessage("O campo Grid B não pode ser igual ao Grid A nem ao Grid C");
            return false;
        }

        setGridBErrorMessage("");
        return true;
    }

    function validateGridC() : boolean {
        if(gridA === undefined)
        {
            setGridCErrorMessage("O campo Grid C é obrigatório");
            return false;
        }
        if(gridA === gridC || gridB === gridC)
        {
            setGridCErrorMessage("O campo Grid C não pode ser igual ao Grid A nem ao Grid B");
            return false;
        }

        setGridCErrorMessage("");
        return true;
    }

    function dismiss() {
        props.onClose();
    }  

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        boxShadow: 5,
        p: 3,
        borderRadius: '5px'
    };

    return (
        <Box sx={modalStyle}>
            <h4>Adicionar usuário</h4>

            <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column'}}>
                <TextField 
                    id="outlined-basic" label="Id" variant="standard" type="number" inputProps={{ min: 1 }}
                    onChange={(event) => setId(event.target.value)}
                    error={!!idErrorMessage}
                    helperText={idErrorMessage}
                />

                <TextField id="outlined-basic" label="Nome" variant="standard" type="text"
                    onChange={(event) => setName(event.target.value)}
                    error={!!nameErrorMessage}
                    helperText={nameErrorMessage}
                />

                <FormControl fullWidth variant="standard" error={!!gridAErrorMessage}>
                    <InputLabel id="grid-a-label">Grid A</InputLabel>
                    <Select 
                        id="grid-a-select" value={gridA} 
                        onChange={(event) => setGridA(event.target.value)}
                    >
                        {
                            gridOptions?.map(option => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>{gridAErrorMessage}</FormHelperText>
                </FormControl>

                <FormControl fullWidth variant="standard" error={!!gridBErrorMessage}>
                    <InputLabel id="grid-b-label">Grid B</InputLabel>
                    <Select 
                        id="grid-b-select" 
                        value={gridB} onChange={(event) => setGridB(event.target.value)}
                    >
                        {
                            gridOptions?.map(option => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>{gridBErrorMessage}</FormHelperText>
                </FormControl>

                <FormControl fullWidth variant="standard" error={!!gridCErrorMessage}>
                    <InputLabel id="grid-c-label">Grid C</InputLabel>
                    <Select 
                        id="grid-c-select" value={gridC} 
                        onChange={(event) => setGridC(event.target.value)}
                    >
                        {
                            gridOptions?.map(option => (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>{gridCErrorMessage}</FormHelperText>
                </FormControl>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'end', mt: 5, gap: 1 }}>
                <Button color="error" onClick={() => dismiss()}>Cancelar</Button>
                <Button color="success" variant="contained" onClick={() => handleSaveBtnClick()}>Salvar</Button>
            </Box>
        </Box>
    );
}