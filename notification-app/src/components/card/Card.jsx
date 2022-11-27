import React from 'react'
import "./Card.css"

import Message from "../../img/message.png"
import Heart from "../../img/heart.png"
import Share from "../../img/share png.png"
import HeartLiked from "../../img/liked.png"
import { useState } from 'react'

const Card = ({post,socket,user}) => {

  const[liked,setLiked] = useState(false)

  const handleNotification = (type) => {
    setLiked(true)
    socket.emit("sendNotification", {
      senderName : user,
      receiverName : post.username,
      type
    })
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
          <img src={Heart} alt="" className="cardIcon" onClick={() => handleNotification(1)}/>
        )}
        <img src={Message} alt="" className="cardIconMessage"  onClick={() => handleNotification(2)}/>
        <img src={Share} alt="" className="cardIcon" onClick={() => handleNotification(3)}/>
      </div>
    </div>
  )
}

export default Card