import axios from "axios";
import {API_URL} from "@/utils/consts";

export function getOrders() {
    return axios.get(API_URL + 'orders', {
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json'}
    });
}

export function getOrderById(id) {
    return axios.get(API_URL + `order/${id}`, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json'}
    });
}