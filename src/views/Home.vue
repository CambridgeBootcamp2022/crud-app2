<template>
    <div class="flex flex-column lg:flex-row text-800 p-4">
        <div
            v-for="note in $store.state.notes" :key="note.id" 
            class="w-30rem surface-0 p-4 shadow-2 border-round m-2">
            <div class="text-3xl font-medium text-900 mb-3">{{ note.title }}</div>
            <div style="height: 150px" 
                class=" p-2 border-2 border-solid border-300">
            {{ note.note }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    async mounted() {
        this.$store.commit('getAllNotes');
    }
}
</script>

<style scoped>
</style>