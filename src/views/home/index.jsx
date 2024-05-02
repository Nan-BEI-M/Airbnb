import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeWrapper from './style'
import HomeBanner from './c_cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'


const Home = memo(() => {
    // 获取redux数据
    const { goodPriceInfo } = useSelector(state => ({
        goodPriceInfo: state.home.goodPriceInfo
    }), shallowEqual)
    // 获取dispatch
    const dispatch = useDispatch()
    //派发异步请求 发送网络请求
    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch])
    console.log(goodPriceInfo);
    return (
        <HomeWrapper>
            <HomeBanner />
            <div className="content">
                <div className="good-price">
                    <SectionHeader title={goodPriceInfo.title} />
                    <SectionRooms roomList={goodPriceInfo.list} />
                </div>
            </div>
        </HomeWrapper>
    )
})

export default Home