import React from 'react'
import "./Navbar.css"
import Notification from "../../img/notification.png"
import Message from "../../img/message.png"
import Settings from "../../img/settings.png"
import { useEffect } from 'react'
import { useState } from 'react'

const Navbar = ({socket}) => {

    const [notifications,setNotifications] = useState([])
    const [open,setOpen] = useState(false)

    useEffect(() => {
        socket.on("getNotification",data => {
            console.log(data)
            setNotifications((prev) => [...prev,data])
        })
    },[socket])

    const displayNotification = ({senderName,type}) => {
        let action

        if(type === 1){
            action = "liked"
        }
        else if(type === 2){
            action = "commented"
        }
        else{
            action = "shared"
        }

        return (
            <span className='notification'>
                {`${senderName}  ${action} your post`}
            </span>
        )
    }

    const handleRead = () => {
        setNotifications([])
        setOpen(false)
    }

  return (
    <div className='navbar'>
        <span className='logo'>LeadEngineer</span>
        <div className='icons'>
            <div className="icon" onClick={() => setOpen(!open)}>
                <img src={Notification} className='iconImg' alt="" />
                { notifications.length > 0 &&
                    <div className='counter'>{notifications.length}</div>
                }
            </div>

            <div className="icon" onClick={() => setOpen(!open)}>
                <img src={Message} className='iconImgMessage' alt="" />
                
            </div>

            <div className="icon" onClick={() => setOpen(!open)}>
                <img src={Settings} className='iconImg' alt="" />
                
            </div>
        </div>
        {open && <div className="notifications">
            {notifications.map((n) => (
                displayNotification(n)
            ))}
            {notifications.length > 0 && 
                <button className='nButton' onClick={handleRead}>Mark as read</button>
            }
            
        </div>}
        
    </div>
  )
}

export default Navbar