import hyRequest from "..";

export function fetchHomeGoodPriceData() {
    return hyRequest.get({
        url: "/home/goodprice"
    })
}
export function fetchHomeHighScoreData() {
    return hyRequest.get({
        url: "/home/highscore"
    })
}
export function fetchHomeDiscountData() {
    return hyRequest.get({
        url: "/home/discount"
    })
}
export function fetchHomeRecommendData() {
    return hyRequest.get({
        url: "/home/hotrecommenddest"
    })
}
export function fetchHomeLongforData() {
    return hyRequest.get({
        url: "/home/longfor"
    })
}