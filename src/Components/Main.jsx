import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


import request from '../Request'
const Main = () => {
const [movies, setMovies] = useState([])




const movie = movies[Math.floor(Math.random() * movies.length)]
useEffect(()=>{
axios.get(request.requestPopular).then((res)=>{
  setMovies(res.data.results)
})
}, [])
// console.log(movie)

const truncateString = (str, num)=>{
  if(str?.length >num){
    return str.slice(0, num) + '...'
  }else{
    return str
  }
}
  return (
    <main>
      <div className='image'>
      <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
      </div>
      <div className='content'>
        <h1 className='title'>{movie?.title}</h1>
      <div>
       <Link to='/LogIn'> <button className='btn play'>Play</button></Link>
        <Link to='/LogIn'><button className='btn watch'>Watch later</button></Link>
      </div>
      <p>Released: {movie?.release_date}</p>
      <p>{truncateString(movie?.overview, 100)}</p>
   
      </div>
     

    
      </main>
  )
}

export default Main