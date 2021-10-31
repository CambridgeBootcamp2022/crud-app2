import { createStore } from 'vuex';

import noteService from '../services/note-service.js';

export default createStore({
    state: {
        notes: []
    },
    mutations: {
        async getAllNotes(state) {
            state.notes = [];
            const notesSnapshot = await noteService.findAll();
            notesSnapshot.forEach((doc) => {
                const data = doc.data();
                console.log(data);
                state.notes.push({
                    id: doc.id,
                    title: data.title,
                    note: data.note,
                });
            });
        }
    },
    getters: {
    },
    actions: {
    }
});
