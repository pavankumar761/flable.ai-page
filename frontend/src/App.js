import React,{ useState } from "react";

import Header from "./pages/header/header";
import Body from './pages/body/body'
import './App.css'

function App() {

  const [showSidebar,showSidebarFunc] = useState(false)

  const getSidebar = ()=>{
    showSidebarFunc(!showSidebar)
  }

  return (
    <div className="App">
    <Header getSidebar={getSidebar} ></Header>
    <Body showSidebar={showSidebar}></Body>
    </div>
  );
}

export default App;
