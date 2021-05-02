<template>
    <v-container>
            <v-col lg="7" md="10" sm="7" offset-md="2" offset-xl="3" offset-sm="2">
                    <v-row>
                        <v-card>
                            <v-card-title class="text-h4">{{product.prod_name}}</v-card-title>
                            <v-row class="pa-2">
                                <v-col cols="4">
                                    <v-img :src="product.prod_img">
                                        <v-img v-if="discount" src="@/assets/on_sale.png" height="80px" width="150px"></v-img>
                                    </v-img>
                                </v-col>
                                <v-col cols="6" style="display: flex; justify-content: space-between; flex-direction: column">
                                    <v-row>
                                        <v-card-subtitle>{{product.prod_desc}}</v-card-subtitle>
                                    </v-row>
                                    <v-row>
                                        <h2 class="pl-3">
                                            <h5 v-if="discount" class="text--secondary text-decoration-line-through font-weight-light">{{(product.prod_price).toFixed(2)}}</h5>
                                            <h2 v-if="discount" class="pr-5">-{{(100-product.prod_discount*100).toFixed(0)}}%</h2>
                                            <h5 v-else class="text--secondary font-weight-light">price:</h5>
                                            {{(product.prod_price*product.prod_discount).toFixed(2)}}
                                        </h2>
                                    </v-row>
                                    <v-row justify="center">
                                        <v-card-actions>
                                            <v-btn @click="addToCart(product)" color="success" outlined>
                                                <v-icon small left>mdi-plus</v-icon>
                                                Add to cart
                                            </v-btn>
                                        </v-card-actions>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-row>
            </v-col>
    </v-container>
</template>

<script>
    export default {
        name: "ProductDetails",
        data(){
            return{
                product: this.$route.params,
                discount:this.$route.params.prod_discount!==1
            }
        },
        methods:{
            addToCart(product, qty = 1){
                this.$store.commit('addItemToCart', {product, qty});
            }
        },
        mounted(){
                console.log(this.product);
        }
    }
</script>

<style scoped>

</style>
