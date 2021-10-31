<template>
    <div>
        <div class="flex justify-content-end pr-4 pt-4">
            <Button @click="showAddNote" label="Add Note" icon="fas fa-plus" />
        </div>
        <div class="flex flex-column lg:flex-row text-800 p-4">
            <Notes />
        </div>

        <Dialog header="Header" v-model:visible="display" :modal="true" :closeOnEscape="true">
            <form @submit.prevent="addNote">
                <div class="card">
                    <div class="field">
                        <label for="title">Title</label>
                        <InputText v-model="note.title" id="title" type="text" class="w-full" />
                    </div>
                    <div class="field">
                        <label for="note">Note</label>
                        <Textarea v-model="note.note" id="note" rows="8" cols="30" class="w-full" />
                    </div>
                </div>
                <div class="flex justify-content-end">
                    <Button label="Save" type="submit" icon="fas fa-save" />
                </div>
            </form>
        </Dialog>
    </div>
</template>

<script>
import Notes from '../components/Notes.vue';
import noteService from '../services/note-service.js';

export default {
    data() {
        return {
            display: false,
            note: {
                title: '',
                note: ''
            },
        };
    },
    components: {
        Notes
    },
    async created() {
        this.$store.commit('getAllNotes');
    },
    methods: {
        showAddNote() {
            this.note = {
                title: '',
                note: ''
            };
            this.display = true;
        },
        addNote() {
            noteService.addNote(this.note);
            this.display = false;
            this.$store.commit('getAllNotes');
        }
    }
}
</script>

<style scoped>
</style>