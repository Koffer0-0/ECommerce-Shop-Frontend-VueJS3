<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div class="mx-auto max-w-3xl">
        <header class="text-center">
          <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
        </header>

        <div class="mt-8">
          <ul class="space-y-4">
            <li v-for="item in cartItems" :key="item._id" class="flex items-center gap-4">
              <img
                  :src="item.imageURL"
                  alt=""
                  class="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 class="text-sm text-gray-900">{{ item.name }}</h3>

                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt class="inline">Price: </dt>
                    <dd class="inline">{{ item.price }}</dd>
                  </div>

<!--                  <div>-->
<!--                    <dt class="inline">Color:</dt>-->
<!--                    <dd class="inline">White</dd>-->
<!--                  </div>-->
                </dl>
              </div>

              <div class="flex flex-1 items-center justify-end gap-2">
                <form>
                  <label for="Line1Qty" class="sr-only"> Quantity </label>

                  <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line1Qty"
                      class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </form>

                <button class="text-gray-600 transition hover:text-red-600"
                        @click="removeFromCart(item._id)">
                  <span class="sr-only">Remove item</span>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              {{item.price}}
            </li>
          </ul>

          <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
            <div class="w-screen max-w-lg space-y-4">
              <dl class="space-y-0.5 text-sm text-gray-700">
                <div class="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>{{total}}</dd>
                </div>
              </dl>

              <div class="flex justify-end">
              </div>

              <div class="flex justify-end">
                <a
                    class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    @click="createOrder"
                >
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {computed, onMounted, ref, watch} from 'vue';
import {useCart} from "@/composables/useCart";
import {useOrder} from "@/composables/useOrder";
import {useAuth} from "@/composables/useAuth";

const { cartItems, removeFromCart, updateQuantity } = useCart();
const { handleCheckout } = useOrder();
const { accountDetails } = useAuth();
const currentUser = ref()

const total = computed(() => {
  if (cartItems) {
    return cartItems.value.reduce((acc, item) => acc + item.quantity * item.price, 0);
  } else {
    return 0
  }
});

function loadCart() {
  const cartStorage = sessionStorage.getItem('cart');
  cartItems.value = JSON.parse(cartStorage);
}

function createOrder() {
  const orderItems = cartItems.value.map(item => item._id); // Assuming you need product IDs for the order
  const orderTotal = total.value.toString();

  const payload = {
    date: new Date().toISOString(),
    total: orderTotal,
    user: currentUser.value.data._id, // Or however you get the current user's ID
    items: orderItems
  };

  handleCheckout(payload);
}
const getCurrentUser = async () => {
  currentUser.value = await accountDetails()
}

onMounted(() => {
  loadCart()
  getCurrentUser()
});

</script>

<style scoped>

</style>