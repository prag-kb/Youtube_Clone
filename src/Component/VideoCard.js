import {useEffect, useState} from 'react'
import { fetchFromAPI } from '../Utils/fetchFromAPI'
import Sidebar from './Sidebar';

const VideoCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  },[selectedCategory])


  return (
    <div>
        <img src='' alt=''/>
      <div className='video_info'>1</div>
      <Sidebar selectedCategory = {selectedCategory} setselectedCategory={setselectedCategory}/>
    </div>
  )
}

export default VideoCard