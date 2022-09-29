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
      <h2>Recommended Videos</h2>
      <div className="recommendVideos_videos">
      <VideoCard 
          title="Build a News App"
          views="33k"
          image={image1}
          channel="Beginner "
          channelImage={channelImage}
          timestamp="3 days ago"
          channelUrl="https://www.youtube.com/"
        />
        <VideoCard
          title="Build ToDo Web App"
          views="23k"
          image={image1}
          channel="Beginner"
          channelImage={channelImage}
          timestamp="1 days ago"
          channelUrl="https://www.youtube.com/"
        />
        <VideoCard
          title="Build Chat App"
          views="69k"
          image={image1}
          channel="Beginner"
          channelImage={channelImage}
          timestamp="9 days ago"
          channelUrl="https://www.youtube.com/"
        />

        <VideoCard
          title="Build a Wallpaper App "
          views="18k"
          image={image1}
          channel="Beginner"
          channelImage={channelImage}
          timestamp="13 days ago"
          channelUrl="https://www.youtube.com/"
        />

        <VideoCard
          title="Build a Recipe App"
          views="2.3M"
          image={image1}
          channel="Beginner"
          channelImage={channelImage}
          timestamp="27 days ago"
          channelUrl="https://www.youtube.com/"
        />

        <VideoCard
          title="Learn How to Save Data"
          views="10k"
          image={image1}
          channel="Beginner"
          channelImage={channelImage}
          timestamp="8 days ago"
          channelUrl="https://www.youtube.com/"
        />

        <VideoCard
          title="Build Memory Game App "
          views="2.3M"
          image={image1}
          channel="Beginner"
          channelImage={channelImage}
          timestamp="4 days ago"
          channelUrl="https://www.youtube.com/"
        />

        <VideoCard
          title="Building a Doctor App UI Design | Speed Code"
          views="11k"
          image={image1}
          channel="Beginner"
          channelImage={channelImage}
          timestamp="3 months ago"
          channelUrl="https://www.youtube.com/"
        />
        
      </div>
    </div>
  );
}

export default RecommendVideos;
