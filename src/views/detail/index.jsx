
import React, { memo } from 'react'
import DetailWrapper from './style'
import DetailPrcture from './c_cpns/detail-picture'

const Detail = memo((props) => {
    return (
        <DetailWrapper>
            <DetailPrcture />
        </DetailWrapper>
    )
})



export default Detail