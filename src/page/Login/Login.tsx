import { SiShopee } from 'react-icons/si';
import DarkMode from '../components/DarkMode';
// #dbdcdc 八曜 白
// #ee4d2d 蝦皮 橘
const Login = () => {
    return (
        <div className='h-screen2'>
            <div className='h-[12%] bg-Mwhite text-black'>
                <DarkMode />
            </div>
            <div className='h-[80%] bg-shopee text-Mwhite flex justify-center items-center dark:bg-shopee/60'>
                {/* 1040*453 */}
                <div className='h-[80%] w-[80%] flex justify-between items-center'>
                    <div className='h-full w-[40%] flex-col items-center justify-center'>
                        <div className='flex items-center justify-center h-[55%]'>
                            <SiShopee className='h-full w-full' />
                        </div>
                        <div className='h-[5%]'></div>
                        <div className='text-6xl flex items-center justify-center h-[10%]'>
                            蝦皮購物
                        </div>
                        <div className='h-[10%]'></div>
                        <div className='flex items-center justify-center h-[7%] text-2xl'>
                            台灣與東南亞地區
                        </div>
                        <div className='flex items-center justify-center h-[7%] text-2xl'>
                            最優質線上購物平台
                        </div>
                    </div>

                    <div className='h-[90%] w-[40%] bg-Mwhite max-w-md'>
                        {/* 4000*453 */}
                    </div>
                </div>
            </div>
            Login
        </div>
    );
};

export default Login;
