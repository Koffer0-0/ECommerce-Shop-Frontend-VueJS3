import { ref, readonly } from 'vue';

const isVisible = ref(false);
const message = ref('');

function showToast(msg) {
    message.value = msg;
    isVisible.value = true;
    setTimeout(() => isVisible.value = false, 3000);
}

export function useToast() {
    return {
        showToast,
        message: readonly(message),
        isVisible: readonly(isVisible)
    };
}
