import axios from 'axios'

export default {
    getArticleList : function ({keyword,id},success,err){
        axios.get('/articlelist',{params:{keyword:keyword,id:id}}).then(function(res){
            success(res)
        }).catch(function (error) {
            err(error)
        })
    }
}