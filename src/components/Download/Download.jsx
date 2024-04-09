/* eslint-disable no-unused-vars */
import React from 'react'
import './Download.css'
import {assets} from '../../assets/assets'
const Download = () => {
  return (
    <div className="download_main">
      <div className="download_top">
        <h2> FOR BETTER EXPERIENCE DOWNLOAD OUR TOMATO APP</h2>
      </div>
      <div className="download_bottom">
       
          <img src={assets.play_store} />
     
      
          <img src={assets.app_store} />
       
      </div>
    </div>
  );
}

export default Download 