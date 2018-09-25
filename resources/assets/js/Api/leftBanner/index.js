import category from "../category";
const data=[
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
export default {
    index:(success,error)=>{
        category.getCategory(success,(res)=>{
            error(data)
        });
    }
}