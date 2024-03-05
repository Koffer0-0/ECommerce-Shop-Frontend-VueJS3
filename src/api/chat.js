import axiosInstance from "@/utils/instance";
import {API_URL} from "@/utils/consts";

export function askChat(message) {
    return axiosInstance.get(API_URL + `chat?message=${message}`, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json'}
    });
}
