import microphoneNone from "../../assets/images/participant/Microphone-none.svg"
import microphone from "../../assets/images/participant/Microphone.svg"
import microphoneActive from "../../assets/images/participant/Microphone-active.svg"
import camera from "../../assets/images/participant/Camera.svg"
import './participant.scss'

function Index({image, name, position,isMicrophone,isSpeak, isCamera,host}) {
    return (
        <div className="participant">
            <div className="card">
                <img className="user-image" src={image} alt="" />
                <div className="content">
                    <p className="name">{name}</p>
                    <p className="position">{position}</p>
                </div>
            </div>
            <div className="card-row">
                {
                    (host==="") ? <p className="host host-none"></p> : <p className="host">{host}</p>
                }
                {
                (isMicrophone===false) ? <img className="microphone" src={microphoneNone} alt="" />
                : ((isSpeak) ? <img className="microphone" src={microphoneActive} alt="" />
                : <img className="microphone" src={microphone} alt="" />
                )
                }
                <img className={`${isCamera ? "camera" : "camera-none"}`} src={camera} alt="" />
            </div>
        </div>
    )
  }
  
  export default Index