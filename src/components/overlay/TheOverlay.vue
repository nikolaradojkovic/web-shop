<template>
    <div class="text-center">
        <v-overlay :value="$store.state.overlay.state" class="flex-column">
            <p>{{$store.state.overlay.message}}</p>
            <v-progress-circular indeterminate size="64" />
        </v-overlay>
    </div>
</template>

<script>
    export default {
        name: "TheOverlay",
        params:{
            message:String
        }
    }
</script>

<style scoped>

</style>
