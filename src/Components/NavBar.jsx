import { useState } from 'react';
import './Style/Navbar.css';
import InfoModal from './InfoModal';


export default function NavBar(){
    let [showInfo, setshowInfo] = useState(false);

    return (
        <>
            <div className="navbar">
            <div className="brand">
                <span><i className="fa-brands fa-trello"></i></span>
                <span>trello lite</span>
            </div>
            <div className="icons">
                <button onClick={() => setshowInfo(true)}>
                    <i className=" fa-regular fa-circle-question"></i>
                </button>
                <span className='img' >
                    <img src="https://ouch-prod-var-cdn.icons8.com/oq/illustrations/thumbs/C1TWL1m1l9YPncdJ.webp" alt="I"/>
                </span>
            </div>
            </div>

            <InfoModal 
                isOpen={showInfo}
                onClose={() => setshowInfo(false)}
            />
        </>
        
    )
}

