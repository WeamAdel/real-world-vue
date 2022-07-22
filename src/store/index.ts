import { reactive } from 'vue';

/**
 * Reactive global storage
 */
export const GLOBAL_STORE = reactive({
    flashMessage: '',
    event: { data: null, errorMessage: '' },
});
