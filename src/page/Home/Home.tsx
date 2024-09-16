import { Outlet } from 'react-router-dom';
import GiftMenu from '../components/GiftMenu';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>
            <div className='text-white h-screen2'>
                <div className='h-[10%]'>
                    <Navbar />
                </div>

                <div className='h-[80%]'>
                    <Outlet />
                </div>
                <GiftMenu />
            </div>
        </>
    );
};

export default Home;
