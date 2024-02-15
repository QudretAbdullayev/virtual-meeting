import Participant from '../Participant'
import {users} from "../../db"
import './participants.scss'

function Index() {
    return (
        <div className='participants'>
        <div className="container">
          {users.map(user =>{
            return (
              <Participant image={user.img} name={user.name} position={user.position} isCamera={user.isCamera} host={user.host} isMicrophone={user.microphone} isSpeak={user.speak}/>
            )
          })}
        </div>
        <div className="participant-parameters">
          <button>Invite</button>
          <button>Mute all</button>
          <button>Ask to start video</button>
        </div>
      </div>
    )
  }
  
  export default Index