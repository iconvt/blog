
import left from '../../Api/leftBanner/index'

const state = {
    articlelist: [],    //左侧边栏用的 一二级分类
    articleShowList:[], //内容用的文章列表
    article:{}
}

// getters
const getters = {

}

// actions
const actions = {
    search({commit,state},{keyword}){
        left.getArticleList({keyword},(res)=>{
            commit('setArticleList',res)
        },(error)=>{
            commit('setArticleList',{data:error})
        })
    },
    getAricleList({commit,state},{id}){
        left.getArticleList({id},(res)=>{
            commit('setArticleShowList',res)
        },(error)=>{
            commit('setArticleShowList',{data:error})
        })
    },
    article({commit,state},{id}){
        left.getArticle(id,(res)=>{
            commit('setArticle',res)
        },(error)=>{
            commit('setArticle',error)
        })
    }
}

// mutations
const mutations = {
    setArticleList(state,{id}){
        state.showCateitem=id;
    },
    setArticle(state,{data}){
        if (Array.isArray(data)){
            state.article=data;
        }else{
            console.log(data);
        }
    },
    setArticleShowList(state,{data}){
        if (Array.isArray(data)){
            state.articleShowList=data;
        }else{
            console.log(data);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}