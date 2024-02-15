import right from "../../assets/images/messageBox/right.svg"
import emoji from "../../assets/images/messageBox/emoji.svg"
import paperClip from "../../assets/images/messageBox/PaperClip.svg"
import send from "../../assets/images/messageBox/send.svg"
import './messageBox.scss'

function Index() {
    return (
        <div className='messageBox'>
            <div className="container">
                <div className="chatbar">
                    <button className="toWho">
                        <p>Everyone</p>
                        <img src={right} alt="right" />
                    </button>
                    <div>
                        <div className="icons">
                            <button><img src={paperClip} alt="paperClip" /></button>
                            <button><img src={emoji} alt="emoji" /></button>
                        </div>
                    </div>
                </div>
                <form action="">
                    <input type="text" placeholder="Message to everyone..." />
                    <button><img src={send} alt="send" /></button>
                </form>
            </div>
        </div>
    )
  }
  
  export default Index