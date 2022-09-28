import { Avatar } from "@mui/material";
import "./VideoCard.css"

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div>
      <img src={image} alt="" />
      <div className="videoCard_info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />
      
      
      <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{views} · {timestamp}</p>
          <p>{channel}</p>
      </div>
    </div>
    </div>
  );
};

export default VideoCard;
