<template>
    <div>
        <v-stepper-content step="2">
            <v-text-field
                    v-model="data.street"
                    :rules="[rules.required]"
                    label="Street"
                    required
            />
            <v-text-field
                    v-model="data.zip"
                    :rules="[rules.required]"
                    label="Zip code"
                    required
            />
            <v-text-field
                    v-model="data.city"
                    :rules="[rules.required]"
                    label="City"
                    required
            />
            <v-btn
                    color="primary"
                    @click="next"
            >
                Continue
            </v-btn>
            <v-btn text @click="previous">back</v-btn>
        </v-stepper-content>
    </div>
</template>

<script>
    export default {
        name: "TheShipingInfo",
        props:{
            data:Object,
            rules:Object,
            next:Function,
            previous:Function
        }
    }
</script>

<style scoped>

</style>
