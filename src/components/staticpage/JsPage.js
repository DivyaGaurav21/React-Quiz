import React from 'react'
import VideoLec from './VideoLec'

const jsVideos = [
    {
        title: 'Lecture - 1',
        videoId: 'QFaFIcGhPoM',
    },
    {
        title: 'Lecture - 2',
        videoId: '9hb_0TZ_MVI',
    },
    {
        title: 'Lecture - 3',
        videoId: 'QFaFIcGhPoM',
    },
    {
        title: 'Lecture - 4',
        videoId: '9hb_0TZ_MVI',
    },
    {
        title: 'Lecture - 5',
        videoId: 'QFaFIcGhPoM',
    },
    {
        title: 'Lecture - 6',
        videoId: '9hb_0TZ_MVI',
    },
    // Add more video objects as needed
];

const JsPage = () => {
    return (
        <div>
            <>
                <VideoLec videoDetail={jsVideos} />
            </>
        </div>
    )
}

export default JsPage