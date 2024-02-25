import axios from "axios";
import {API_URL} from "@/utils/consts";

const token = localStorage.getItem('access_token');
const URLS = {
    baseClientURL: `${API_URL}/Shop/client`
}

export function getClientInfo(id) {
    return axios.get(`${URLS.baseClientURL}/${id}`)
}
export function getClientBalance(id) {
    return axios.get(`${URLS.baseClientURL}/${id}`)
}
export function addItemToCart(clientId, itemId) {
    return axios.post(`${URLS.baseClientURL}/${clientId}/cart/${itemId}`)
}
export function deleteItemFromCart(clientId, itemId) {
    return axios.delete(`${URLS.baseClientURL}/${clientId}/cart/${itemId}`)
}

export function getOrders(id) {
    return axios.get(`${URLS.baseCLientURL}/${id}/orders`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}
export function createOrder(id, payload) {
    return axios.post(`${URLS.baseCLientURL}/${id}/orders`, payload,{
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
}
