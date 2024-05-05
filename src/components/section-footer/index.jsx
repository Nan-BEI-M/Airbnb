import React, { memo } from 'react'
import FooterWrapper from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
    const { name, color = "#000" } = props
    let currentName = "显示更多"
    if (name) {
        currentName = `显示更多${name}房源`
    }
    const navigate = useNavigate()
    // 事件监听
    function moreInfoHandle() {
        navigate('/entire')
    }
    return (
        <FooterWrapper $color={color}>
            <div className="info" onClick={moreInfoHandle}>
                <div className="text">{currentName}</div>
                <IconMoreArrow className='icon' />
            </div>
        </FooterWrapper>
    )
})

export default SectionFooter