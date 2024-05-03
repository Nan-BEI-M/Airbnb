import React, { memo, useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeWrapper from './style'
import HomeBanner from './c_cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c_cpns/home-section-v1'
import HomeSectionV2 from './c_cpns/home-section-v2'
import { isEmptyO } from '@/utils/is_empty_object'
import HomeLongfor from './c_cpns/home-longfor'


const Home = memo(() => {
    // 获取redux数据
    const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo } = useSelector(state => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        longforInfo: state.home.longforInfo
    }), shallowEqual)

    // 获取dispatch
    const dispatch = useDispatch()
    //派发异步请求 发送网络请求
    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch])
    return (
        <HomeWrapper>
            <HomeBanner />
            <div className="content">
                {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}
                {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
                {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
                {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
                {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
            </div>
        </HomeWrapper>
    )
})

export default Home