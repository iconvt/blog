<template>
    <div>
        <slot></slot>
        <tabarList v-for="data in datas"
                   v-bind:title="data.title"
                   v-bind:lists="data.lists"
                   v-bind:icon="data.icon"
                   v-bind:icon_color="data.icon_color">
        </tabarList>
        <slot></slot>
    </div>
</template>
<script>
    import {each} from "lodash";
    import tabarList from './tabar_list'
    export default {
        components:{
            tabarList
        },
        props:{
            datas:{
                type:Array,
                default:function () {
                    return []
                },
                validator:function (datas) {
                    var flag=true;
                    each(datas,function (item) {
                        if (!item.hasOwnProperty('title')){
                            flag = false;
                        }
                    })
                    return flag;
                }
            }
        },
        data(){
            return {}
        },
        mounted(){
        }
    }
</script>