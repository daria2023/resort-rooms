import React from 'react';
import Title from './Title';
import { useGlobalContext } from '../context';
import RoomItem from './RoomItem';

const FeaturedItems = () => {
    const {featuredRooms} = useGlobalContext();

  return (
    <div className='featured-rooms'>
        <Title title='featured rooms' />
        <div className='featured-rooms-center'>
            {featuredRooms.map(room => {
                return <RoomItem key={room.id} room={room} />
            })}
        </div>
    </div>
  )
}

export default FeaturedItems