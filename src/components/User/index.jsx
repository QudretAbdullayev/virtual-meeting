import microphone from "../../assets/images/users/microphone.svg"
import hand from "../../assets/images/users/hand.svg"
import verified from "../../assets/images/users/verified.svg"
import emoji from "../../assets/images/users/emoji.svg"
import './user.scss'

function Index({image, name, isVerify,isHand,isMicrophone,isSpeak,isEmoji}) {
    return (
        <div className={`${isSpeak ? "user user-border" : "user"}`}>
            <img className="user-image" src={image} alt="" />
            {(isVerify) ? <div className="name"><img src={verified} alt="verify" /><p>{name}</p></div>
            : <div className="name"><p>{name}</p></div>}
            {(isHand) ? <div className="hand"><img src={hand} alt="hand" /></div> : <div></div>}
            {(isMicrophone) ? <div className="microphone"><img src={microphone} alt="microphone" /></div>: <div></div>}
            {(isEmoji) ? <div className="emoji"><img src={emoji} alt="hand" /></div> : <div></div>}
        </div>
    )
  }
  
  export default Index