<template>
    <div>
        <v-row
            v-for="product in $store.state.cart"
            :key="product.prod_name"
        >
            <TheHorizontalProduct
                :product="product"
                btnAction="remove"
                :cart="true"
            />
        </v-row>
    </div>
</template>

<script>
    import TheHorizontalProduct from "@/components/cards/TheHorizontalProduct";
    export default {
        name: "TheProductList",
        components:{
            TheHorizontalProduct
        }
    }
</script>

<style scoped>

</style>
