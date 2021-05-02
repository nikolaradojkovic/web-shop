<template>
    <div>

        <v-row dense>
            <h1 class="my-auto ml-3">Products</h1>
            <v-spacer/>
            <v-col sm="6" lg="2">
                <v-select
                        v-model="select"
                        :items="items"
                        hint="sort by"
                        item-text="state"
                        item-value="abbr"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line
                        @change="filterProducts"
                ></v-select>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col sm="6" md="4"
                   v-for="product in $store.state.filteredProducts"
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
        name: "ProductDisplay",
        components:{
            TheVerticalProduct,
            TheHorizontalProduct
        },
        data(){
            return{
                items:['Name asc', 'Name desc', 'Price asc', 'Price desc'],
                select: {}
            }
        },
        methods:{
            filterProducts(){
                this.$store.commit('sortProducts', this.select);
            }
        }

    }
</script>

<style scoped>

</style>
