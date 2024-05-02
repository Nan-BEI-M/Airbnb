import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ItemWrapper from './style'
import { Rating } from '@mui/material'

const RoomItem = memo((props) => {
    const { itemData } = props
    return (
        <ItemWrapper $verifycolor={itemData?.verify_info?.text_color || "#39576a"}>
            <div className="inner" >
                <div className="cover">
                    <img src={itemData.picture_url} alt="" />
                </div>
                <div className="desc">
                    {itemData.verify_info.messages.join(" · ")}
                </div>
                <div className="name">
                    {itemData.name}
                </div>
                <div className="price">
                    ￥{itemData.price}/晚
                </div>
                <div className="bottom">
                    <Rating
                        // 精度半星
                        precision={0.5}
                        // 当没有数据传递时，默认五星 undefined和null->5
                        // ?? 当前值为undefined时返回后值 0返回0
                        //  ||当前值不为true时，返回后值 0 也返回后值
                        value={itemData.star_rating ?? 5}
                        readOnly
                        style={{ fontSize: "14px", color: "#00848A" }}
                    />
                    <div>{itemData?.star_rating}</div>
                    {
                        itemData?.star_rating && itemData?.bottom_info?.content && <div> · </div>
                    }
                    <div>{itemData?.bottom_info?.content}</div>
                </div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem