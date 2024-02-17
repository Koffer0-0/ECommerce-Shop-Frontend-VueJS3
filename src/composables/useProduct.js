import {createProduct, deleteProductByID, getAllProducts, getProductByID, getRecommendations} from "@/api/products";
import {ref} from "vue";

export function useProduct(){
    const products = ref([])
    const product = ref({})
    const recommendations = ref([])
    const handleFetchProducts = async () => {
        try {
            return await getAllProducts()
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleFetchProductById = async (id) => {
        try {
            return await getProductByID(id)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleRecommendationProducts = async () => {
        try {
            return await getRecommendations()
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleCreateProduct = async (payload) => {
        try {
            return await createProduct(payload)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleUpdateProduct = async (productId, payload) => {
        try {
            return await updateProductByID(productid, payload)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }
    const handleDeleteProduct = async (productId) => {
        try {
            return await deleteProductByID(productId)
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.log(err);
            }
        }
    }

    return {
        products,
        product,
        recommendations,
        handleFetchProducts,
        handleFetchProductById,
        handleRecommendationProducts,
        handleCreateProduct,
        handleUpdateProduct,
        handleDeleteProduct,
    }
}