<template>
    <a class="login-box-link"
       @click="onClick"
       @mouseover="hover = true"
       @mouseleave="hover = false">
        <Ctxt :value="name" :font="font_korean" :is_bold="true" :color="color"/>
    </a>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import {mapState} from "vuex";
    export default {
        name: "login-box-link",
        components: {Ctxt},
        computed:{
            ...mapState({
                grey: 'color_grey',
                black: 'color_black',
                prime: 'color_prime',
                font_korean: 'font_korean',
                global_setting: "global_setting",
            }),
            color() {
                return this.hover
                    ? this.grey
                    : this.prime;
            },
        },
        props:{
            name:{

            },
            click_event:{
                default(){
                    return ()=>{
                        console.log("default");
                    }
                }
            },
            click_event_param:{
                default(){
                    return []
                }
            },
        },
        methods:{
            onClick(){
                this.click_event(...this.click_event_param);
            },

        },
        data(){
            return{
                hover: false,
            };
        }
    }
</script>

<style scoped>
.login-box-link{
    margin: auto;
    cursor: pointer;
}
</style>
