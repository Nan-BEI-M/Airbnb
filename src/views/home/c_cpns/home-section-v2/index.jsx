import React, { memo, useCallback, useState } from 'react'
import SectionV2Wrapper from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    // 传递来的数据
    const { infoData } = props
    // 组件自身数据
    const initailName = infoData.dest_address?.[0].name
    const tabNames = infoData.dest_address?.map(item => item.name)
    // useState的initailName只有第一次会使用，后面无论initailName为什么又不会重新渲染
    // 那么如果想要动态获取第一次的展示数据，使用逻辑判断 取消组件第一次加载的展示，直接加载第二次
    const [currentName, setCurrentName] = useState(initailName)
    // 事件监听
    // 优化出入组件的函数，避免多次生成
    const tabsClickHandle = useCallback(function (name) {
        setCurrentName(name)
    }, [])
    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTabs tabNames={tabNames} tabsClick={tabsClickHandle} />
            <SectionRooms roomList={infoData.dest_list?.[currentName]} roomWidth="33.33%" />
            <SectionFooter name={currentName} color='#00848A' />
        </SectionV2Wrapper>
    )
})
export default HomeSectionV2