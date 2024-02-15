import parameters from "../../assets/images/chatheader/Icons.svg"
import './chatheader.scss'

function Index() {
    return (
        <div className='chatheader'>
            <div className="container">
                <p className="chat-base">Chats (3)</p>
                <img src={parameters} alt="parameters"/>
            </div>
        </div>
    )
  }
  
  export default Index