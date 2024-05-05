import React, { memo } from 'react'
import { LeftWrapper } from './stye'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'
const HeaderLeft = memo(() => {
    const navigate = useNavigate()
    function onClickHandle() {
        navigate('/home')
    }
    return (
        <LeftWrapper>
            <div className="logo" onClick={onClickHandle}>
                <IconLogo />
            </div>
        </LeftWrapper>
    )
})

export default HeaderLeft