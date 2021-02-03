import {ChatEngine} from 'react-chat-engine';

import './App.css'

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const App = () =>{

    //if used is logged
    if(!localStorage.getItem('username')){
        return <LoginForm />
    } 
    return (
        <ChatEngine
        height="100vh"
        projectID="c0a910eb-257b-4334-874a-abca0a0ee254"
        userName="Nikola"
        userSecret="123123"
        renderChatFeed={ (chatAppProps) =>  <ChatFeed { ...chatAppProps}/>}
        />
    )
}

export default App;