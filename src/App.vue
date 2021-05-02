<template>
    <v-app>
        <TheOverlay/>
        <TheNavBar/>

        <v-main>
            <router-view/>
        </v-main>
        <v-snackbar
            v-model="$store.state.snackbar.show"
            :multi-line="true"
            :right="true"
            :top="true"
            :timeout="2500"
            :color="$store.state.snackbar.variant"
            >
            {{$store.state.snackbar.message}}
        </v-snackbar>
    </v-app>
</template>

<script>
    import TheNavBar from "@/components/TheNavBar";
    import store from "@/store/store";
    import TheOverlay from "@/components/overlay/TheOverlay";
    import  {mapState} from 'vuex'

    export default {
        store,
        name: 'App',
        components: {
            TheNavBar,
            TheOverlay
        },
        data: () => ({
            //
        }),
        computed:{
            ...mapState('store',['products'])
        },
        created(){
            this.$store.dispatch('getAllProducts'),
            this.$store.dispatch('getAllGroups')
        }
    };
</script>
