<template>
    <v-stepper-content step="1">
        <v-text-field
            v-model="data.name"
            :rules="[rules.required]"
            label="Name"
            required
        />
        <v-text-field
            v-model="data.email"
            :rules="[rules.required]"
            label="Email"
            required
        />
        <v-text-field
            v-model="data.phone"
            :rules="[rules.required]"
            label="Phone"
            required
        />
        <v-btn
                color="primary"
                @click="next"
           >
            Continue
        </v-btn>
        <v-btn text @click="$router.replace({name:'cart'})">cancel</v-btn>
    </v-stepper-content>

</template>

<script>
    export default {
        name: "TheContactInfo",
        props:{
            data:Object,
            rules:Object,
            next:Function
        }
    }
</script>

<style scoped>

</style>
