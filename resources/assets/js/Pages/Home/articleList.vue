<template>
    <el-table :data="tableData" width="860" @click.native="navToArticle">
        <el-table-column
                prop="address"
                width="450">
        </el-table-column>
        <el-table-column
                prop="name"
                width="300">
        </el-table-column>
        <el-table-column
                prop="date"
                width="110">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods:{
            navToArticle(){
                alert(1)
            }
        }
    }
</script>
<style>
    .el-table td, .el-table th.is-leaf,.el-table th, .el-table tr,.el-table{background-color: transparent;}
    .el-table{width: 860px;margin: 0 auto;}
    .el-table--scrollable-x .el-table__body-wrapper{overflow-x: hidden;}

</style>