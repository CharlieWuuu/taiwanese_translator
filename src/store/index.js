import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        message: 'Hello Pinia',
    }),
    actions: {
        setMessage(newMessage) {
            this.message = newMessage;
        },
    },
});
