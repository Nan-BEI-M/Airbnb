import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './stye'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'
const HeaderRight = memo(() => {
    /* 状态管理 */
    const [showPanel, setShowPanel] = useState(false)
    /* 副作用 */
    useEffect(() => {
        const windowHandleClick = () => {
            setShowPanel(false)
        }
        // 使用捕获 防止点击profile图标时同时设置true和false
        window.addEventListener("click", windowHandleClick, true)
        return () => {
            window.removeEventListener("click", windowHandleClick, true)
        }
    }, [])
    /* 事件监听 */
    return (
        <RightWrapper>
            <div className="btns">
                <span>登录</span>
                <span>注册</span>
                <span>
                    <IconGlobal />
                </span>
            </div>
            <div className="profile" onClick={e => setShowPanel(true)}>
                <span>
                    <IconMenu />
                </span>
                <span>
                    <IconAvatar />
                </span>
                {
                    showPanel && <div className="panel">
                        <div className="top">
                            <div className="item">
                                注册
                            </div>
                            <div className="item">
                                登录
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="item">出租房源</div>
                            <div className="item">开展体验</div>
                            <div className="item">帮助</div>
                        </div>
                    </div>
                }
            </div>
        </RightWrapper>
    )
})

export default HeaderRight