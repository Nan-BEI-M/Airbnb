
import React, { memo } from 'react'
import PictureWrapper from './style'
import { shallowEqual, useSelector } from 'react-redux'

const DetailPrcture = memo((props) => {
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)
    return (
        <PictureWrapper>
            <div className="picture">
                <div className="left">
                    <div className="item">
                        <img src={detailInfo.picture_urls[0]} alt="" />
                        <div className="cover"></div>
                    </div>

                </div>
                <div className="right">
                    {
                        detailInfo?.picture_urls?.slice(1, 5).map(item => {
                            return (
                                <div className="item">
                                    <img src={item} alt="" />
                                    <div className="cover"></div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </PictureWrapper>
    )
})


export default DetailPrcture