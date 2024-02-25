import {
    createItem,
    deleteItemByID,
    getItemList,
    getItemByID,
} from "@/api/items";
import {ref} from "vue";

export function useItem(){
    const products = ref([])
    const product = ref({})
    const handleFetchProducts = async () => {
        try {
            return await getItemList()
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleFetchProductById = async (id) => {
        try {
            return await getItemByID(id)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleCreateProduct = async (payload) => {
        try {
            return await createItem(payload)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleUpdateProduct = async (productId, payload) => {
        try {
            return await updateItemByID(productid, payload)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleDeleteProduct = async (productId) => {
        try {
            return await deleteItemByID(productId)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }

    return {
        products,
        product,
        handleFetchProducts,
        handleFetchProductById,
        handleCreateProduct,
        handleUpdateProduct,
        handleDeleteProduct,
    }
}