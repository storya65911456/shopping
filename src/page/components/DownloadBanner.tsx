import React, { useState } from 'react';

const DownloadBanner = () => {
    const [isVisible, setIsVisible] = useState(true); // 控制是否顯示通知

    const handleClose = () => {
        setIsVisible(false); // 點擊關閉按鈕後隱藏通知
    };

    if (!isVisible) return null; // 如果不可見，返回空值

    return (
        <div className='fixed top-0 left-0 w-full bg-yellow-400 p-4 shadow-lg z-50 sm:hidden'>
            {/* 左側內容 */}
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <button onClick={handleClose} className='text-xl text-gray-700 mr-4'>
                        ✖
                    </button>
                    <div>
                        <h1 className='text-lg font-bold text-black'>优塔娱乐城 APP</h1>
                        <p className='text-gray-700 text-sm'>优质的加密货币娱乐平台</p>
                    </div>
                </div>
                {/* 右側下載按鈕 */}
                <button className='bg-red-400 text-white px-4 py-2 rounded-lg'>
                    下载
                </button>
            </div>
        </div>
    );
};

export default DownloadBanner;
