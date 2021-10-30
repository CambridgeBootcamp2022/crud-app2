<template>
    <div class="text-800">
        <div class="font-medium">Home Page</div>
        <div v-for="note in $store.state.notes" :key="note.id">{{ note.note }}</div>
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