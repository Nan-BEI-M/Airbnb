import React, { memo, useEffect, useRef, useState } from 'react'
import ScrollViewWrapper from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    // 状态管理
    const [showRight, setShowRight] = useState(false)
    const [showLeft, setShowLeft] = useState(false)
    const [posIndex, setPosIndex] = useState(0)
    const scrollRef = useRef()
    // 用于存储distance
    const totalDistanceRef = useRef()
    // 判断右侧按钮是否隐藏
    useEffect(() => {
        const scrollWidth = scrollRef.current.scrollWidth
        const clientWidth = scrollRef.current.clientWidth
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance > 0)

    }, [])
    // 事件监听
    function scrollhandle(isRight = true) {
        const newIndex = isRight ? posIndex + 1 : posIndex - 1
        const offsetLeft = scrollRef.current.children[newIndex].offsetLeft
        scrollRef.current.style.transform = `translate(-${offsetLeft}px)`
        setPosIndex(newIndex)
        // 判断右侧箭头隐藏
        setShowRight(offsetLeft < totalDistanceRef.current)
        setShowLeft(offsetLeft > 0)
        console.log("offsetLeft", offsetLeft);
        console.log("totalDistanceRef", totalDistanceRef.current);
    }
    return (
        <ScrollViewWrapper>
            {showLeft && (
                <div className="control left" onClick={e => scrollhandle(false)}>
                    <IconArrowLeft />
                </div>
            )}
            {showRight && (
                <div className="control right" onClick={scrollhandle}>
                    <IconArrowRight />
                </div>
            )}
            <div className="scroll">
                <div className="scroll-content"
                    ref={scrollRef}
                >{props.children}</div>
            </div>
        </ScrollViewWrapper>
    )
})


export default ScrollView