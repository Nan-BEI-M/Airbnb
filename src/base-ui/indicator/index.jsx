
import React, { memo, useEffect, useRef } from 'react'
import IndicatorWrapper from './style'

const Indicator = memo((props) => {
    const { selectIndex = 0 } = props
    const contentRef = useRef()
    // 副作用
    useEffect(() => {
        // 获取当前item 左侧距离
        let itemOffsetLeft = contentRef.current.children[selectIndex].offsetLeft
        // 获取当前元素自身宽度
        let itemWidth = contentRef.current.children[selectIndex].clientWidth
        // 获取indicater宽度
        const indicatorWidth = contentRef.current.clientWidth
        // 获取总长度
        const scrollWidth = contentRef.current.scrollWidth
        // 移动距离
        let totalDistance = itemOffsetLeft + itemWidth / 2 - indicatorWidth / 2
        // 判断左右两侧特殊情况
        if (totalDistance < 0) totalDistance = 0
        if (totalDistance + indicatorWidth > scrollWidth) totalDistance = scrollWidth - indicatorWidth
        contentRef.current.style.transform = `translate(${-totalDistance}px)`
    }, [selectIndex])
    return (
        <IndicatorWrapper>
            <div className="i-content" ref={contentRef}>
                {
                    props.children
                }
            </div>
        </IndicatorWrapper>
    )
})



export default Indicator