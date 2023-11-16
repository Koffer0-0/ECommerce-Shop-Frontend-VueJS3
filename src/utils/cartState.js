import { ref } from 'vue';

const cart = ref([]);

// Function to add a product to the cart
function addToCart(product) {
    const productInCart = cart.value.find((item) => item._id === product._id);

    if (productInCart) {
        productInCart.quantity++;
    } else {
        cart.value.push({...product, quantity: 1});
    }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    cart.value = cart.value.filter((item) => item._id !== productId);
}

// Function to update the quantity of a product in the cart
function updateQuantity(productId, quantity) {
    const productInCart = cart.value.find((item) => item._id === productId);
    if (productInCart) {
        productInCart.quantity = quantity;
    }
}
