<template>
    <div>404</div>

</template>

<script>
    //  import LeftNav from '../module/LeftNav.vue'
    //  import AdminView from '../module/AdminView.vue'
    export default {
        name: 'App',
        components:{
//    LeftNav : LeftNav,
//    AdminView : AdminView
        },
        data(){
            return {
                // showAdmin:true,
                // show : true
            }
        },
        methods:{
            // allshow(){
            //   console.log("嗯哼");
            //   this.showAdmin = !this.showAdmin;
            //   this.show = !this.show;
            // }
        }
    }
</script>

<style >
    /*@import "assets/css/animate.css";*/
    *{
        padding: 0;
        margin: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .el-header, .el-footer {
        /*background-color: #B3C0D1;*/
        outline: 1px solid #f5f5f5;
        color: #333;
        text-align: center;
        /*line-height: 60px;*/
    }

    .el-aside {
        /*background-color: #D3DCE6;*/
        outline: 1px solid #f5f5f5;
        color: #333;
        text-align: center;
        /*line-height: 200px;*/
    }

    .el-main {
        /*background-color: #E9EEF3;*/
        outline: 1px solid #f5f5f5;
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        /*line-height: 260px;*/
    }

    .el-container:nth-child(7) .el-aside {
        /*line-height: 320px;*/
    }

    .el-table th{
        text-align: center;
        background: rgba(213, 226, 253, 0.46);
    }
    .el-main{
        line-height: 40px;
    }
    .el-table{
        border-radius: 10px;
    }
    .el-table .cell img{
        max-width: 120px;
        /*border-radius: 60px;*/
    }

    /*==============冯小龙====================*/
    p{
        margin-bottom: 0;
    }
    /*==================================*/
    /*=================佳文专属============*/
    .s80 .el-input__inner{
        height: 28px;

    }
    .el-carousel__indicators{
        display: none;
    }
    /*==================================*/


    .el-dialog__body{
        text-align: center;
    }

    .el-dialog--center .el-dialog__body{
        text-align: center;
    }
    .el-input--mini .el-input__inner{
        height: 34px;
    }
    .el-form-item--mini .el-form-item__content, .el-form-item--mini .el-form-item__label{
        line-height: 34px;
    }
    .el-input--mini .el-input__inner{
        line-height: 34px;
    }
    .s80 .el-input__inner{
        line-height: 34px;
    }
    .el-button--primary.is-plain{
        padding: 10px 20px;
    }
    .el-button--danger.is-plain{
        padding: 10px 20px;
    }
    .el-button--success.is-plain{
        padding: 10px 20px;
    }
    .el-button--info.is-active, .el-button--info:active{
        background-color: transparent;
    }
    .el-button--info:focus, .el-button--info:hover{
        background-color: #409EFF;
    }

</style>
