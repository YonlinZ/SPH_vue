import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";
const state = {
    categoryList: [],
    // 轮播图数据
    bannerList: [],
    // floor数据
    floorList:[],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};
const actions = {
    async categoryList({ commit }) {
        const result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    async getBannerList({ commit }) {
        let r = await reqGetBannerList();
        if (r.code == 200) {
            commit("GETBANNERLIST", r.data);
        }
    },
    async getFloorList({ commit }) {
        let r = await reqFloorList();
        if (r.code == 200) {
            commit('GETFLOORLIST', r.data);
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
};