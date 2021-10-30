import { createStore } from 'vuex';

import noteService from '../services/note-service.js';

export default createStore({
    state: {
        notes: []
    },
    mutations: {
        async getAllNotes(state) {
            const notesSnapshot = await noteService.findAll();
            notesSnapshot.forEach((doc) => {
                state.notes.push({
                    id: doc.id,
                    note: doc.data().note,
                });
            });
        }
    },
    getters: {
    },
    actions: {
    }
});
