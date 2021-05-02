<template>
    <div>
        <v-container>
            <v-row>
                <v-col sm="3" offset-lg="1">
                    <TheSidebar/>
                </v-col>
                <v-col md="9" lg="7">
                    <ProductDisplay/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import ProductDisplay from "@/components/store/ProductDisplay";
    import TheSidebar from "@/components/store/TheSidebar";
    export default {
        name: "Store",
        components:{
            ProductDisplay,
            TheSidebar
        },
        mounted(){
            this.$store.commit('setGroup', {idx:-1})
        },
    }
</script>

<style scoped>

</style>
