import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import Sidebar from '../sidebar/sidebar'
import History from '../history/history'
import Marco from '../marco/marco'
import SocialWatch from '../socialwatch/socialwatch'
import WebAnalytics from '../welcome/welcome'
import Footer from '../footer/footer'
import './body.css'

export default function Body(props) {

    const [bot, botFunc] = useState(0)
    const [ask, askFunc] = useState('')
    const [convo, convoFunc] = useState([])
    const [history, historyFunc] = useState([])


    const date = new Date();
    const cd = date.toLocaleDateString();
    const ct = date.toLocaleTimeString();

    const handleChange = (e) => {
        askFunc(e.target.value)
        console.log(ask)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/api/marco/ask', { question: ask });
            convoFunc([...convo, { question: ask, answer: res.data.answer, date: cd, time: ct }]);
            historyFunc([...history, { question: ask, answer: res.data.answer }])
        } catch (error) {
            console.log(`There is an error in fetching data : `, error)
            convoFunc([...convo, { question: ask, answer: 'Sorry, I donno the answer', date: cd, time: ct }]);
            historyFunc([...history, { question: ask, answer: 'Sorry, I donno the answer', date: cd, time: ct }])
        }
        askFunc('')
    }

    const handleMarco =()=>{
        botFunc(1);
    }

    const handleSW = () => {
        botFunc(2)
    }

    const handleWA = () => {
        botFunc(3)
    }

    const eraseConvo = ()=>{
        convoFunc([])
    }

    return (
        <div className='body' >
            <div className='sidebar' style={{ left: props.showSidebar ? '0' : '-300px' }}>
            {<Sidebar handleMarco={handleMarco} handleSW={handleSW} handleWA={handleWA} bot={bot}></Sidebar>}
            </div>
            <div className='normal-body' style={{ paddingLeft : props.showSidebar ? '200px' : '0px' }}>
                <div className='history'><History eraseConvo={eraseConvo} history={history}></History></div>
                <div className='chat-footer'>
                    <div className='chat'>
                        {
                            (bot==0)?<p>Welcome</p>:((bot==1)?<Marco convo={convo}/>:((bot==2)?<SocialWatch/>:<WebAnalytics/>))
                        }
                    </div>
                    {(bot) ? <div className='footer' ><Footer handleSubmit={handleSubmit} handleChange={handleChange} ask={ask} showSidebar={props.showSidebar} askwho={(bot==1)?'Marco':((bot==2)?'Social Watch':'Web Analytics')}/></div>:<></>}
                </div>
            </div>
        </div>
    )
}
