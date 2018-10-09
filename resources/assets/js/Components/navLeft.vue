<!--tabar 组件有2个自定义组件 childclick parentclick 点击事件-->
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
            this.inits();       //初始化数据
        },
        computed:{
            ...mapState({
                datas: state => state.leftbanner.catelist
            })
        }
    }
</script>
<style>
    .el-input{
        padding: 0 16px;
        box-sizing: border-box;
        margin: 20px 0;
    }
    .el-input__suffix{right: 20px;}
</style>