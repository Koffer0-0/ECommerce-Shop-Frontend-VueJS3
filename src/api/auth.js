import { API_URL } from "@/utils/consts";
import axiosInstance from "@/utils/instance";
import axios from "axios";

export function SignIn(payload) {
    return axios.post(API_URL + 'auth/users/tokens', payload, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json'}
    });
}

export function SignUp(payload) {
    return axiosInstance.post(API_URL + 'auth/users/', payload, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json'}
    });
}


