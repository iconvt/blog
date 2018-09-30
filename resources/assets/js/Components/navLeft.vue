<template>
    <div class="left-nav">
        <tabar
                v-bind:datas="datas"
                @childclick="articlelist"
                @parentclick="changeitem" >
            <el-input @keyup.enter.native="postSearch"
                    placeholder="请输入内容"
                    v-model="search"
                    clearable>
            </el-input>
        </tabar>
    </div>
</template>
<script>
    import tabar from './Left/leftTabar';
    import { mapGetters, mapState } from 'vuex'
    export default {
        components:{
            tabar
        },
        data(){
            return {
                // datas: [
                //     {
                //         title:'首页',
                //         icon:'home',
                //         icon_color:'black',
                //         lists:[
                //             {name:'你好'},
                //             {name:'你不好'}
                //         ]
                //     },
                //     {
                //         title:'搜藏',
                //         icon:'code',
                //         icon_color:'green',
                //         lists:[
                //             {name:'简单'},
                //             {name:'好难'}
                //         ]
                //     },
                //     {
                //         title:'学习',
                //         icon:'book',
                //         icon_color:'red',
                //         lists:[
                //             {name:'好学'},
                //             {name:'不好学'}
                //         ]
                //     },
                // ],
                search:''
            }
        },
        methods:{
            inits(){
                this.$store.dispatch('leftbanner/getCateList')
            },
            postSearch(){
                let _this=this
                this.$store.dispatch({type:'article/search',keyword:this.search}).then(function(res){
                    _this.$router.push('/articleList');
                    console.log(_this,'tiaozhuangchenggong')
                })
            },
            changeitem:function(e){
                this.$store.commit({type:'leftbanner/setShowItem',id:e.target.getAttribute('data-id')});
            },
            articlelist:function(e){
                let id = e.target.getAttribute('data-id');
                let _this=this
                this.$store.dispatch({type:'article/getAricleList',id:id}).then(function(){
                    _this.$router.push('/articleList');
                })
            }
        },
        created(){
            this.inits();
        },
        computed:{
            ...mapState({
                datas: state => state.leftbanner.catelist
            })
        }
    }
</script>
<style>
    /*.left-nav{*/
        /*!*padding: 16px;*!*/
    /*}*/
    .el-input{
        padding: 0 16px;
        box-sizing: border-box;
        margin: 20px 0;
    }
    .el-input__suffix{right: 20px;}
</style>