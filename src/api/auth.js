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

export function AdminSignIn(payload) {
    return axios.post(API_URL + 'auth/admin/login', payload, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json'}
    });
}

export function AdminSignUp(payload) {
    return axiosInstance.post(API_URL + 'auth/admin/signup', payload, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json'}
    });
}


export function GetMyDetails() {
    return axios.get(API_URL + 'me/');
}


