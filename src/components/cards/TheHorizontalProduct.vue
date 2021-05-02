<template>
    <v-card
            outlined
            min-width="100%"
            class="mb-1 mt-5 pa-1"
            :to="{name:'product_details', params:product}"
    >
        <div class="d-flex">
            <div>
                <v-img
                    :src="product.prod_img"
                    width="120px"
                    height="120px"
                >
                    <v-img v-if="discount" src="@/assets/on_sale.png" height="80px" width="150px"></v-img>
                    <v-row v-if="discount" justify="end">
                        <h3 class="mr-4 mt-4">-{{(100-product.prod_discount*100).toFixed(0)}}%</h3>
                    </v-row>
                </v-img>
            </div>
            <div class="d-flex flex-column justify-center">
                <v-card-title>{{product.prod_name}}</v-card-title>
                <h5 class="pl-3"><span v-if="discount" class="text--secondary text-decoration-line-through font-weight-light">{{(product.prod_price).toFixed(2)}}</span><span class="text-h5">     {{(product.prod_price*product.prod_discount).toFixed(2)}}</span></h5>
                <!--for cart--><v-btn
                        v-if="cart"
                        @click="removeFromCart(product)"
                        outlined
                        color="error"
                        class="mx-4"

                >
                    <v-icon small left>mdi-minus</v-icon>
                    remove
                </v-btn>

                <v-btn
                        v-else
                        @click="addToCart(product, 1)"
                        color="success"
                        outlined
                        class="mx-4"
                >
                    <v-icon small left>mdi-plus</v-icon>
                    Add to cart
                </v-btn>
            </div>
            <v-card-title v-if="cart" class="pt-0">     <!--for cart-->
                <v-text-field
                        class="mt-auto"
                        v-model.number="product.qty"
                        label="Quantity"
                        outlined
                        dense
                        append-outer-icon="mdi-plus"
                        @click:append-outer="addToCart(product, 1)"
                        prepend-icon="mdi-minus"
                        @click:prepend="addToCart(product, -1)"
                >
                </v-text-field>
            </v-card-title>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "TheHorizontalProduct",
        props:{
            product:Object,
            updateCart:Function,
            btnAction:String,
            i:Number,
            cart:Boolean
        },
        data(){
            return{
                discount:this.product.prod_discount!==1

            }
        },
        methods:{
            addToCart(product, qty){
                this.$store.commit('addItemToCart', {product, qty})
            },
            removeFromCart(product){
                this.$store.commit('removeFromCart', product)
            }
        },
    }
</script>

<style scoped>

</style>
