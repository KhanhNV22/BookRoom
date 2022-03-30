import { API_URL } from "../constants";

export const login = () => {
    fetch(`${API_URL}/users`, {
      method: 'GET'
    });
}
