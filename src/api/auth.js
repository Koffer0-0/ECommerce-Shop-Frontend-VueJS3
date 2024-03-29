import { API_URL } from "@/utils/consts";
import axiosInstance from "@/utils/instance";
import axios from "axios";

export function SignIn(payload) {
    return axiosInstance.post(API_URL + 'auth/user/login', payload, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json'}
    });
}

export function SignUp(payload) {
    return axiosInstance.post(API_URL + 'auth/user/register', payload, {
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

export function getAllUsers() {
    return axiosInstance.get(API_URL + 'auth/all');
}

