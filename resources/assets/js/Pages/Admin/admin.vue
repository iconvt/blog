<template>
    <el-container>
        <el-aside width="300px">
            <!--<navLeft></navLeft>-->
        </el-aside>
        <el-container>
            <el-header>
                <!--<navHeader></navHeader>-->
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    export default {
    }
</script>
<style>
    *{
        padding: 0;
        margin: 0;
        outline-style: none;
    }
</style>