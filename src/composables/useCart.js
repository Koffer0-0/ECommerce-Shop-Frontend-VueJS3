// composables/useCart.js

import { ref } from 'vue';

export const cartItems = ref([]);

export function useCart() {
    function addToCart(product) {
        const existingProduct = cartItems.value.find((item) => item._id === product._id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cartItems.value.push({ ...product, quantity: 1 });
        }
    }

    function removeFromCart(productId) {
        const index = cartItems.value.findIndex((item) => item._id === productId);
        if (index !== -1) {
            cartItems.value.splice(index, 1);
        }
    }

    function updateQuantity(productId, quantity) {
        const product = cartItems.value.find((item) => item._id === productId);
        if (product) {
            product.quantity = quantity;
        }
    }

    return { addToCart, removeFromCart, updateQuantity, cartItems };
}
