import React, { memo, useRef, useState } from 'react'
import HeaderLeft from './c_cpns/header-left'
import HeaderCenter from './c_cpns/header-center'
import HeaderRight from './c_cpns/header-right'
import { HeaderWrapper } from './style'
import classNames from 'classnames'
import { shallowEqual, useSelector } from 'react-redux'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
    // 
    const [isSearch, setIsSearch] = useState(false)
    // 获取redux的isfixed
    const { headerConfig } = useSelector(state => ({
        headerConfig: state.main.headerConfig
    }), shallowEqual)
    const { isFixed, topAlpha } = headerConfig
    // 使用自定义hooks 获取页面滚动距离
    const { scrollY } = useScrollPosition()
    // 记录search没有弹出时的，scrollY
    const prevY = useRef(0)
    if (!isSearch) prevY.current = scrollY
    if (isSearch && Math.abs(scrollY - prevY.current) > 30) {
        setIsSearch(false)
    }
    // 只有首页且scrollY===0时
    const isAlpha = topAlpha && scrollY === 0
    return (
        <ThemeProvider theme={{ isAlpha }}>
            <HeaderWrapper className={classNames({ fixed: isFixed })} $isSearch={isSearch}>
                <div className="content">
                    <div className="top">
                        <HeaderLeft />
                        <HeaderCenter isSearch={isAlpha || isSearch} tabClick={e => setIsSearch(true)} />
                        <HeaderRight />
                    </div>
                    <div className="bottom" >
                    </div>
                </div>
                {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
            </HeaderWrapper>
        </ThemeProvider>
    )
})

export default AppHeader