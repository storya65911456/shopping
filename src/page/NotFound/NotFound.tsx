import { useNavigate } from 'react-router-dom';
import Button from '../../assets/components/Button';

const NotFound = () => {
    const go = useNavigate();

    return (
        <div className='h-screen2'>
            <div className='h-full w-full pt-10 font-myFont'>
                <div className='h-[70%] w-full bg-404 bg-center bg-no-repeat'>
                    <h1 className=' flex items-center justify-center text-8xl text-black'>
                        404
                    </h1>
                </div>
                <div className='h-[30%]'>
                    <h1 className='flex items-center justify-center text-2xl'>
                        Look like you're lost
                    </h1>

                    <p className='flex items-center justify-center'>
                        the page you are looking for not available!
                    </p>

                    <div className='flex items-center justify-center pt-2'>
                        <Button
                            className={'flex items-center justify-center'}
                            onClick={() => {
                                go('/', { replace: true });
                            }}
                        >
                            Go To Home
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
