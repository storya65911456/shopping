import { animated, useSpring } from '@react-spring/web';
import 'animate.css';
import { useEffect, useState } from 'react';
import { BsCoin } from 'react-icons/bs';
import { cn } from '../../common/utils';
import Test from './test';

interface JPanimateProps {
    n: number;
}

const JPanimate = ({ n }: JPanimateProps) => {
    const [shake, setShake] = useState(false);

    const { number } = useSpring({
        from: { number: 0, fontSize: '2rem', fontWeight: 300, letterSpacing: '0px' },
        to: { number: n, fontSize: '4rem', fontWeight: 700, letterSpacing: '5px' },
        delay: 0,
        config: { mass: 1000, tension: 170, friction: 26 }
    });

    useEffect(() => {
        // 当 n 是 100 的倍数时触发 shake
        if (n % 100 === 0 && n !== 0) {
            setShake(true);
        } else if (shake) {
            setShake(false);
        }

        // 清理副作用（可根据需要添加）
        return () => {
            setShake(false); // 当组件卸载时重置 shake 状态
        };
    }, [n, shake]);

    const formatNumber = (num: number) => {
        return num.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    };

    return (
        <div className='h-full lg:max-w-[65%] mx-auto w-full'>
            <div className='px-4 h-full'>
                {/* 外部容器增加動畫 */}
                <div
                    className={cn(
                        'h-full flex items-center justify-center bg-slate-500 shadow-slate-900 rounded-md',
                        'animate__animated animate__zoomInDown animate__delay-1s shadow-inner'
                    )}
                >
                    <div
                        className={cn([
                            'flex items-center justify-center h-full w-full p-2',
                            'animate__animated animate__delay-2s animate__flipInX'
                        ])}
                    >
                        <div
                            className={cn([
                                'flex items-center justify-center bg-[#242424] h-full w-full rounded-lg shadow-inner shadow-slate-900 ',
                                { 'animate__animated animate__heartBeat': shake }
                            ])}
                        >
                            <BsCoin
                                fontSize='3rem'
                                className='text-shadow shadow-purple-300'
                            />
                            &nbsp;&nbsp;
                            <animated.div className='text-6xl font-bold text-white text-shadow shadow-purple-300 font-LCD'>
                                {number.to((n) => formatNumber(n))}
                            </animated.div>
                            &nbsp;
                            <Test />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JPanimate;
