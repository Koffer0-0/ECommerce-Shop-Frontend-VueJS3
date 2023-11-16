import axios from "axios";
import {API_URL} from "@/utils/consts";

export function getAllProducts() {
    return axios.get(API_URL + 'product/all');
}
export function getProductByID(productId) {
    return axios.get(API_URL + `product/${productId}`);
}
export function getRecommendations() {
    return axios.get(API_URL + '/recommendations');
}
