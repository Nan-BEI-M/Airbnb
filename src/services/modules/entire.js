import hyRequest from "..";

export function fetchEntireRoomListData(offset = 0, size = 20) {
    return hyRequest.get({
        url: "/entire/list",
        params: {
            offset,
            size
        }
    })
}