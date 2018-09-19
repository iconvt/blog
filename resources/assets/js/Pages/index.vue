<template>
    <el-container>
        <el-aside width="300px" :class="isShowLeft">
            <navLeft></navLeft>
        </el-aside>
        <el-container>
            <el-header>
                <navHeader></navHeader>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import navHeader from '../Components/navHeader';
    import navLeft from '../Components/navLeft';
    import navContent from '../Components/navContent';
    import {event} from '../Module/event.js';
    export default {
        components:{
            navHeader,navLeft,navContent
        },
        data(){
            return {
                showLeft:true,
                first_init:true
            }
        },
        computed:{
            isShowLeft:function () {
                var isShow = this.showLeft
                if (this.first_init==true){
                    this.first_init=false;
                    return '';
                }
                return isShow?'showLeft':'hideLeft';
            }
        },
        created(){
            var _this=this;
            event.on('e_showLeft',function (isShow) {
                _this.showLeft=isShow;
            })
        }
    }
</script>

<style>
    *{margin: 0px;padding: 0px;}
    .el-header{color: #333;text-align: left;padding: 0px;}
    .el-header > div{display: flex;justify-content: start;align-items:center;height: 100%;}
    .el-header > div span{margin-left: 20px;font-size: 26px;}
    .el-aside {color: #333;text-align: left;height: 100%;}
    .el-main {color: #333;text-align: center;padding: 0px;width: 100%;background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),
    url("/images/bg.png") no-repeat;}
    body > .el-container {margin-bottom: 40px;}
    .el-container:nth-child(5) .el-aside,.el-container:nth-child(6) .el-aside {line-height: 260px;}
    .el-container:nth-child(7) .el-aside {line-height: 320px;}
    .showLeft{animation:showleft linear 0.5s;-o-animation:showleft linear 0.5s;-moz-animation:showleft linear 0.5s;-webkit-animation:showleft linear 0.5s;animation-fill-mode: forwards;}
    .hideLeft{animation:hideleft linear 0.5s;-o-animation:hideleft linear 0.5s;-moz-animation:hideleft linear 0.5s;-webkit-animation:hideleft linear 0.5s;animation-fill-mode: forwards;}
    @keyframes hideleft{0%{margin-left: 0px;}100%{margin-left: -300px;}}
    @-o-keyframes hideleft{0%{margin-left: 0px;}100%{margin-left: 300px;}}
    @-moz-keyframes hideleft{0%{margin-left: 0px;}100%{margin-left:300px;}}
    @-webkit-keyframes hideleft{0%{margin-left:0px;}100%{margin-left: 300px;}}
    @keyframes showleft{0%{margin-left: -300px;}100%{margin-left:0px;}}
    @-o-keyframes showleft{0%{margin-left:-300px;}100%{margin-left:0px;}}
    @-moz-keyframes showleft{0%{margin-left:-300px;}100%{margin-left: 0px;}}
    @-webkit-keyframes showleft{0%{margin-left:-300px;}100%{margin-left:0px;}}
</style>