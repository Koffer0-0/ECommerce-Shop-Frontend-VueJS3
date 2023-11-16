import axios from "axios";
import {API_URL} from "@/utils/consts";

const token = localStorage.getItem('access_token');

export function getOrders() {
    return axios.get(API_URL + 'order/all', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}
export function createOrders(payload) {
    return axios.post(API_URL + 'order/create', payload,{
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
}

export function getOrderById(id) {
    return axios.get(API_URL + `order/${id}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}