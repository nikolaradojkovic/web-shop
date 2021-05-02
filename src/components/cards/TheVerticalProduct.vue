<template>
    <v-card outlined :to="{name:'product_details', params:product}">
        <v-img :src="product.prod_img" height="200px">
            <v-img v-if="discount" src="@/assets/on_sale.png" height="80px" width="150px"></v-img>
            <v-row v-if="discount" justify="end">
                    <h1 class="pt-12 pr-5">-{{(100-product.prod_discount*100).toFixed(0)}}%</h1>
            </v-row>
        </v-img>
        <v-card-title>{{product.prod_name}}</v-card-title>
        <h2 class="pl-3"><h5 v-if="discount" class="text--secondary text-decoration-line-through font-weight-light">{{(product.prod_price).toFixed(2)}}</h5><h5 v-else class="text--secondary font-weight-light">price:</h5> {{(product.prod_price*product.prod_discount).toFixed(2)}}</h2>
        <v-card-actions>
            <v-btn @click="addToCart(product)" color="success" outlined>
                <v-icon small left>mdi-plus</v-icon>
                Add to cart
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "TheVerticalProduct",
        props:{
            product: Object
        },
        data(){
            return{
                discount:this.product.prod_discount!==1

            }
        },
        methods:{
            addToCart(product, qty = 1){
                this.$store.commit('addItemToCart', {product, qty});
            }
        }
    }
</script>

<style scoped>

</style>
