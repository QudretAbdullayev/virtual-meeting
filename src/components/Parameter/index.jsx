function Index({image, classnames, up,text}) {
    return (
        <button className={classnames}>
            {
                (text!==undefined) ? <p className='text'>{text}</p>
                : ( 
                    (up!==undefined) ?  <><img className="parameter-logo" src={image} alt="" /><img className="up-logo" src={up} alt="" /></> 
                    : <img className="parameter-logo" src={image} alt="" />
                )
            }
        </button>
    )
  }
  
  export default Index