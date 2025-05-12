import axios from "axios";
import type { Card } from "../types/card";


const BASE_URL = import.meta.env.VITE_API_URL_POST;

export const fetchPosts=  async ():Promise<Card[]> => {
    const response = await axios.get(BASE_URL)
    return response.data;
}