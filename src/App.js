import React from 'react';
import "./App.css"
import Header from './Component/Header';
import Sidebar from "./Component/Sidebar";
import RecommendVideos from './Component/RecommendVideos';

const App = () => {
  return (
    <div>
        <Header />
        <div className='app_page'>
        <Sidebar/>
        <RecommendVideos/>
        </div>
    </div>
  )
}

export default App