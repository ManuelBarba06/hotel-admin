'use server'

import serverAxios from "@/config/serverAxios"
import { RoomTypeInterfaceResponse } from "@/interfaces/dataFetchInterface";
import { AxiosResponse } from "axios";

export async function getRoomTypes() {
    
    try {
        const response = await serverAxios.get('/room-type');
        
        return response.data.data
    } catch(error) {
        console.log(error)
    }
}