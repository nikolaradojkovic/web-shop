<template>
    <v-navigation-drawer app
            v-model="drawer"
            :mini-variant="mini"
            permanent
    >
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <v-img @click.stop="mini = !mini" src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>John Leider</v-list-item-title>

            <v-btn
                    icon
                    @click.stop="mini = !mini"
            >
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "TheAdminNavBar",
        data(){
            return{
                value:'home',
                drawer: true,
                items: [
                    { title: 'Home', icon: 'mdi-home-city-outline' },
                    { title: 'Orders', icon: 'mdi-order-bool-ascending' },
                    { title: 'New order', icon: 'mdi-plus-circle'},
                    { title: 'New product', icon: 'mdi-plus-box-outline' },
                    { title: 'Products', icon: 'mdi-view-list' },
                    { title: 'Change products', icon: 'mdi-pencil-outline' },
                ],
                mini: false
            }
        },
    }
</script>

<style scoped>

</style>
