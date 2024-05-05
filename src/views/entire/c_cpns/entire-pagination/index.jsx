import React, { memo, useState } from 'react'
import PaginationWrapper from './style'
import { Pagination } from '@mui/material'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/createAction'

const EntirePagination = memo((props) => {
    // 组件数据
    const [page] = useState()
    // 获得redux数据
    const { totalCount, currentPage, roomList } = useSelector((state) => ({
        totalCount: state.entire.totalCount,
        currentPage: state.entire.currentPage,
        roomList: state.entire.roomList

    }), shallowEqual)
    // 处理数据
    const count = Math.ceil(totalCount / 20)
    const startCount = currentPage * 20 + 1
    const endCount = (currentPage + 1) * 20
    // 事件监听
    const dispatch = useDispatch()
    function onChangeHandle(event, page) {
        dispatch(fetchRoomListAction(page - 1))
        window.scrollTo(0, 0)
    }
    return (
        <PaginationWrapper>
            {
                !!roomList.length && <div className="pagination">
                    <Pagination count={count} page={page} onChange={onChangeHandle} />
                    <div className="desc">
                        第{startCount}-{endCount}个房源，共超过{totalCount}个</div>
                </div>
            }
        </PaginationWrapper>
    )
})



export default EntirePagination