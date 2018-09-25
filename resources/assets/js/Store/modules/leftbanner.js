
import left from '../../Api/leftBanner/index'

const state = {
    catelist: [],
    showCateitem:0
}

// getters
const getters = {
    // cartProducts: (state, getters, rootState) => {
    //     return state.items.map(({ id, quantity }) => {
    //         const product = rootState.products.all.find(product => product.id === id)
    //         return {
    //             title: product.title,
    //             price: product.price,
    //             quantity
    //         }
    //     })
    // }
}

// actions
const actions = {
    getCateList ({ commit, state }) {
        const savedCartItems = [...state.catelist]
        left.index((res)=>{
            commit('setCateList',res)
        },(error)=>{
            console.log(error);
            commit('setCateList',{data:error})
        })
    }
}

// mutations
const mutations = {
    setShowItem(state,{id}){
        state.showCateitem=id;
    },
    setCateList(state,{data}){
        console.log(data);
        if (Array.isArray(data)){
            state.catelist=data;
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