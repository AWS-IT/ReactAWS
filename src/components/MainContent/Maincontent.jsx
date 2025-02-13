import Number from "../Number/Number";
import Buttons from "../Buttons/Buttons";
import Logo from '../Logo/Logo';
import refresh from '../../assets/images/refresh.png';
import { useState } from "react";

function Maincontent() {

    const [counter, setCounter] = useState(0)
    function minus(){
        return setCounter (counter - 1)
    }
    function plus(){
        return setCounter (counter + 1)
    }
    function refresh(){
        return setCounter (0)
    }


    return(
        <div className="content">
            <Number counter={counter}/>
            <Buttons setCounter={counter}/>

            <div className="Buttons">
                <div className="minus">
                    <button onClick={minus}>-</button>
                </div>            
                <div className="refresh">
                    <button onClick={refresh}><img src={refresh} alt="" /></button>
                </div>
                <div className="plus">
                    <button onClick={plus}>+</button>
                </div>                  
            </div>
        </div>
    )
}

export default Maincontent


