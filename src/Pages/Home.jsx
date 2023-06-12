import React from 'react'
import request from '../Request'
import './Home.css'
import Main from '../Components/Main'
import Row from '../Components/Row'

const Home = ({data}) => {
  return (
    <div>
        <Main/>
        <Row rowID ='1' title = 'POPULAR'  fetchURl = {request.requestPopular}/>
        <Row rowID ='2' title = 'TOP RATED' fetchURl = {request.requestTopRated}/>
        <Row rowID ='3' title = 'TRENDING' fetchURl = {request.requestTrending}/>
        <Row rowID ='4' title = 'UPCOMING' fetchURl = {request.requestUpcoming}/>
       
    </div>
  )
}

export default Home