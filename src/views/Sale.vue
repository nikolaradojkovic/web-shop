<template>
    <div align="center" class="ma-4">
        <h1 class="ma-auto">Products on sale</h1>
        <v-row dense align="center" justify="center" class="ma-3">
            <v-col sm="6" md="2"
                   v-for="product in $store.state.productsOnSale"
                   :key = "product.prod_name"
            >
                <TheHorizontalProduct v-if="$vuetify.breakpoint.smAndDown" :product="product" :cart="false"/>
                <TheVerticalProduct v-else :product="product"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import TheVerticalProduct from "@/components/cards/TheVerticalProduct";
    import TheHorizontalProduct from "@/components/cards/TheHorizontalProduct";

    export default {
        name: "Sale",
        components:{
            TheVerticalProduct,
            TheHorizontalProduct
        }
    }
</script>

<style scoped>

</style>
