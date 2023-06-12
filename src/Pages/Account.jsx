import React from 'react'
import './Account.css'
import SavedShows from '../Components/SavedShows'

const Account = () => {
  return (
    <div>
      <div className='img-wrapper'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/73334647-ad51-42a9-b07b-93298cc2a8e1/5cfa42b8-7a6a-46f1-bb8d-4450280ccda7/NG-en-20230605-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt="" />
      </div>
      <h1 className='heading'>My Shows</h1>
      <SavedShows/>
    </div>
    
  )

}

export default Account