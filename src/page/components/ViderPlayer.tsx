// VideoPlayer.tsx
import React from 'react';

interface VideoPlayerProps {
    src: string;
    poster?: string; // Optional poster image
    className?: string; // Additional classes for styling
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, className }) => {
    return (
        <div
            className={`overflow-hidden h-full lg:max-w-[65%] mx-auto w-full ${className}`}
        >
            <video
                className='w-full h-auto rounded-md shadow-md shadow-gray-800 border-2'
                controls
                poster={poster}
            >
                <source src={src} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
