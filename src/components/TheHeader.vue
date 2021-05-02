<template>
    <div>
        <v-sheet
            :height="sheetHeight"
        >
            <v-container class="fill-height" fluid>
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-img src="@/assets/hero_img1.jpg" :max-height="sheetHeight" class="align-center justify-center">
                        <v-row
                                align="center"
                                justify="center"
                        >
                            <h1 class="text-center display-3 hidden-xs-only white--text">
                                Welcome to Web Shop
                            </h1>
                            <h1 class="text-center display-1 hidden-sm-and-up  white--text">
                                Welcome to Web Shop
                            </h1>
                        </v-row>
                    </v-img>
                </v-row>
            </v-container>

        </v-sheet>
    </div>
</template>

<script>
    export default {
        name: "TheHeader",
        computed:{
            /**
             * this is predefined headers sizes
             * @returns {string}
             */
            sheetHeight() {
                switch(this.$vuetify.breakpoint.name){      //determent where we open site (size)
                    case 'xs':return '250px'
                    case 'sm':return '350px'
                    case 'md':return '400px'
                    case 'lg':return '450px'
                    case 'xl':return '500px'

                }
                return '300px';
            }
        }
    }
</script>

<style scoped>

</style>
