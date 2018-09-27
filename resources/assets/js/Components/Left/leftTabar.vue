<template>
    <div>
        <slot></slot>
        <tabarList v-for="(data,index) in datas" :key="index"
                   v-bind:title="data.name"
                   v-bind:lists="data.lists"
                   v-bind:icon="data.icon"
                   v-bind:icon_color="data.icon_color"
                   v-bind:k="index" @childclick.stop="bbb">
        </tabarList>
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
                        if (!item.hasOwnProperty('name')){
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
            // this.$on('childclick',function(){
            //     alert(111);
            // })
        },
        computed:{

        },
        methods:{
            bbb:function(e){
                console.log(e.target)
            }
        }
    }
</script>