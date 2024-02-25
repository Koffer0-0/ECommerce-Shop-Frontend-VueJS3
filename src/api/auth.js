import { API_URL } from "@/utils/consts";
import axiosInstance from "@/utils/instance";
import axios from "axios";

const URLS = {
    baseUserURL : `${API_URL}User`
}
export function SignIn(payload) {
    return axiosInstance.post(`${URLS.baseUserURL}/authorize`, payload, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json'}
    });
}

export function SignUp(payload) {
    return axiosInstance.post(`${URLS.baseUserURL}/register`, payload, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json'}
    });
}

export function GetMyDetails() {
    const token = localStorage.getItem('access_token');
    return axios.get(API_URL + 'auth/user/me', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
}

export function getUserInfoByEmail(email) {
    return axiosInstance.get(`${URLS.baseUserURL}/email/${email}`);
}

