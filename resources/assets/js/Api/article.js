import axios from 'axios'

export default {
    getArticle: function (id,success,err){
        axios.get('/article',{params:{id:id}}).then(function(res){
            success(res)
        }).catch(function (error) {
            err(error)
        })
    }
}