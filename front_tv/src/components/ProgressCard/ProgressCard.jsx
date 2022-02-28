import "./ProgressCard.css"
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useEffect, useState } from "react"
import Forfeit from "./components/Forfeit/Forfeit"
import scale from "./components/scale.svg"

let ProgressCard = (props) => {
    const[progressLevel, setProgressLevel] = useState(0);
    const[dangerLevel, setDangerLevel] = useState(0);
    // const[numberForfeit, setNumberForfeit] = useState((dangerLevel - (dangerLevel%100)) / 100)
    const[forfeits, setForfeits] = useState(<></>)

    useEffect(()=>{
        let elems = [];
        for (
            let index = 0; 
            index < (dangerLevel - (dangerLevel%100)) / 100; 
            index++) 
            {
                elems.push(<Forfeit/>);
            }
        setForfeits(<>{elems}</>);
    }, [dangerLevel]);

    useEffect(()=>{
        setDangerLevel(props.payload.panicLevel);
    });

    useEffect(()=>{
        let activeElements = 0;
        props.payload.states.map((e)=>{
            if (e.state) {
                activeElements += e.weight
                // setProgressLevel(progressLevel + e.weight)
            }
        })
        setProgressLevel(activeElements)
    })

    return(
    <div className="progress-card" >
        <h3 className="progress-card__title">{props.payload.team}</h3>
        <div className="progress-card__content">
            
            <div className="progress progress-bar-vertical">
                {/* {scale}     */}
                <img src={scale} className="scale"/>
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
                <img src={scale} className="scale"/>
                <div className="progress-bar progress-bar-striped bg-danger" 
                    role="progressbar" 
                    aria-valuenow="100" 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    style={{
                        height: (dangerLevel>100?dangerLevel%100:dangerLevel) +"%"
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