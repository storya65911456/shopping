import { useEffect, useState } from 'react';
const DarkMode = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('theme') === 'dark';
        setDarkMode(isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };
    return (
        <div className=''>
            <button
                className='p-2 bg-gray-300 dark:bg-gray-700 rounded-md'
                onClick={toggleDarkMode}
            >
                切换黑暗模式
            </button>
            <h1 className='text-2xl'>Tailwind CSS + React + TypeScript 黑暗模式</h1>
        </div>
    );
};

export default DarkMode;
