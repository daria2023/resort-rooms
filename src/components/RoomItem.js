import React from 'react';
import { Link } from 'react-router-dom';

const RoomItem = ( {room} ) => {
    const {images,name,price,slug} = room;
  return (
    <div className='room'>
        <div className='img-container'>
            <img src={[images[0]]} alt={name}/>
            <div className='price-top'>
                <h6>${price}</h6>
                <p>per night</p>
            </div>
            <Link to={`/rooms/${slug}`} className='room-link btn-primary'>features</Link>
        </div>
        <div className='room-info'>
            {slug}
        </div>
    </div>
  )
}

export default RoomItem