import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomsWrapper from './style'
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
    const { roomList, roomWidth = "25%" } = props
    return (
        <RoomsWrapper>
            {
                roomList?.slice(0, 8).map(item => {
                    return <RoomItem key={item.id} roomWidth={roomWidth} itemData={item} />
                })
            }
        </RoomsWrapper>
    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array
}
export default SectionRooms