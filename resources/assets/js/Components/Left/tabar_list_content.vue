<template>
    <div>
        <!--<span v-for="list in lists" :data-id="list.id" :key="list.id" class="list-item" @click.stop="getArticleList" v-on="diyevent">{{list.name}}</span>-->
        <span v-for="list in lists" :data-id="list.id" :key="list.id" class="list-item" v-on="diyevent" :data-child="type">{{list.name}}</span>
    </div>
</template>

<script>
    import {each} from "lodash";
    export default {
        data(){
            return {
                type:'child'
            }
        },
        props:{
            lists:{
                type:Array,
                default:function () {
                    return [];
                },
                validator:function (lists) {
                    var flag=true;
                    each(lists,function (item) {
                        if (!item.hasOwnProperty('name')){
                            flag = false;
                        }
                    })
                    return flag;
                }
            }
        },
        methods:{
            // getArticleList(e){
            //     let id = e.target.getAttribute('data-id');
            //     this.$store.dispatch({type:'article/getAricleList',id:id})
            // }
        },
        computed:{
            diyevent:function(){
                return this.$listeners;
            }
        }
    }
</script>
<style>
    .list-item{
        width: 100%;
        height: 48px;
        padding: 0 16px 0 72px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: inline-block;
        box-sizing: border-box;
        line-height: 48px;
    }
    .list-item:hover{
        background-color: #F2f2f2;
        cursor: pointer;
    }
</style>