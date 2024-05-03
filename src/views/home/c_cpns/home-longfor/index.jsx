
import React, { memo } from 'react'
import LongforWrapper from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongfor = memo((props) => {
    const { infoData } = props
    return (
        <LongforWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <div className="content">
                <ScrollView>
                    {
                        infoData.list?.map((item, index) => {
                            return <LongforItem key={index} itemData={item} />
                        })
                    }
                </ScrollView>
            </div>
        </LongforWrapper>
    )
})

export default HomeLongfor