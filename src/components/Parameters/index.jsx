import Parameter from '../Parameter'
import speaker from "../../assets/images/parameters/Speaker.svg"
import camera from "../../assets/images/parameters/Camera.svg"
import computer from "../../assets/images/parameters/Computer.svg"
import hand from "../../assets/images/parameters/Hand.svg"
import microphone from "../../assets/images/parameters/Microphone.svg"
import record from "../../assets/images/parameters/Record.svg"
import emoji from "../../assets/images/parameters/Emoji.svg" 
import upWhite from "../../assets/images/parameters/Up-white.svg" 
import up from "../../assets/images/parameters/Up.svg" 
import view from "../../assets/images/parameters/View.svg" 
import volume from "../../assets/images/parameters/Volume.svg" 
import line from "../../assets/images/parameters/Line.svg" 
import './parameters.scss'

function Index() {
    // {image, classnames, up,text}
    return (
        <div className='parameters'>
            <div className="container">
                <Parameter image={speaker} classnames={"large-card-row"} up={volume}/>
                <div className="card-rows">
                    <Parameter image={microphone} classnames={"small-card-row"} up={up}/>
                    <Parameter image={camera} classnames={"small-card-row"} up={up}/>
                    <Parameter image={computer} classnames={"small-card-row"} up={up}/>
                    <Parameter image={record} classnames={"small-card-row blue"} up={upWhite}/>
                    <Parameter image={view} classnames={"small-card-row"}/>
                    <div className="line">
                        <img src={line} alt="line"/>
                    </div>
                    <Parameter image={hand} classnames={"small-card-row"} up={up}/>
                    <Parameter image={emoji} classnames={"small-card-row"} up={up}/>
                </div>
                <Parameter classnames={"leave"} text={"Leave Meeting"}/>
            </div>
        </div>
    )
  }
  
  export default Index