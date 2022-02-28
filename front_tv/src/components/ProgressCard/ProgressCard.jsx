import "./ProgressCard.css"
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useEffect, useState } from "react"

let ProgressCard = (props) => {
    const[progressLevel, setProgressLevel] = useState(60);
    const[dangerLevel, setDangerLevel] = useState(210);
    const[numberForfeit, setNumberForfeit] = useState((dangerLevel - (dangerLevel%100)) / 100)
    const[forfeits, setForfeits] = useState(<></>)

    const Forfeit = ()=>{return(<div className="forfeit bg-danger text-white">
        <h5>ШТРАФ</h5>
        <h5>+10 мин.</h5>
    </div>)};

    useEffect(()=>{
        if (numberForfeit != ((dangerLevel - (dangerLevel%100)) / 100) ) {
            setNumberForfeit((dangerLevel - (dangerLevel%100)) / 100)
            let menuItems = [];
            for (let i=0; i < numberForfeit; i++) {
                menuItems.push(<Forfeit/>)
            }
            setForfeits(<>{menuItems}</>)
            console.log(menuItems);
        }
    })

    const scale = (<svg width="10" height="688" viewBox="0 0 20 688" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="64" x2="20" y2="64" stroke="white" stroke-width="4"/>
    <line y1="134" x2="20" y2="134" stroke="white" stroke-width="4"/>
    <line y1="204" x2="20" y2="204" stroke="white" stroke-width="4"/>
    <line y1="274" x2="20" y2="274" stroke="white" stroke-width="4"/>
    <line y1="344" x2="20" y2="344" stroke="white" stroke-width="4"/>
    <line y1="414" x2="20" y2="414" stroke="white" stroke-width="4"/>
    <line y1="484" x2="20" y2="484" stroke="white" stroke-width="4"/>
    <line y1="554" x2="20" y2="554" stroke="white" stroke-width="4"/>
    <line y1="624" x2="20" y2="624" stroke="white" stroke-width="4"/>
</svg>);



    return(
    <div className="progress-card" >
        <h3 className="progress-card__title">Команда</h3>
        <div className="progress-card__content">
            
            <div className="progress progress-bar-vertical">
                {scale}    
                <div 
                    className="progress-level progress-bar progress-bar-striped bg-success" 
                    // role="progressbar" 
                    // aria-valuenow="100" 
                    // aria-valuemin="0" 
                    // aria-valuemax="100" 
                    style={{
                        height: progressLevel +"%"
                        , width: "100%"
                    }}
                >
                    <span 
                        className="sr-only"
                        style={{fontSize: "3em"}}
                    >
                        {progressLevel}%
                    </span>
                </div>
            </div>

            <div className="danger-level progress progress-bar-vertical">
                {scale}    
                <div className="progress-bar progress-bar-striped bg-danger" 
                    // role="progressbar" 
                    // aria-valuenow="100" 
                    // aria-valuemin="0" 
                    // aria-valuemax="100" 
                    style={{
                        height: dangerLevel>100?dangerLevel%100:dangerLevel +"%"
                        , width: "100%"
                    }}
                >
                    <span className="sr-only" style={{fontSize: "3em"}}>
                        {dangerLevel>100?dangerLevel%100:dangerLevel}%
                    </span>
                </div>
            </div>

            <div className="forfeits">
                
                 {forfeits}
            </div>
        </div>
    </div>
)}

export default ProgressCard