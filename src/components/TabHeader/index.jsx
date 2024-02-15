import human from "../../assets/images/tabheader/human.svg"
import apps from "../../assets/images/tabheader/apps.svg"
import record from "../../assets/images/tabheader/record.svg"

import './tabheader.scss'

function Index() {
    return (
        <div className='tabheader'>
            <div className="container">
                <button className="card-row blue">
                    <img src={human} alt="human" />
                    <p>Participants</p>
                </button>
                <button className="card-row">
                    <img src={apps} alt="apps" />
                    <p>Apps</p>
                    <img src={record} alt="record" />
                </button>
            </div>
        </div>
    )
  }
  
  export default Index