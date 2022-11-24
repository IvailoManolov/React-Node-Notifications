import React from 'react'
import "./Navbar.css"
import Notification from "../../img/notification.png"
import Message from "../../img/message.png"
import Settings from "../../img/settings.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>LeadEngineer</span>
        <div className='icons'>
            <div className="icon">
                <img src={Notification} className='iconImg' alt="" />
                <div className='counter'>2</div>
            </div>

            <div className="icon">
                <img src={Message} className='iconImgMessage' alt="" />
                <div className='counter'>2</div>
            </div>

            <div className="icon">
                <img src={Settings} className='iconImg' alt="" />
                <div className='counter'>2</div>
            </div>

        </div>
    </div>
  )
}

export default Navbar