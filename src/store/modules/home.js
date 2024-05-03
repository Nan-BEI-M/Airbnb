import { fetchHomeDiscountData, fetchHomeGoodPriceData, fetchHomeHighScoreData, fetchHomeLongforData, fetchHomeRecommendData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// redux发送异步网络请求
// createAsyncThunk接受两个参数一个是名字，一个回调函数，
// 回调函数可以接受两个参数 一个传递的值，一个store，将其解构出dispatch用于派发action
export const fetchHomeDataAction = createAsyncThunk(
    "fatchHomeData",
    (payload, { dispatch }) => {
        fetchHomeGoodPriceData().then(res => {
            dispatch(changeGoodPriceInfoAction(res))
        })
        fetchHomeHighScoreData().then(res => {
            dispatch(changeHighScoreInfoAction(res))
        })
        fetchHomeDiscountData().then(res => {
            dispatch(changeDiscountInfoAction(res))
        })
        fetchHomeRecommendData().then(res => {
            dispatch(changeRecommendInfoAction(res))
        })
        fetchHomeLongforData().then(res => {
            dispatch(changeLongforInfoAction(res))
        })
    })
const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: [],
        highScoreInfo: [],
        discountInfo: [],
        recommendInfo: [],
        longforInfo: []
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state, { payload }) {
            state.longforInfo = payload
        }

    },
    // extraReducers 一个是用途是监听createAsyncThunk返回的状态机。
    // 在 extraReducers 中，我们监听了这个 thunk action dispatch 的 
    // "pending"、"fulfilled" 和 "rejected" 三种 action 类型，并在相应的 reducer 中更新了 state。
    // 相当于创建一个reducer 但是数据来源是异步的
    // extraReducers: (builder) => {
    //     builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
    //         state.goodPriceInfo = payload
    //     })
    // }
})
export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeRecommendInfoAction,
    changeLongforInfoAction } = homeSlice.actions
export default homeSlice.reducer