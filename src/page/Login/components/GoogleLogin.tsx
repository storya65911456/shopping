import { useGoogleLogin } from '@react-oauth/google';

import { FcGoogle } from 'react-icons/fc';
const GoogleLogin = () => {
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            // 成功登入後會取得 token
            console.log('Login successful, token:', tokenResponse);
            // 假設 tokenResponse 裡面有 access_token 或 id_token
            const { access_token } = tokenResponse;

            // 將 token 發送到後端
            sendTokenToBackend(access_token);
        },
        onError: (error) => {
            console.error('Login failed:', error);
        }
    });

    const sendTokenToBackend = async (token: string) => {
        try {
            const response = await fetch('https://your-backend-api.com/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token })
            });

            if (!response.ok) {
                throw new Error('Failed to authenticate');
            }

            const data = await response.json();
            console.log('Backend response:', data);
            // 處理後端返回的結果，例如儲存應用內的 token
            localStorage.setItem('authToken', data.authToken);
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    return (
        <div
            className='shadow border border-black h-full w-full px-5 flex justify-between items-center'
            onClick={() => login()}
        >
            <FcGoogle fontSize={'1.4rem'} />
            <div className='m-auto'>使用Google帳號登入</div>
        </div>
    );
};

export default GoogleLogin;
