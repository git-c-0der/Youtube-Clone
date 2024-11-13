import { useEffect, useState } from "react";
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";


const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();

        setVideos(json.items);
    }

    if(videos.length===0) return;

    return (
        <div className="flex flex-wrap">
            {videos[0] && <AdVideoCard video={videos[0]} />}
            {videos.map(video=><Link key={video.id} to={"/watch?v="+video.id}><VideoCard video={video} /></Link>)}
        </div>
    );
};

export default VideoContainer;