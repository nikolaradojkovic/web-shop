<template>
    <div>
        <v-card outlined>
            <v-card-title>Payment details</v-card-title>
            <v-card-text>
                <v-text-field label="name"/>
                <v-text-field label="email"/>
                <p>Sum 199,99</p>
                <v-btn
                    color="primary"
                    @click="goToCheckOut">
                    Checkout
                </v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "TheCheckoutBox",
        methods:{
            goToCheckOut(){
                this.$router.push({name:'checkout'})
            }
        }
    }
</script>

<style scoped>

</style>
