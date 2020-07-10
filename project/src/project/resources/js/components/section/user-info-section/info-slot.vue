<template>
    <div class="info-slot" :style="style">
        <RecordSlot v-for="(value, key) in list" :key="key" :value="value"/>
        <info-slot-footer/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import RecordSlot from "./record-slot";
    import InfoSlotFooter from "./info-slot-footer";

    export default {
        name: "info-slot",
        components: {InfoSlotFooter, RecordSlot},
        computed: {
            ...mapState({
                picture: `user_picture`,
                setting: 'global_setting',
                owner: "sess_owner",
                global_setting: 'global_setting',
            }),
            style() {
                return {
                    backgroundColor: 'inherit',
                    marginLeft: mU(15),
                    width: mU(100, '%'),
                    height: mU(this.picture.height),
                }
            },
            list() {
                return [
                    [
                        {
                            label: 'name',
                            name: this.owner.name
                        },
                        {
                            label: 'email',
                            name: this.owner.email
                        }],
                    [
                        {
                            label: 'age',
                            name: this.owner.age
                        },
                        {
                            label: 'birth_date',
                            name: this.owner.birth_date
                        }],
                    [
                        {
                            label: 'password',
                            name: this.owner.password
                        },
                        {
                            label: 'created_date',
                            name: this.owner.created_date
                        }],
                    [
                        {
                            label: 'updated_date',
                            name: this.owner.updated_date
                        },
                        {
                            label: null,
                            name: null
                        }
                    ]];
            }
        },
    }
</script>

<style scoped>
    .info-slot {
        display: flex;
        flex-direction: column;
    }

    .test {

    }
</style>
