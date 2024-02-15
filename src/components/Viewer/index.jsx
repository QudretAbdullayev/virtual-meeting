import protect from "../../assets/images/viewer/protect.svg" 
import icon1 from "../../assets/images/viewer/icons-9.svg" 
import icon2 from "../../assets/images/viewer/icons-5.svg" 
import icon3 from "../../assets/images/viewer/icons-4.svg" 
import icon4 from "../../assets/images/viewer/icons-0.svg" 
import recorder from "../../assets/images/viewer/record-button.svg" 
import './viewer.scss'

function Index() {
    return (
        <div className='viewer'>
            <div className="container">
                <div className="protect">
                    <img src={protect} alt="protect"/>
                </div>
                <div className="grids">
                    <div className='grid'>
                        <div className="top"></div>
                        <img src={icon1} alt="grid-9" />
                        <div className="bottom bottom-active"></div>
                    </div>
                    <div className='grid'>
                        <div className="top"></div>
                        <img src={icon2} alt="grid-5" />
                        <div className="bottom"></div>
                    </div>
                    <div className='grid'>
                        <div className="top"></div>
                        <img src={icon3} alt="grid-4" />
                        <div className="bottom"></div>
                    </div>
                    <div className='grid'>
                        <div className="top"></div>
                        <img src={icon4} alt="grid-0" />
                        <div className="bottom"></div>
                    </div>
                </div>
                <div className="record">
                    <img src={recorder} alt="record" />
                    <p>13:03:34</p>
                </div>
            </div>
        </div>
    )
  }
  
  export default Index