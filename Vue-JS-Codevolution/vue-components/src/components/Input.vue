<template>
    <input type="text" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue">
</template>

<script>
    export default {
        name: 'InputComponent',
        props: {
            modelValue: String,
        },
        emits: ['update:modelValue']
    }
</script>

<style scoped>

</style>