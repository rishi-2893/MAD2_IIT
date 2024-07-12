<template>
    <h3 v-for="name in names" :key="name.firstName">
        <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </h3>
</template>

<script>
    export default {
        name: 'NameListComponent',
        data: function(){
            return{
                names:[
                    {
                        firstName: 'Bruce',
                        lastName: 'Wayne'
                    },
                    {
                        firstName: 'Clark',
                        lastName: 'Kent'
                    },
                    {
                        firstName: 'Diana',
                        lastName: 'Prince'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>