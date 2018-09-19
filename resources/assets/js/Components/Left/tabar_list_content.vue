<template>
    <div>
        <span v-for="list in lists" class="list-item">{{list.name}}</span>
    </div>
</template>

<script>
    import {each} from "lodash";
    export default {
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
        }
    }
</script>
<style>
    .list-item{
        width: 100%;
        height: 48px;
        padding-left: 56px;
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