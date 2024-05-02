import React, { memo } from 'react'
import HeaderLeft from './c_cpns/header-left'
import HeaderCenter from './c_cpns/header-center'
import HeaderRight from './c_cpns/header-right'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
    return (
        <HeaderWrapper>
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </HeaderWrapper>
    )
})

export default AppHeader