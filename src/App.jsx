import React from 'react';
import './App.css'
import Viewer from "./components/Viewer"
import Users from "./components/Users"
import Parameters from "./components/Parameters"
import Messagebox from "./components/MessageBox"
import TabHeader from "./components/TabHeader"
import Participants from "./components/Participants"
import Chatheader from "./components/Chatheader"
import Chats from "./components/Chats"

function App() {
  return (
    <>
    <Viewer/>
    <Users/>
    <Parameters/>
    <Messagebox/>
    <TabHeader/>
    <Participants/>
    <Chatheader/>
    <Chats/>
    </>
  )
}

export default App
