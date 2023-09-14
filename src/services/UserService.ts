import axios from "axios";
import { User } from "../core/entities/User";

export default class UserService {
    url: string;

    constructor() {
        this.url = "https://localhost:7000/api/users"
    }

    getUsers() {
        return axios.get(this.url);
    }

    createUser(user: User) {
        return axios.post(this.url, user);
    }
}