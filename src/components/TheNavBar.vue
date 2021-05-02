<template>
    <div>
        <v-app-bar
                app
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-img
                    alt="Vuetify Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    src="@/assets/logo.png"
                    width="100"
            />

            <v-spacer></v-spacer>

            <!--Start of large screen-->
            <v-toolbar-items class="hidden-xs-only">
                <v-btn to="/" text class="mx-1">
                    <v-icon small left>mdi-home</v-icon>
                    Home
                </v-btn>
                <v-btn to="store" text class="mx-1">
                    <v-icon small left>mdi-basket</v-icon>
                    Shopping
                </v-btn>
                <v-btn to="sale" text class="mx-1">
                    <v-icon small left>mdi-run-fast</v-icon>
                    Sale
                </v-btn>
                <v-btn to="cart" text class="mx-1">
                    <v-icon small left>mdi-cart</v-icon>
                    Cart
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <!--End of large screen-->

            <!--Start of small screen-->
            <span class="hidden-sm-and-up hidden-md-and-up">
                <v-btn text @click.stop="drawer=!drawer">
                    menu
                </v-btn>
            </span>
            <!--End of small screen-->




            <v-btn icon>
                <v-icon @click="changeTheme">mdi-compare</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-login</v-icon>
            </v-btn>
            <v-menu
                    left
                    bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                            v-for="n in 5"
                            :key="n"
                            @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            right
        >
            <v-list>
                <v-list-item v-for="item in items"
                             :to="item.link"
                             :key="item.title"
                             color="black"
                >
                    <v-list-item-content>
                        <v-icon small left>mdi-{{item.icon}}</v-icon>
                    </v-list-item-content>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{item.title}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "TheNavBar",
        data: () => ({
            drawer: false,
            items:[
                    {title:'Home', link:'/', icon:'home'},
                    {title:'Store', link:'store', icon:'basket'},
                    {title:'Sale', link:'sale', icon:'run-fast'},
                    {title:'Card', link:'cart', icon:'cart'},
                ]
        }),
        methods:{
            changeTheme(){
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            },
        }
    }
</script>

<style scoped>

</style>
