import { fetchEntireRoomListData } from "@/services"
import { CHANGE_CURRENT_PAGE, CHANGE_IS_LOADING, CHANGE_ROOM_LIST, CHANGE_TOTAL_COUNT } from "./constants"
export const changeCurrentPageAction = (currentPage) => ({
    type: CHANGE_CURRENT_PAGE,
    currentPage
})
export const changeRoomListAction = (roomList) => ({
    type: CHANGE_ROOM_LIST,
    roomList
})
export const changeTotalCountAction = (totalCount) => ({
    type: CHANGE_TOTAL_COUNT,
    totalCount
})
export const changeIsLoadingAction = (isLoading) => ({
    type: CHANGE_IS_LOADING,
    isLoading
})
export const fetchRoomListAction = (page = 0) => {
    return async (dispatch, getState) => {
        // 1、修改currentPage
        dispatch(changeCurrentPageAction(page))
        // 2、发送网络请求
        dispatch(changeIsLoadingAction(true))
        const res = await fetchEntireRoomListData(page * 20)
        dispatch(changeIsLoadingAction(false))
        // 3、修改list count
        const roomList = res.list
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
    }
}