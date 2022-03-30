import { API_URL } from "../constants";

export const getAllRooms = () => {
    fetch(`${API_URL}/rooms`, {
      method: 'GET'
    });
}
