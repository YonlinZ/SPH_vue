import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";

const state = {
    goodInfo: {}
};
const mutations = {
    GETGOODSINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
};
const actions = {
    // 获取产品信息
    async getGoodsInfo({ commit }, skuId) {
        let r = await reqGoodsInfo(skuId);
        if (r.code == 200) {
            commit('GETGOODSINFO', r.data);
        }
    },
    // 将产品添加到购物车中
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let r = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (r.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error('faile'))
        }
    }

};
const getters = {
    // 路径导航
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    // 产品信息
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    // 产品售卖属性
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}