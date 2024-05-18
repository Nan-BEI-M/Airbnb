import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'

import BrowserWrapper from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import Indicator from '../indicator'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'


const PictureBrowser = memo((props) => {
    // 接收数据
    const { closeClick, pictureUrls } = props
    // 切换图片index
    const [currentIndex, setCurrentIndex] = useState(0)
    // 动画记录左右
    const [isNext, setIsNext] = useState(true)
    // 显示/隐藏预览列表
    const [showList, setShowList] = useState(true)
    // 当加载照片浏览组件时，隐藏滚动条
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        // 销毁组件时，显示滚动条
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])
    function closeHandle() {
        if (closeClick) closeClick()
    }
    function onClickHandle(isNext) {
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
        if (newIndex < 0) newIndex = pictureUrls.length - 1
        if (newIndex > pictureUrls.length - 1) newIndex = 0
        setCurrentIndex(newIndex)
        setIsNext(isNext)
    }
    function onItemClickHandle(index) {
        setIsNext(index > currentIndex)
        setCurrentIndex(index)
    }
    return (
        <BrowserWrapper $isNext={isNext} $showList={showList}>
            <div className="top">
                <div className="close-btn" onClick={e => closeHandle()}>
                    <IconClose />
                </div>
            </div>
            <div className="slider">
                <div className="control">
                    <div className="btn left" onClick={e => onClickHandle(false)}>
                        <IconArrowLeft width="77" height="77" />
                    </div>
                    <div className="btn right" onClick={e => onClickHandle(true)}>
                        <IconArrowRight width="77" height="77" />
                    </div>
                </div>
                <div className="picture">
                    <SwitchTransition mode='in-out'>
                        <CSSTransition
                            key={pictureUrls[currentIndex]}
                            classNames="pic"
                            timeout={200}>
                            <img src={pictureUrls[currentIndex]} alt="" />
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="preview">
                <div className="info">
                    <div className="desc">
                        <div className="count">
                            <span>{currentIndex + 1}/{pictureUrls.length}:</span>
                            <span>room apartment图片{currentIndex + 1}</span>
                        </div>
                        <div className="show-list" onClick={e => setShowList(!showList)}>
                            {showList ? "隐藏" : "显示"}照片列表
                            {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
                        </div>
                    </div>
                    <div className="pic-list">
                        <Indicator selectIndex={currentIndex}>
                            {
                                pictureUrls.map((item, index) => {
                                    return (
                                        <div className={classNames("item", { active: currentIndex === index })}
                                            key={item}
                                            onClick={e => onItemClickHandle(index)}>
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Indicator>
                    </div>
                </div>

            </div>
        </BrowserWrapper>
    )
})

export default PictureBrowser