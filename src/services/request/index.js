import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
class HYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
        // 拦截
        this.instance.interceptors.response.use((res) => {
            return res.data
        }, err => {
            return err
        })
    }
    request(config) {
        return this.instance.request(config)
    }
    get(config) {
        return this.instance.request({ ...config, method: "get" })
    }
    post(config) {
        return this.instance.request({ ...config, method: "post" })
    }
}
// eslint-disable-next-line
export default new HYRequest(BASE_URL, TIMEOUT)
