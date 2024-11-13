

const VideoCard = ({video}) => {
    const {snippet, statistics} = video;
    const {channelTitle, title, thumbnails} = snippet;
    // console.log(video);
    return (
        <div className="p-2 m-2 w-72 shadow-lg shadow-orange-300">
            <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
            <ul>
                <li className="font-bold text-lg py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount/1000000}M Views</li>
            </ul>
        </div>
    );
};

export const AdVideoCard = ({video}) => {
    return (
        <div className="p-1 m-1 border border-red-600 shadow-xl shadow-green-600">
            <VideoCard video={video} />
        </div>
    )
}

export default VideoCard;