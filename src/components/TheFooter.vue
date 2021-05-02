<template>
    <div>
        <v-sheet
                :height="sheetHeight"
        >
            <v-container class="fill-height" fluid>
                <v-row
                        align="center"
                        justify="space-between"
                >
                    <v-img src="@/assets/hero_img5.jpg" :max-height="sheetHeight" class="align-center justify-center">
                        <v-row
                                align="center"
                                justify="start"
                        >
                            <v-col sm="10" offset-sm="1" lg="2" offset-lg="4">
                                <h2 class="text-center display-2 hidden-xs-only white--text">
                                    Web Shop
                                </h2>
                                <h2 class="text-center display-1 hidden-sm-and-up  white--text">
                                    Web Shop
                                </h2>
                            </v-col>
                            <v-col sm="10" offset-sm="1" lg="2" offset-lg="0">
                                <h2 class="text-center display-0 hidden-xs-only white--text font-weight-light">
                                    Some info<br>
                                    Some info<br>
                                    Some info<br>
                                    Some info<br>
                                </h2>
                                <h4 class="text-center display-0 hidden-sm-and-up  white--text font-weight-light">
                                    Some info<br>
                                    Some info<br>
                                    Some info<br>
                                    Some info<br>
                                </h4>
                            </v-col>

                        </v-row>
                        <v-row justify="center" class="al white--text">
                            &copy; {{new Date().getFullYear() }} - <strong>Web Shop</strong>
                        </v-row>
                    </v-img>
                </v-row>
            </v-container>

        </v-sheet>

    </div>
</template>

<script>
    export default {
        name: "TheFooter",
        computed:{
            /**
             * this is predefined headers sizes
             * @returns {string}
             */
            sheetHeight() {
                switch(this.$vuetify.breakpoint.name){      //determent where we open site (size)
                    case 'xs':return '150px'
                    case 'sm':return '200px'
                    case 'md':return '250px'
                    case 'lg':return '300px'
                    case 'xl':return '350px'

                }
                return '300px';
            }
        }
    }
</script>

<style scoped>

</style>
