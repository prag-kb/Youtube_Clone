import { Avatar } from "@mui/material";
import "./VideoCard.css";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  const circleStyle={
    fontSize: "small",
    marginTop: "5px",
    };

  return (
  

    <div className="videoCard">
      <img className="videoCard_thumbnail" src={image} alt="" />
      <div className="videoCard_info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage}  />

        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel} <CheckCircleRoundedIcon style={circleStyle}/></p>

          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
