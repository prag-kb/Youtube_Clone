import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={WhatshotIcon} title="Trending"/>
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
        <hr/>
        <SidebarRow Icon={VideoLibraryIcon} title="VideoLibrary"/>
        <SidebarRow Icon={OndemandVideoTwoToneIcon} title="Ondemand"/>
        <SidebarRow Icon={WatchLaterOutlinedIcon} title="WatchLater"/>
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked Videos"/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More"/>
        <hr/>
        
    </div>
  )
}

export default Sidebar