import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


const VideoLec = ({ completeChallenge, videoDetail }) => {
    const { pathname } = useLocation()
    // console.log(pathname)
    const [completedVideos, setCompletedVideos] = useState([]);
    const [points, setPoints] = useState(0);


    const handleVideoCompletion = (videoId, pointsToAdd) => {
        if (!completedVideos.includes(videoId)) {
            setCompletedVideos([...completedVideos, videoId]);
            setPoints(points + pointsToAdd);
            completeChallenge(pointsToAdd);
        }
    };

    return (
        <div className="bg-neutral-800 p-5 w-4/5 m-auto">
            <h2 className="text-slate-50 text-5xl text-center">{`${pathname.slice(1)} Lectures`}</h2>
            <p className="text-slate-200 text-3xl mb-6 text-right">Points earned: {points}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videoDetail.map((video, index) => (
                    <div key={index} className="bg-slate-800 border rounded-md shadow-md p-4">
                        <h3 className="text-neutral-300 text-2xl text-center font-semibold">{video.title}</h3>
                        <div className="aspect-ratio aspect-ratio-16/9">
                            <iframe
                                title={video.title}
                                className="w-full h-[180px]"
                                src={`https://www.youtube.com/embed/${video.videoId}`}
                                allowFullScreen
                            ></iframe>
                        </div>
                        <button
                            className={`mt-2 px-4 py-2 text-xl text-white rounded-md transition-bg ${completedVideos.includes(video.videoId)
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-red-600 hover:bg-red-700 cursor-pointer'
                                }`}
                            onClick={() => handleVideoCompletion(video.videoId, 10)} // 10 points for completing a video
                            disabled={completedVideos.includes(video.videoId)}
                        >
                            {completedVideos.includes(video.videoId) ? 'Completed' : 'Complete'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoLec;
