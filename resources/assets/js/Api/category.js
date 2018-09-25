import axios from 'axios'

export default {
    getCategory:(success,error)=>{
        axios.get('/getCategory').then(function(res){
            success(res);
        }).catch(function(err){
            error(err);
        })
    }
}
