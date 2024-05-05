import React, { memo, useCallback } from 'react'
import RoomsWrapper from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
    // 获取redux数据
    const { roomList, totalCount, isLoading } = useSelector((state => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
    })), shallowEqual)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // 事件监听
    const onClickHandle = useCallback((item) => {
        dispatch(changeDetailInfoAction(item))
        navigate('/detail')
    }, [navigate, dispatch])
    return (
        <RoomsWrapper>
            <div className="title">{totalCount}多处住所</div>
            <div className="room-list">
                {
                    roomList.map((item) => {
                        return (
                            <RoomItem
                                itemData={item}
                                key={item._id}
                                roomWidth='20%'
                                itemClick={e => onClickHandle(item)}
                            />
                        )
                    })
                }
            </div>
            {isLoading && <div className="cover"></div>}
        </RoomsWrapper >
    )
})

export default EntireRooms