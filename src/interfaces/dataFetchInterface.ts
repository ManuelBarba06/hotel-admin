export interface RoomTypeInterfaceResponse {
    status: string,
    data: [
        {
            name: string,
            price: number,
            description: string
        }
    ]
}