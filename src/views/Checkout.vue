<template>
    <v-container>
        <v-row>
            <v-col sm="6" offset-sm="3">
                <v-stepper v-model="step">
                    <v-stepper-header>
                        <v-stepper-step
                                step="1"
                                :complete="step > 1"
                        ></v-stepper-step>
                        <v-divider/>    <!--this is for adding line between-->
                        <v-stepper-step
                                step="2"
                                :complete="step > 2"
                        ></v-stepper-step>
                        <v-divider/>
                        <v-stepper-step step="3"></v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <TheContactInfo
                            :data="data"
                            :rules="rules"
                            :next="next"
                        />
                        <TheShipingInfo
                            :data="data"
                            :rules="rules"
                            :next="next"
                            :previous="previous"
                        />
                        <TheReview
                            :data="data"
                            :submitOrder="submitOrder"
                            :previous="previous"
                        />
                    </v-stepper-items>
                </v-stepper>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import TheContactInfo from "@/components/checkout/TheContactInfo";
    import TheShipingInfo from "@/components/checkout/TheShipingInfo";
    import TheReview from "@/components/checkout/TheReview";
    export default {
        name: "Checkout",
        components:{
            TheContactInfo,
            TheShipingInfo,
            TheReview
        },
        data(){
            return{
                step:1,
                data:{
                    email:'',
                    name:'',
                    phone:'',
                    street:'',
                    city:'',
                    zip:''
                },
                rules:{
                    required: value => !!value || 'Required.',
                    zip: value => value.length === 5 || 'must have 5 characters',
                    phone: value => {
                        const pattern = /\d{10}/
                        return pattern.test(value) || 'invalid phone number'
                    }
                }
            }
        },
        methods:{
            next(){
                this.step += 1;
            },
            previous(){
                this.step -= 1;
            },
            submitOrder(){
                this.$router.push({name:'order_received'})
            }
        }
    }
</script>

<style scoped>

</style>
