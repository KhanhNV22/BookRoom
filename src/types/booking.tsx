
export interface Booking {
    id: number;
    imgBook: string; 
    nameBook: string; 
    infoBook: string; 
    addressDetailBook: string; 
    addressBook: string; 
    typeBook: string; 
    priceBook: number; 
    squareBook: number; 
    bedRoomBook: number;
    startDate: Date;
    endDate: Date;
    adult: number;
    children: number;
    guest_nums: number;
    status: boolean;
    isCheck: number;
}
