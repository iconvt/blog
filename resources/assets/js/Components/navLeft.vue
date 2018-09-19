<template>
    <div class="left-nav">
        <tabar v-bind:datas="datas"></tabar>
    </div>
</template>
<script>
    import tabar from './Left/leftTabar';
    export default {
        components:{
            tabar
        },
        data(){
            return {
                datas: [
                    {
                        title:'首页',
                        icon:'home',
                        icon_color:'black',
                        lists:[
                            {name:'你好'},
                            {name:'你不好'}
                        ]
                    },
                    {
                        title:'搜藏',
                        icon:'code',
                        icon_color:'green',
                        lists:[
                            {name:'简单'},
                            {name:'好难'}
                        ]
                    },
                    {
                        title:'学习',
                        icon:'book',
                        icon_color:'red',
                        lists:[
                            {name:'好学'},
                            {name:'不好学'}
                        ]
                    },
                ]
            }
        }
    }
</script>
<style>
    .left-nav{
        padding: 16px;
    }
</style>