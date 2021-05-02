<template>
    <v-container mb-12>
        <v-row>
            <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
                <h3 class="display-0 hidden-sm-and-up">{{title}}<v-btn :to="to" color="primary" small left text>View all</v-btn></h3>
                <h3 class="display-1 hidden-xs-only">{{title}}<v-btn :to="to" color="primary" small left text>View all</v-btn></h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
                <v-row>
                    <v-col
                            sm="6"
                            md="4"
                            v-for="product in products"
                            :key="product.prod_name"

                    >
                        <TheHorizontalProduct v-if="$vuetify.breakpoint.smAndDown" :product="product" :cart="false"/>
                        <TheVerticalProduct v-else :product="product"/>

                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import TheVerticalProduct from "@/components/cards/TheVerticalProduct";
    import TheHorizontalProduct from "@/components/cards/TheHorizontalProduct";
    export default {
        name: "ThePopularProducts",
        components:{
          TheVerticalProduct,
            TheHorizontalProduct
        },
        props:{
            products:Array,
            title:String,
            to:String
        },
        data: () => ({

        }),
    }
</script>

<style scoped>

</style>
