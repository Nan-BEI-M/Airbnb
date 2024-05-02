import hyRequest from "..";

export function fetchHomeData() {
    return hyRequest.get({
        url: "/home/goodprice"
    })
}