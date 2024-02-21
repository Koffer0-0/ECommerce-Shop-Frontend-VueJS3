import axios from "axios";
import {API_URL} from "@/utils/consts";
import axiosInstance from "@/utils/instance";
const token = localStorage.getItem('access_token');

export function getAllProducts() {
    return axiosInstance.get(API_URL + 'product/all');
}
export function getProductByID(productId) {
    return axios.get(API_URL + `product/${productId}`);
}
export function getRecommendations(params) {
    return axios.get(API_URL + 'product/recommendations', { params });
}
export function getFilteredProducts(params) {
    return axios.get(API_URL + 'product/filter', { params });
}
export function makeSearch(params) {
    return axios.get(API_URL + 'product/search', { params });
}

export function createProduct(payload) {
    return axiosInstance.post(API_URL + 'product/create', payload)
}

export function updateProductByID(productId, payload) {
    return axiosInstance.get(API_URL + 'product/all', payload);
}

export function deleteProductByID(productId) {
    return axiosInstance.delete(API_URL + `product/${productId}`);
}