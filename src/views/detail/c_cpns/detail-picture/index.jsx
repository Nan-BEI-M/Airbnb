
import React, { memo, useCallback, useState } from 'react'
import PictureWrapper from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPrcture = memo((props) => {
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)
    const [showBrowser, setShowBrowser] = useState(false)
    function onClickHandle() {
        setShowBrowser(true)
    }
    const onCloseClickHandle = useCallback(() => {
        setShowBrowser(false)
    }, [])
    return (
        <PictureWrapper>
            <div className="picture">
                <div className="left">
                    <div className="item" onClick={e => { setShowBrowser(true) }}>
                        <img src={detailInfo.picture_urls[0]} alt="" />
                        <div className="cover"></div>
                    </div>

                </div>
                <div className="right">
                    {
                        detailInfo?.picture_urls?.slice(1, 5).map(item => {
                            return (
                                <div className="item" key={item} onClick={e => { setShowBrowser(true) }}>
                                    <img src={item} alt="" />
                                    <div className="cover"></div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

            <div className="show-btn" onClick={e => onClickHandle()}>
                查看照片
            </div>
            {
                showBrowser &&
                <PictureBrowser
                    closeClick={e => { onCloseClickHandle() }}
                    pictureUrls={detailInfo.picture_urls} />
            }
        </PictureWrapper>
    )
})


export default DetailPrcture