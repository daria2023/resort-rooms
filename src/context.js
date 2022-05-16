import React, { useContext, useEffect,useState } from 'react';
import items from './data';

const AppContext = React.createContext();

const AppProvider = ({children}) =>{

 const [loading,setLoading] = useState(true);
 const [rooms,setRooms] = useState([]);
 const [featuredRooms,setFeaturedRooms] = useState([]);
 const [sortedRooms,setSortedRooms] = useState([]);
 const [filterChoices,setFilterChoices] = useState({
    type:'all',
    capacity:0,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    breakfaset:false,
    pets:false,
})



   
    const fetchData = (data)=>{
    let tempItems = data.map( item => {
       let id = item.sys.id ;
       let images = item.fields.images.map( image => image.fields.file.url);
       return {...item.fields,id,images}; 
     })
    return tempItems;
    }

    const onFilterChange = (e)=>{
       let name =  e.target.name;
       let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
       setFilterChoices(filterChoices => ({ ...filterChoices, [name]: value }));
       
    }

    useEffect(()=>{
        filterRooms()
    },[filterChoices])

    const filterRooms = ()=>{
        
        let tempRooms = [...rooms];
        
        if (filterChoices.type !== 'all') { 
          tempRooms = tempRooms.filter(room => room.type === filterChoices.type);
        }; 

        let capacity = +filterChoices.capacity;
        if (capacity !== 1 ) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        let price = +filterChoices.price;
        
        tempRooms = tempRooms.filter(room => room.price <= price);

        tempRooms = tempRooms.filter(room => room.size >= filterChoices.minSize && room.size <=filterChoices.maxSize)

        if(filterChoices.breakfaset) {
            tempRooms = tempRooms.filter(room => room.breakfast === filterChoices.breakfaset)
        }
        
        if(filterChoices.pets) {
            tempRooms = tempRooms.filter(room => room.pets === filterChoices.pets)
        }

        setSortedRooms(tempRooms);      
    }
   
    useEffect(()=>{
      let structuredRooms = fetchData(items);  
      setRooms(structuredRooms);
      setFeaturedRooms(structuredRooms.filter(room => room.featured === true));
      setFilterChoices({...filterChoices,maxPrice:Math.max(...structuredRooms.map(room => room.price)),price:Math.max(...structuredRooms.map(room => room.price)),maxSize:Math.max(...structuredRooms.map(room => room.size))});
      setSortedRooms(structuredRooms);
      setLoading(false);
    },[])
   
    return (
        <AppContext.Provider value={{
            rooms,
            featuredRooms,
            setSortedRooms,
            sortedRooms,
            onFilterChange,
           ...filterChoices,
           filterChoices,
           setFilterChoices,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider}