// api 进行统一管理
import requests from "./ajax";
import mockRequests from './mockAjax'
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });


// #region mock数据
// 获取banner（Home首页轮播图mock接口）
export const reqGetBannerList = () => mockRequests.get('/banner');

// 获取floor数据
export const reqFloorList = () => mockRequests.get('floor');
// #endregion


// 获取搜索模块数据
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: 'post', data: params });

// 获取产品详情信息 GET /api/item/{skuId}
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });

// 将产品添加到购物车中
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url:`/cart/addToCart/${skuId}/${skuNum}`,
    method:'post'
});
