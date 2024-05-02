import { fetchHomeData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// redux发送异步网络请求
export const fetchHomeDataAction = createAsyncThunk("fatchHomeData", async () => {
    const res = await fetchHomeData()
    return res
})
const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: []
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        }
    },
    // extraReducers 一个是用途是监听createAsyncThunk返回的状态机。
    // 在 extraReducers 中，我们监听了这个 thunk action dispatch 的 
    // "pending"、"fulfilled" 和 "rejected" 三种 action 类型，并在相应的 reducer 中更新了 state。
    // 相当于创建一个reducer 但是数据来源是异步的
    extraReducers: (builder) => {
        builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
            state.goodPriceInfo = payload
        })
    }
})
export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer