import { useEffect, useState } from 'react';
import Picture from '../../common/picture/1..jpg';
import videoFile from '../../common/video/MJ116.mp4';
import Carousel from '../components/Carousel';
import FlipClock from '../components/Fliper/FlipClock';
import JPanimate from '../components/JPanimate';
import Test from '../components/test';
import VideoPlayer from '../components/ViderPlayer';

const About = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 10);
        }, 1000);

        // 清理副作用，当组件卸载时停止计时器
        return () => clearInterval(interval);
    }, []);

    const slides = [
        {
            id: 1,
            imageUrl: 'https://via.placeholder.com/800x400?text=Slide+1',
            altText: 'Slide 1'
        },
        {
            id: 2,
            imageUrl: 'https://via.placeholder.com/800x400?text=Slide+2',
            altText: 'Slide 2'
        },
        {
            id: 3,
            imageUrl: 'https://via.placeholder.com/800x400?text=Slide+3',
            altText: 'Slide 3'
        },
        {
            id: 4,
            imageUrl: 'https://via.placeholder.com/800x400?text=Slide+4',
            altText: 'Slide 4'
        },
        {
            id: 5,
            imageUrl: 'https://via.placeholder.com/800x400?text=Slide+5',
            altText: 'Slide 5'
        },
        {
            id: 6,
            imageUrl: 'https://via.placeholder.com/800x400?text=Slide+6',
            altText: 'Slide 6'
        },
        {
            id: 7,
            imageUrl: 'https://via.placeholder.com/800x400?text=Slide+7',
            altText: 'Slide 7'
        }
    ];
    return (
        <div className='h-[200%]'>
            <div className='flex items-center justify-center h-[20%] md:h-[25%]'>
                <div className='container h-full'>
                    <div className='text-3xl font-bold text-center flex items-center justify-center h-[10%]'>
                        {/* Image Carousel */}
                    </div>
                    <Carousel slides={slides} />
                </div>
            </div>
            <div className='flex-col items-center justify-center h-[10%] md:h-[15%] overflow-hidden'>
                <div className='h-[5%]'></div>
                <div className='flex items-center justify-center h-full w-full'>
                    <div className='container h-[90%]'>
                        <JPanimate n={seconds} />
                    </div>
                </div>
            </div>
            <div className='flex-col h-auto w-full flex items-center justify-center'>
                <div className='h-[15px]'></div>
                <div className='container h-[90%]'>
                    <VideoPlayer
                        src={videoFile}
                        poster={Picture}
                        className='w-full px-4'
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
