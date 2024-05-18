import { useEffect, useState } from "react";
import { throttle } from "underscore";

export default function useScrollPosition() {
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        const scrollHandle = throttle(function () {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        }, 100)
        // 监听页面滚动
        window.addEventListener("scroll", scrollHandle)
        return () => {
            window.removeEventListener("scroll", scrollHandle)
        }
    }, [])
    return { scrollX, scrollY }
}