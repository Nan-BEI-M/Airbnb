
import React, { memo } from 'react'
import SectionV3Wrapper from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeSctionV3 = memo((props) => {
    const { infoData } = props
    return (
        <SectionV3Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <div className="content">
                <ScrollView>
                    {
                        infoData?.list?.map(item => {
                            return <RoomItem key={item.id} roomWidth="20%" itemData={item} />
                        })
                    }
                </ScrollView>
            </div>
        </SectionV3Wrapper>
    )
})



export default HomeSctionV3