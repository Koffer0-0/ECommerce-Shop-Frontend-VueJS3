import axios from "axios";
import {API_URL} from "@/utils/consts";
import axiosInstance from "@/utils/instance";

export function getAllProducts() {
    return axiosInstance.get(API_URL + 'product/all');
}
export function getProductByID(productId) {
    return axios.get(API_URL + `product/${productId}`);
}
export function getRecommendations() {
    return axios.get(API_URL + 'product/recommendations');
}
