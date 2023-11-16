import {createOrders, getOrderById, getOrders} from "@/api/orders";

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
    const handleFetchOrderById = async (id) => {
        try {
            return await getOrderById(id)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleCheckout = async (payload) => {
        try {
            return await createOrders(payload)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }

    return {
        handleFetchOrders,
        handleFetchOrderById,
        handleCheckout
    }
}