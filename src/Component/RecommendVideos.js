import React from 'react';
import "./RecommendVideos.css"
import VideoCard from "./VideoCard"

function RecommendVideos() {
  return (
    <div className='recommendVideos'>
        <h2>Recommended</h2>
        <div className='recommendVideos_videos'>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
        </div>
    </div>
  )
}

export default RecommendVideos