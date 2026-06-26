import axios from "axios";
import { User } from "../types/user";

const USERS_API = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(USERS_API);
  return response.data;
};