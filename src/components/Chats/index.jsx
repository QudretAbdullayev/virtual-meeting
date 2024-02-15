import Chat from '../Chat'
import {messages} from "../../db"
import './chats.scss'

function Index() {
    return (
        <div className='chats'>
        <div className="container">
          {messages.map(message =>{
            return (
              <Chat image={message.img} toName={message.toName} fromName={message.fromName} time={message.time}  message={message.message} messageType={message.messageType} fileSize={message.fileSize}/>
            )
          })}
        </div>
      </div>
    )
  }
  
  export default Index