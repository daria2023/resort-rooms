import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Room = () => {
  const {rooms} = useGlobalContext();
  let querySlug = useParams().slug;

  const room = rooms.find(room=>room.slug === querySlug);

  if (!room) {
    return <h3>Oops, not find the room you are asking for</h3>
  }
  const [topImg,...bottomImgs] = room.images;
    
  return (
  <>
  <StyledHero img={topImg}>
    <Banner title={room.name}>
    <Link to='/rooms' className='btn-primary'>back to rooms</Link>
    </Banner>
  </StyledHero>
    <div className='single-room'>
      <div className='single-room-images'>
        {bottomImgs.map((image,index) => {
          return <img src={image} alt='room-img' key={index}/>
        })}
      </div>
      <div className='single-room-info'>
        <article className='desc'>
          <h3>details</h3>
          <p>{room.description}</p>
        </article>
        <article className='info'>
          <h3>info</h3>
          <h6>price: ${room.price}</h6>
          <h6>size: {room.size}SQRF</h6>
          <h6>Max capacity: {room.capacity > 1 ? `${room.capacity} people` : '1 person'}</h6>
          <h6>{room.pets ? 'pets allowed' : 'no pets'}</h6>
          <h6>{room.breakfase ? 'free breakfast allowed' : 'not included breakfast'}</h6>
        </article>
      </div>
      <div className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
          {room.extras.map((extra,index) => {
            return <li key={index}>-{extra}</li>
          })}
          </ul>
        </div>
    </div>
  </>
  )
}

export default Room