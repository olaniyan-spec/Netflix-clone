import React, { useState } from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { UserAuth } from '../Context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movies = ({data, rowID}) => {
    const[like, setLike] = useState(false)
    const[saved, setSaved] = useState(false)
    const {user} = UserAuth();
    const movieID = doc(db, 'users', `${user?.email}`)

    
    const truncateString = (str, num)=>{
        if(str?.length >num){
          return str.slice(0, num) + '...'
        }else{
          return str
        }
      }
      const saveShow = async()=>{
        if(user?.email){
            setLike(!like)
            setSaved(!saved)
            await updateDoc(movieID,{
                savedShows:arrayUnion({
                    id: data.id,
                    title: data.title,
                    img: data.backdrop_path
                }),
            });
        } else{
            alert('please login to save a movie')
        }
    };
  return (
            <div>
                <div className='slider-wrapper'>
                        <img src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`} alt={data.title} />
                        <p>{truncateString(data?.title, 20)}</p>
                    <div className='icon' onClick={saveShow}>
                            {like ? (<AiFillHeart/>) : (<AiOutlineHeart/>) } 
                    </div>
                </div>
    </div>
  )
}

export default Movies