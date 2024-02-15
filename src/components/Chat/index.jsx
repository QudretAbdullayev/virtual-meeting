import file from "../../assets/images/chat/File.svg"
import './chat.scss'

function Index({image, fromName,toName,time, messageType, message,fileSize}) {
    return (
        <div className="chat">
            <div className="card">
                <img className="user-image" src={image} alt="" />
            </div>
            <div className="content">
                <div className="card-row">
                    <div className="send">
                        <p className="from">from</p>
                        <p className="fromName">{fromName}</p>
                        <p className="to">to</p>
                        <p className="toName blue">{toName}</p>
                    </div>
                    <p className="time">{time}</p>
                </div>
                {(messageType==="write") ? <div className="messageText"><p className="message" style={{ whiteSpace: 'pre-line' }}>{message}</p></div>
                : <div className="messageText">
                    <img src={file} alt="" />
                    <div className="file">
                    <p className="message" style={{ whiteSpace: 'pre-line' }}>{message}</p>
                        <p className="size">{fileSize}</p>
                    </div>
                 </div>
                    
                
                }
            </div>
        </div>
    )
}

export default Index