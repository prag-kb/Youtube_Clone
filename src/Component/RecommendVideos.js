import React from "react";
import "./RecommendVideos.css";
import VideoCard from "./VideoCard";
import channelImage from "../Utils/channelImage.jpg";
import image1 from "../Utils/image1.png";
import image2 from "../Utils/image2.webp";
import image3 from "../Utils/image3.jfif";
import image4 from "../Utils/image4.jfif";
import image5 from "../Utils/image5.jfif";
import image6 from "../Utils/image6.webp";
import image7 from "../Utils/image7.webp";
import image8 from "../Utils/image8.webp";


function RecommendVideos() {
  return (
    <div className="recommendVideos">
      <h2>Recommended</h2>
      <div className="recommendVideos_videos">
        <VideoCard
          title="like a project"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={channelImage}
          channel="firecode"
          image={image8} />
        <VideoCard 
        title="like a project"
        views="2.3M Views"
        timestamp="3 days ago"
        channelImage={channelImage}
        channel="firecode"
        image={image1} />
        <VideoCard  title="like a project"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={channelImage}
          channel="firecode"
          image={image2} />
        <VideoCard  title="like a project"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={channelImage}
          channel="firecode"
          image={image3}  />
        <VideoCard  title="like a project"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={channelImage}
          channel="firecode"
          image={image4} />
        <VideoCard   title="like a project"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={channelImage}
          channel="firecode"
          image={image5}/>
        <VideoCard  title="like a project"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={channelImage}
          channel="firecode"
          image={image6} />
        <VideoCard  title="like a project"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={channelImage}
          channel="firecode"
          image={image7} />
      </div>
    </div>
  );
}

export default RecommendVideos;
