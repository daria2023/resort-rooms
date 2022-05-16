import React from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaBeer,FaShuttleVan} from 'react-icons/fa';

const Services = () => {

    const services = [
        {
            icon: <FaCocktail />,
            title: 'free cocktails',
            info :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
         {
            icon: <FaHiking />,
            title: 'endless hiking',
            info :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
         {
            icon: <FaShuttleVan />,
            title: 'free shuttle',
            info :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
         {
            icon: <FaBeer />,
            title: 'strongest beer',
            info :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        }
    ];


  return (
    <div className='services'>
        <Title title='services' />
        <div className='services-center'>
            {services.map((service,index)=>{
                return (
                    <div className='service' key={index}>
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services