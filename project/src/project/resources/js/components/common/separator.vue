<template>
    <div class="separator" :style="style">

    </div>
</template>

<script>
    import {mU, calcAOB} from '../../utils/unit'

    export default {
        name: "separator",
        props: {
            color: {
                default: 'black'
            },
            height: {
                default: 1
            },
            margin: {
                default: 10
            }
        },
        computed: {
            style() {
                return {
                    backgroundColor: this.color,
                    width: calcAOB('100%', '-', this.margin * 2),
                    height: mU(this.height),
                    marginLeft: mU(this.margin),
                    marginRight: mU(this.margin),
                }
            }
        }
    }
</script>

<style scoped>

</style>
