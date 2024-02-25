import {createOrder, getOrderById, getOrders} from "@/api/client";

export function useOrder(){
    const handleFetchOrders = async (id) => {
        try {
            return await getOrders(id)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleCheckout = async (id, payload) => {
        try {
            return await createOrder(id, payload)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }

    return {
        handleFetchOrders,
        handleCheckout
    }
}