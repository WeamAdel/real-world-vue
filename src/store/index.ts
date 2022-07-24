import { createStore } from 'vuex';

export const store = createStore({
    state: {
        flashMessage: '',
        eventDetails: { data: null, errorMessage: '' },
    },
    mutations: {
        SET_FLASH_MESSAGE(state, message) {
            state.flashMessage = message;
        },
        SET_EVENT_DETAILS(state, details) {
            state.eventDetails = details;
        },
    },
    actions: {
        setFlashMessage(context, payload) {
            context.commit('SET_FLASH_MESSAGE', payload);
        },
        setEventDetails(context, payload) {
            context.commit('SET_EVENT_DETAILS', payload);
        },
    },
    modules: {},
    getters: {},
});
