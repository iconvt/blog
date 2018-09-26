import category from "../category";
import articlelist from "../articlelist";
import article from "../article";
const data=[
    {
        name:'首页',
        icon:'home',
        icon_color:'black',
        id:3,
        lists:[
            {name:'你好',id:10},
            {name:'你不好',id:11}
        ]
    },
    {
        name:'搜藏',
        icon:'code',
        icon_color:'green',
        id:3,
        lists:[
            {name:'简单',id:12},
            {name:'好难',id:13}
        ]
    },
    {
        name:'学习',
        icon:'book',
        icon_color:'red',
        id:3,
        lists:[
            {name:'好学',id:14},
            {name:'不好学',id:15}
        ]
    },
]
export default {
    index:(success,error)=>{
        category.getCategory(success,(res)=>{
            error(data)
        });
    },
    getArticleList:({keyword,id},sucess,error)=>{
        articlelist.getArticleList({keyword,id},sucess,error);
    },
    getArticle:(id,sucess,error)=>{
        article.getArticle(id,sucess,error);
    }
}