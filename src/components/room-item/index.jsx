import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import ItemWrapper from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
    const { itemData, roomWidth, itemClick } = props
    const [selectIndex, setSelectIndex] = useState(0)
    const sliderRef = useRef()
    const sliderEl = (<div className="slider">
        <div className="control">
            <div className="btn left" onClick={e => onChangeHandle(false, e)} >
                <IconArrowLeft width="20" height="20" />
            </div>
            <div className="btn right" onClick={e => onChangeHandle(true, e)}>
                <IconArrowRight width="20" height="20" />
            </div>
        </div>
        <div className="indicator">
            <Indicator selectIndex={selectIndex}>
                {
                    itemData?.picture_urls?.map((item, index) => {
                        return (
                            <div key={index} className='item'>
                                <span className={classNames('dot', { active: selectIndex === index })}></span>
                            </div>
                        )
                    })

                }
            </Indicator>
        </div>
        <Carousel dots={false} ref={sliderRef}>
            {
                itemData?.picture_urls?.map(item => {
                    return (
                        <div className="cover" key={item}>
                            <img src={item} alt="" />
                        </div>
                    )
                })
            }
        </Carousel>

    </div>)
    const pictureEl = (
        <div className='cover'>
            <img src={itemData.picture_url} alt="" />
        </div>
    )
    // 事件监听
    function onChangeHandle(isRight, event) {
        if (isRight) {
            sliderRef.current.next()
        } else {
            sliderRef.current.prev()
        }
        let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
        const length = itemData.picture_urls.length
        if (newIndex < 0) newIndex = length - 1
        if (newIndex > length - 1) newIndex = 0
        setSelectIndex(newIndex)
        event.stopPropagation();

    }
    function itemClickHandle() {
        if (itemClick) itemClick()
    }
    return (
        <ItemWrapper $roomWidth={roomWidth}
            $verifycolor={itemData?.verify_info?.text_color || "#39576a"}
            onClick={itemClickHandle}>
            <div className="inner" >
                {
                    itemData.picture_urls ? sliderEl : pictureEl
                }
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
                    {/*  只有评分与content都存在才显示圆点 */}
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