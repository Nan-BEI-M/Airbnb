import React, { memo, useEffect } from 'react'
import EntireWrapper from './style'
import EntireFilter from './c_cpns/entire-filter'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/createAction'
import EntireRooms from './c_cpns/entire-rooms'
import EntirePagination from './c_cpns/entire-pagination'


const Entire = memo((props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRoomListAction())
    }, [dispatch])
    return (
        <EntireWrapper>
            <EntireFilter />
            <EntireRooms />
            <EntirePagination />
        </EntireWrapper>
    )
})

export default Entire