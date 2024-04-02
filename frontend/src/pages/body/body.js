import React from 'react'
import { useState } from 'react'

import Sidebar from '../sidebar/sidebar'
import History from '../history/history'
import Marco from '../marco/marco'
import SocialWatch from '../socialwatch/socialwatch'
import WebAnalytics from '../welcome/welcome'
import Footer from '../footer/footer'
import './body.css'

export default function Body(props) {

    const [bot,botFunc] = useState(0)

    const handleMarco =()=>{
        botFunc(1);
    }

    const handleSW = () => {
        botFunc(2)
    }

    const handleWA = () => {
        botFunc(3)
    }

    return (
        <div className='body' >
            <div className='sidebar' style={{ left: props.showSidebar ? '0' : '-300px' }}>
            {<Sidebar handleMarco={handleMarco} handleSW={handleSW} handleWA={handleWA} bot={bot}></Sidebar>}
            </div>
            <div className='normal-body' style={{ paddingLeft : props.showSidebar ? '200px' : '0px' }}>
                <div className='history'><History></History></div>
                <div className='chat-footer'>
                    <div>
                        {
                            (bot==0)?<p>Welcome</p>:((bot==1)?<Marco/>:((bot==2)?<SocialWatch/>:<WebAnalytics/>))
                        }
                    </div>
                    {(bot) ? <div className='footer' ><Footer showSidebar={props.showSidebar} askwho={(bot==1)?'Marco':((bot==2)?'Social Watch':'Web Analytics')}/></div>:<></>}
                </div>
            </div>
        </div>
    )
}
