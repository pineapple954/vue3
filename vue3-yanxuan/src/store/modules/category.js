import {getCategoryList} from '@/api/index'
import  {topCategory} from '@/utils/constants'

export default {
    namespaced: true,
    state:() => {
        return {
            //防止网络延迟
            cateList:topCategory,
        }
    },
    mutations: {
        setList(state, payload) {
            state.cateList = payload
        }
    },
    actions: {
       //请求后台
      async getAllCategory({commit}){
        try {
            const res = await getCategoryList();
            console.log(res);
            console.log(res.data.cateList);
            if(res.code === '200'){
                commit('setList',res.data.cateList)
            }
        }
        catch (err) {
            console.log(err);
        }
        

    },
 
}
}