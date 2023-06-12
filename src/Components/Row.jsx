import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movies from './Movies'

const Row = ({title, fetchURl, rowID} ) => {
    const[movies, setMovies] = useState([])
    
  
    useEffect(()=>{
        axios.get(fetchURl).then((res)=>{
            setMovies(res.data.results)
        })
    }, [fetchURl])

     
   
 
const slideLeft = ()=>{
var slider = document.getElementById('slider' + rowID);
slider.scrollLeft = slider.scrollLeft - 200;
}
const slideRight = ()=>{
   var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 200;
}

  return (
    <div className='row'>
        <h2 className='title'>{title}</h2>
        <div className='wrapper'>
            <MdChevronLeft size={40} className='slider-icon left-0' onClick={slideLeft}/>
            <MdChevronRight size={40} className='slider-right rounded-full' onClick={slideRight}/>
            <div id={'slider' + rowID} className='slider'>
                {
                    movies.map((data, id)=>(
                        <div div className='slider-wrapper'  key={id}>
                            <Movies data={data} key={id} />
                        </div>
                          
                    ))
                }
            </div>
           
        </div>
    </div>
  )
}

export default Row

