// composables/useCart.js

import {ref, watch} from 'vue';
const cartItems = ref([]);

// Function to load the cart from sessionStorage

// Persist cart items in sessionStorage with a timestamp
watch(cartItems, (cart) => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}, { deep: true });


export function useCart() {
    function addToCart(product) {
        const existingProduct = cartItems.value.find((item) => item._id === product._id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cartItems.value.push({ ...product, quantity: 1 });
        }
        console.log('Added to cart', cartItems.value); // Debugging
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

    return { cartItems, addToCart, removeFromCart, updateQuantity }}

// Export cartItems separately
export { cartItems };
