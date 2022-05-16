import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import FeaturedItems from '../components/FeaturedItems';

// import { useGlobalContext } from '../context';

const Home = () => {

  return (
    <>
    <Hero>
        <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
            <Link to='/rooms' className='btn-primary'>our rooms</Link>
        </Banner>
    </Hero>
    <Services />
    <FeaturedItems />
    </>
  )
}

export default Home