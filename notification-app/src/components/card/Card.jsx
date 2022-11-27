import React from 'react'
import "./Card.css"

import Message from "../../img/message.png"
import Heart from "../../img/heart.png"
import Share from "../../img/share png.png"
import HeartLiked from "../../img/liked.png"
import { useState } from 'react'

const Card = ({post}) => {

  const[liked,setLiked] = useState(false)
  

  const handleNotification = () => {
    setLiked(true)
  }

  return (
    <div className='card'>
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImage" />

      <div className="interaction">
        {liked ? (<img src={HeartLiked} alt="" className="cardIcon" />) :
        (
          <img src={Heart} alt="" className="cardIcon" onClick={handleNotification}/>
        )}
        <img src={Message} alt="" className="cardIconMessage" />
        <img src={Share} alt="" className="cardIcon" />
      </div>
    </div>
  )
}

export default Card