import {ChatEngine} from 'react-chat-engine';

import './App.css'

import ChatFeed from './components/ChatFeed'

const App = () =>{
    return (
        <ChatEngine
        height="100vh"
        projectID="c0a910eb-257b-4334-874a-abca0a0ee254"
        userName="Nikola"
        userSecret="Pokemon2020"
        renderChatFeed={ (chatAppProps) =>  <ChatFeed { ...chatAppProps}/>}
        />
    )
}

export default App;