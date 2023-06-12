import React, { useState, useEffect} from 'react'
import { UserAuth } from '../Context/AuthContext'
import { db } from '../firebase'
import {  doc,  onSnapshot, updateDoc} from 'firebase/firestore'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'


const SavedShows = () => {
    const {user} = UserAuth()
    const[movies, setMovies] = useState([])

    useEffect(()=>{
        onSnapshot(doc(db, 'users', `${user?.email}`) , (doc)=>{
            setMovies(doc.data()?.savedShows);
        })
    },[user?.email])

    const slideLeft = ()=>{
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 200;
        }
        const slideRight = ()=>{
           var slider = document.getElementById('slider');
            slider.scrollLeft = slider.scrollLeft + 200;
        }
        const truncateString = (str, num)=>{
            if(str?.length >num){
              return str.slice(0, num) + '...'
            }else{
              return str
            }
          }
const movieDel = doc(db, 'users', `${user?.email}`)
const deleteShow = async(passedID)=>{
    try{
        const result = movies.filter((data)=> data.id !==passedID);
        await updateDoc(movieDel,{
            savedShows:result,
        })
    }catch(error){
        console.log(error)
    }
}
  return (
    <div className='row'>
    <h2 className='title'>My Shows</h2>
    <div className='wrapper'>
        <MdChevronLeft size={40} className='slider-icon' onClick={slideLeft}/>
        <MdChevronRight size={40} className='slider-right' onClick={slideRight}/>
        <div id={'slider'} className='slider'>
            {
                movies.map((data, id)=>(
                    < div className='slider-wrapper'  key={id}>
                        <div className='slider-wrapper'>
                        <img src={`https://image.tmdb.org/t/p/w500/${data?.img}`} alt={data.title} />
                        <p>{truncateString(data?.title, 20)}</p>
                </div>
                <p className='close' onClick={()=>deleteShow(data.id)}><AiOutlineClose/></p>
                    </div>
                      
                ))
            }
        </div>
       
    </div>
</div>
  )
}

export default SavedShows