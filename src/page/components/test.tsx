import { BsFillCaretUpFill } from 'react-icons/bs';
import { PiArrowFatLinesUpBold } from 'react-icons/pi';
import { RiArrowUpDoubleLine } from 'react-icons/ri';
import { TbArrowBigUpLines } from 'react-icons/tb';

const Test = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <div className=' animate-bounceUpAndFade'>
                <PiArrowFatLinesUpBold className='text-3xl text-green-500' />
                {/* <RiArrowUpDoubleLine className='text-3xl text-yellow-500' /> */}
            </div>
        </div>
    );
};

export default Test;
