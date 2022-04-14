
export interface Booking {
    id: number;
    host_id: string;
    room_id: string;
    imgBook: string; 
    nameBook: string; 
    infoBook: string; 
    addressDetailBook: string; 
    addressBook: string; 
    typeBook: string; 
    priceBook: number; 
    squareBook: number; 
    bedRoomBook: number;
    startDay: Date;
    endDay: Date;
    adult: number;
    children: number;
    guest_nums: number;
    status: number;
    isCheck: boolean;
}
