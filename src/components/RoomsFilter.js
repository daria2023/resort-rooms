import React from 'react';
import Title from './Title';
import { useGlobalContext } from '../context';


const filterValues = (data, tag)=>{
    let items = Array.from(new Set(data.map(item => item[tag])));
    return items;
}



const RoomsFilter = () => {

   const {rooms,onFilterChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets} = useGlobalContext(); 

   let types = filterValues(rooms,'type');
   types = ['all',...types];


   return (
    <div className='filter-container'>
        <Title title='search rooms' />
        <form className='filter-form'>
            <div className='form-group'>
                <label htmlFor='type'>room type</label>
                <select id='type' name='type' value={type} className='form-control' onChange={onFilterChange}>
                    {types.map((item,idx) =>{
                        return <option key={idx}  >{item}</option>
                    })}
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor='type'>guests</label>
                <select id='capacity' name='capacity' value={capacity} className='form-control' onChange={onFilterChange}>
                    {filterValues(rooms,'capacity').map((item,idx) =>{
                        return <option key={idx}  >{item}</option>
                    })}
                </select>
            </div>
             <div className='form-group'>
                <label htmlFor='price'>room price {price}</label>
                <input type='range' id='price' name='price' min={minPrice} max={maxPrice} className='form-control' value={price} onChange={onFilterChange} />
            </div>
             <div className='form-group'>
                <label htmlFor='size'>room size</label>
                <div className='size-inputs'>
                    <input className='size-input' type='number' name='minSize' value={minSize} onChange={onFilterChange}></input>
                    <input className='size-input' type='number' name='maxSize' value={maxSize} onChange={onFilterChange}></input>
                </div>
            </div>
             <div className='form-group'>
                 <div className='single-extra'>
                <input type='checkbox' id='breakfast' name='breakfast' checked={!!breakfast} onChange={onFilterChange} />
                <label htmlFor='breakfast'>breakfast</label>
                </div>
                   <div className='single-extra'>
                <input type='checkbox' id='pets' name='pets' checked={!!pets} onChange={onFilterChange} />
                <label htmlFor='pets'>pets</label>
                </div>
            </div>
        </form>
    </div>
  )
}

export default RoomsFilter