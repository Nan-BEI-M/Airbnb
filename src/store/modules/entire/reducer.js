import { CHANGE_CURRENT_PAGE, CHANGE_ROOM_LIST, CHANGE_TOTAL_COUNT, CHANGE_IS_LOADING } from "./constants"

const initailState = {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: false
}
function reducer(state = initailState, action) {
    switch (action.type) {
        case CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case CHANGE_ROOM_LIST:
            return { ...state, roomList: action.roomList }
        case CHANGE_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case CHANGE_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}
export default reducer