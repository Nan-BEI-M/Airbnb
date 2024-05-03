
import React, { memo } from 'react'
import LongforItemWrapper from './style'

const LongforItem = memo((props) => {
    const { itemData } = props
    return (
        <LongforItemWrapper>
            <div className="inner">
                <div className="item-content">
                    <div className="cover-bg" />
                    <div className="cover">
                        <img src={itemData.picture_url} alt="" />
                    </div>
                    <div className="desc">
                        <div className="city">{itemData.city}</div>
                        <div className="price">均价{itemData.price}</div>
                    </div>
                </div>
            </div>
        </LongforItemWrapper>
    )
})
export default LongforItem