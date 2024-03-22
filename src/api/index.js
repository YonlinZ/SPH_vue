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