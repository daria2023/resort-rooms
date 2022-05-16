import React from 'react';
import { useGlobalContext } from '../context';
import RoomItem from './RoomItem'

const RoomsList = () => {

  const { sortedRooms } = useGlobalContext();
  if (sortedRooms.length === 0) {
    return <h3 className='alert-msg'>sorry, no match!</h3>
  }

  return (
    <div className='roomslist'>
        <div className='roomslist-center'>
        {sortedRooms.map(room =>{
            return <RoomItem key={room.id} room={room} className='room' />
        })}
        </div>
    </div>
  )
}

export default RoomsList