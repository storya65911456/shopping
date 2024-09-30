import FacebookLogin, { FacebookLoginClient } from '@greatsumini/react-facebook-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect, useRef, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { CiLock } from 'react-icons/ci';
import { SiShopee } from 'react-icons/si';
import { SlUser } from 'react-icons/sl';
import { cn } from '../../common/utils';
import DarkMode from '../components/DarkMode';
import GoogleLogin from './components/GoogleLogin';

// #dbdcdc 八曜 白
// #ee4d2d 蝦皮 橘

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isLoginEnabled, setIsLoginEnabled] = useState(false);

    // 使用useRef綁定input
    const accountRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleInputChange = () => {
        const accountValue = accountRef.current?.value.trim() || '';
        const passwordValue = passwordRef.current?.value.trim() || '';
        setIsLoginEnabled(accountValue !== '' && passwordValue !== '');
    };

    return (
        <div className='h-screen2 bg-Mwhite text-[#2c3338]'>
            <div className='h-[10%] w-full bg-Mwhite shadow-sm'>
                <DarkMode />
            </div>
            <div className='h-[85%] w-full p-5'>
                <div className='h-[20%] w-full flex justify-center items-center'>
                    <SiShopee fontSize={'3.5rem'} color={'#ee4d2d'} />
                </div>
                <div className='h-[2%]'></div>
                <div className='h-[40%] w-full'>
                    {/* 帳號輸入 */}
                    <div className='h-[25%] w-full flex justify-center items-center border-b border-[#2c3338]'>
                        <SlUser fontSize={'1.2rem'} className='w-[10%]' />
                        <input
                            type='text'
                            ref={accountRef}
                            className='w-[90%] bg-transparent pl-2 focus:outline-none'
                            placeholder='電話號碼/Email/使用者名稱'
                            onInput={handleInputChange} // 追蹤輸入變動
                        />
                    </div>
                    {/* 密碼輸入 */}
                    <div className='h-[25%] w-full flex justify-center items-center border-b border-[#2c3338]'>
                        <CiLock fontSize={'1.5rem'} className='w-[10%]' />
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            ref={passwordRef}
                            className='w-[60%] bg-transparent pl-2 focus:outline-none'
                            placeholder='密碼'
                            onInput={handleInputChange} // 追蹤輸入變動
                        />
                        <div
                            onClick={togglePasswordVisibility}
                            className='w-[15%] flex justify-center items-center border-r border-[#2c3338]'
                        >
                            {passwordVisible ? (
                                <AiFillEyeInvisible size={24} />
                            ) : (
                                <AiFillEye size={24} />
                            )}
                        </div>
                        <div className='w-[15%] flex justify-center items-center'>
                            忘記?
                        </div>
                    </div>
                    {/* 登入按鈕 */}
                    <div className='h-[35%] py-3'>
                        <button
                            className={`h-full w-full text-white ${
                                isLoginEnabled ? 'bg-[#ee4d2d]' : 'bg-gray-400/40'
                            }`}
                            disabled={!isLoginEnabled} // 當帳號或密碼為空時禁用按鈕
                        >
                            登入
                        </button>
                    </div>
                    {/* 註冊 */}
                    <div className='h-[10%]'>
                        <div className='h-full w-full flex items-center justify-between'>
                            <div className='h-full w-[30%]'>註冊</div>
                            <div className='h-full w-[30%]'>使用簡訊登入</div>
                        </div>
                    </div>
                </div>
                {/* 三方登入 */}
                <div className='h-[43%]'>
                    <div className='flex items-center justify-center h-[15%]'>
                        <div className='w-20 border-t border-gray-400'></div>
                        <span className='mx-2 text-gray-500'>或</span>
                        <div className='w-20 border-t border-gray-400'></div>
                    </div>
                    {/* 三方 */}
                    <div className='h-[85%] pt-2'>
                        <GoogleOAuthProvider clientId='291747613276-mosebdke0p2d81kg9e3pgig8actjaitn.apps.googleusercontent.com'>
                            <div className='h-[30%] pt-2'>
                                <GoogleLogin />
                            </div>
                            <div className='h-[30%] pt-2'>
                                <FacebookLogin
                                    appId='1088597931155576'
                                    onSuccess={(response) => {
                                        console.log('Login Success!', response);
                                    }}
                                    onFail={(error) => {
                                        console.log('Login Failed!', error);
                                    }}
                                    onProfileSuccess={(response) => {
                                        console.log('Get Profile Success!', response);
                                    }}
                                />
                            </div>
                            <div className='h-[30%] pt-2'>
                                <GoogleLogin />
                            </div>
                        </GoogleOAuthProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
