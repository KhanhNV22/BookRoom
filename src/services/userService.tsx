import { API_URL } from "../constants";

export const login = () => {
    fetch(`${API_URL}/users`, {
      method: 'GET'
    });
}


export const userId = localStorage.getItem('userId');
export const userIdName = localStorage.getItem('userIdName');
export const userEmail = localStorage.getItem('userEmail');
export const userPass = localStorage.getItem('userPass');
