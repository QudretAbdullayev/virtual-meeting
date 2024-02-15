import User from '../User'
import {users} from "../../db"
import './users.scss'
import left from "../../assets/images/users/Ieft-arrow.svg"
import right from "../../assets/images/users/right-arrow.svg"
import blue from "../../assets/images/users/blue-ellipse.svg"
import gray from "../../assets/images/users/gray-ellipse.svg"

function Index() {
    return (
        <div className='users'>
        <div className="container">
          {users.map(user =>{
            return (
              <User image={user.img} name={user.name} isVerify={user.verify} isHand={user.hand} isEmoji={user.emoji} isMicrophone={user.microphone} isSpeak={user.speak}/>
            )
          })}
        </div>
        <div className="slider">
          <button><img src={left} alt="left" /></button>
            <div className="pages">
                <img src={blue} alt="" />
                <img src={gray} alt="" />
                <img src={gray} alt="" />
            </div>
            <button><img src={right} alt="right" /></button>
        </div>
      </div>
    )
  }
  
  export default Index