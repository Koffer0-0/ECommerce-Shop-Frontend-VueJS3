import axios from "axios";
import {API_URL} from "@/utils/consts";
import axiosInstance from "@/utils/instance";
const token = localStorage.getItem('access_token');
const URLS = {
    baseItemURL: `${API_URL}Shop/items`
}
export function getItemList() {
    return axiosInstance.get(URLS.baseItemURL, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}
export function getItemByID(productId) {
    return axios.get(`${URLS.baseItemURL}/${productId}`);
}
export function createItem(payload) {
    return axiosInstance.post(URLS.baseItemURL, payload)
}
export function updateItemByID(productId, payload) {
    return axiosInstance.get(URLS.baseItemURL, payload);
}
export function deleteItemByID(productId) {
    return axiosInstance.delete(`${URLS.baseItemURL}/${productId}`);
}
export function getItemByCategory(category) {
    return axiosInstance.get(`${URLS.baseItemURL}/category/${category}`);
}