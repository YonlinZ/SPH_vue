import { reqGetSearchInfo } from "@/api";
const state = { 
    searchList:{}
};
const mutations = {
    GETSEARCHINFO(state, searchList){
        state.searchList=searchList;
    }
};
const actions = {
    async getSearchInfo({commit}, params={}){
        let r = await reqGetSearchInfo(params);
        if(r.code == 200){
            commit('GETSEARCHINFO', r.data);
        }
    }
};
// 计算属性，方便访问state
const getters = {
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};