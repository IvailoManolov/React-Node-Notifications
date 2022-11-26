import React from 'react'
import "./Card.css"

import Message from "../../img/message.png"
import Heart from "../../img/heart.png"
import Share from "../../img/share png.png"

const Card = ({post}) => {
  return (
    <div className='card'>
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImage" />

      <div className="interaction">
        <img src={Heart} alt="" className="cardIcon" />
        <img src={Message} alt="" className="cardIconMessage" />
        <img src={Share} alt="" className="cardIcon" />
      </div>
    </div>
  )
}

export default Card