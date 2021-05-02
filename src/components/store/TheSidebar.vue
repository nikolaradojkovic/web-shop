<template>
    <div>
        <v-sheet
                v-if="$vuetify.breakpoint.smAndUp"
                :elevation="4"
                class="pa-5"
        >
            <h3>Groups</h3>
            <v-radio-group :mandatory="true">
                <v-radio
                        label="All groups"
                        :value="-1"
                        @click="setGroup(-1)"
                ></v-radio>
                <v-radio
                        v-for="(group, i) in $store.state.groups"
                        :key="group._id"
                        :label="group.grp_name"
                        :value="i"
                        @click="setGroup(i)"
                >
                </v-radio>
            </v-radio-group>
            <v-radio-group :mandatory="true" class="pl-4">
                <v-radio
                        label="All sub groups"
                        :value="-1"
                        @click="setSubGroup(-1)"
                ></v-radio>
                <v-radio
                        v-for="(sub, i) in $store.state.subGroups"
                        :key="sub._id"
                        :label="sub.sub_name"
                        :value="i"
                        @click="setSubGroup(i)"
                >
                </v-radio>
            </v-radio-group>
        </v-sheet>
        <v-expansion-panels
                v-else>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    Groups
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-radio-group :mandatory="true">
                        <v-radio
                                label="All"
                                :value="-1"
                                @click="setGroup(-1)"
                        ></v-radio>
                        <v-radio
                                v-for="(group, i) in $store.state.groups"
                                :key="group._id"
                                :label="group.grp_name"
                                :value="i"
                                @click="setGroup(i)"
                        >
                        </v-radio>
                    </v-radio-group>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    Subgroups
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-radio-group :mandatory="true" class="pl-3">
                        <v-radio
                                label="All sub groups"
                                :value="-1"
                                @click="setSubGroup(-1)"
                        ></v-radio>
                        <v-radio
                                v-for="(sub, i) in $store.state.subGroups"
                                :key="sub._id"
                                :label="sub.sub_name"
                                :value="i"
                                @click="setSubGroup(i)"
                        >
                        </v-radio>
                    </v-radio-group>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
    export default {
        name: "TheSidebar",
        data(){
            return{
                groupFilter:-1,
                subGroupFilter:-1,
                checkbox:true
            }
        },
        computed:{
        },
        methods: {
            setGroup(idx) {
                this.$store.commit('setGroup', {idx})
            },
            setSubGroup(idx){
                this.$store.commit('setSubGroup', {idx})
            }
        }

    }
</script>

<style scoped>

</style>
