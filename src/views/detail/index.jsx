import React, { memo, useEffect } from 'react'
import DetailWrapper from './style'
import DetailPrcture from './c_cpns/detail-picture'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { useDispatch } from 'react-redux'

const Detail = memo((props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
    }, [dispatch])
    return (
        <DetailWrapper>
            <DetailPrcture />
        </DetailWrapper>
    )
})



export default Detail