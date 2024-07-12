<template>
    <div>
        <h3>Popup</h3>
        <button @click="$emit('closePopup')">Close Popup</button>
    </div>
</template>

<script>
    export default {
        name: 'PopupComponent',
        emits: ['closePopup']
    }
</script>

<style scoped>

</style>