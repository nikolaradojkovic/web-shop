<template>
    <v-container>
        <v-row>
            <v-col sm="8" md="5" offset-md="2" lg="4" offset-lg="3">
                <TheProductList/>
            </v-col>
            <v-col sm="4" md="3" order="first" order-sm="last"> <!--order is using to set payment detail to the top-->
                <TheCheckoutBox/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import TheProductList from "@/components/cart/TheProductList";
    import TheCheckoutBox from "@/components/cart/TheCheckoutBox";
    export default {
        name: "Cart",
        components:{
            TheProductList,
            TheCheckoutBox
        },
        mounted() {
            this.goToCart()         // use to handle if cart is empty
        },
        methods:{
            goToCart(){
                if(this.$store.state.cart.length === 0) {
                    this.$router.push({name: 'Store'})
                    this.$store.commit('setSnackBar', {variant: 2, message: 'Your cart is empty'});
                }
            }
        }
    }
</script>

<style scoped>

</style>
