import { Box, Button, Card, CardContent, Modal } from "@mui/material";
import UserTable from "../components/UserTable";
import UserService from "../services/UserService";
import { useEffect, useState } from "react";
import { User } from "../core/entities/User";
import AddUser from "../modals/AddUser";

const userService = new UserService();

export default function Users() {
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        userService.getUsers()
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    });

    function openModal() {
        setShowAddModal(true);
    }

    const closeModal = () => {
        setShowAddModal(false)
    }

    return (
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', p: 6 }}>
            <Card>
                <CardContent>
                    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column'}}>

                        <Box sx={{ display: 'flex', justifyContent: 'end', p: 2 }}>
                            <Button onClick={() => openModal()}>Adicionar usuário</Button>
                        </Box>

                        {
                            users.length 
                            ? (
                                <Box>
                                    <UserTable users={users}></UserTable>
                                </Box>
                            )
                            : (
                                <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: '1.5rem' }}>
                                    Nenhum usuário encontrado
                                </Box>
                            )
                        }
                    </Box>
                </CardContent>
            </Card>

            <Modal 
                open={showAddModal}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <AddUser onClose={closeModal}></AddUser>
            </Modal>
        </Box>
    );
}