<template>
    <div id="app">
        <v-app>
            <v-row>
                <TheAdminNavBar/>
                <v-main>
                    <v-container class="main-container">
                        <router-view/>
                    </v-container>
                </v-main>
            </v-row>
        </v-app>
    </div>
</template>

<script>
    import TheAdminNavBar from "@/components/admin/TheAdminNavBar";
    export default {
        components:{
            TheAdminNavBar
        },
        name: "Admin"
    }
</script>

<style scoped>

</style>
