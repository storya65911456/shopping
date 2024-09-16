import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaAngleDown } from 'react-icons/fa';
import { IoEarth } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // 控制移動端主菜單的開關
    const [dropdownOpen, setDropdownOpen] = useState(false); // 控制第一組下拉選單
    const [dropdownOpen2, setDropdownOpen2] = useState(false); // 控制第二組下拉選單
    const [language, setLanguage] = useState('EN'); //顯示當前語系
    const navbarRef = useRef<HTMLDivElement>(null); // 追踪主導航的 DOM 元素

    const toggleMenu = () => {
        setIsOpen(!isOpen); // 切換移動設備主菜單
    };

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // 切換移動設備下拉選單
    };

    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2); // 切換第二組下拉選單
    };

    // 點擊外部區域關閉整個導航欄（主菜單和下拉選單）
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsOpen(false); // 關閉移動端導航
                setDropdownOpen(false); // 關閉移動端下拉選單
                setDropdownOpen2(false); // 關閉第二組下拉選單
            }
        };

        // 添加全局點擊事件監聽器
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            // 移除監聽器
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // 點擊後自動隱藏導航欄的方法
    const handleLinkClick = () => {
        setIsOpen(false); // 點擊選單項時關閉移動端導航
        setDropdownOpen(false); // 點擊選單項時關閉下拉選單
        setDropdownOpen2(false); // 點擊選單項時關閉第二組下拉選單
    };

    return (
        <nav
            ref={navbarRef}
            className='bg-[#242424] text-white fixed w-full h-[10%] top-0 left-0 z-10 shadow-md shadow-gray-800'
        >
            <div className='flex items-center justify-between h-full px-5'>
                {/* Logo */}
                <div className='flex-shrink-0'>
                    <Link to='/' className='text-xl font-bold' onClick={handleLinkClick}>
                        {t('Navbar.Title')}
                    </Link>
                </div>
                {/* Menu Button (Mobile) */}
                <div className='md:hidden'>
                    <div
                        onClick={toggleMenu}
                        className='text-white hover:text-white focus:outline-none focus:text-white'
                    >
                        <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d={
                                    isOpen
                                        ? 'M6 18L18 6M6 6l12 12'
                                        : 'M4 6h16M4 12h16M4 18h16'
                                }
                            />
                        </svg>
                    </div>
                </div>
                {/* Full Menu (Desktop) */}
                <div className='hidden md:flex items-center space-x-4'>
                    <Link
                        to='/'
                        className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        onClick={handleLinkClick} // 點擊後關閉導航
                    >
                        {t('Navbar.Home')}
                    </Link>
                    {/* Dropdown with hover */}
                    {/* 下拉選單 */}
                    <div className='relative group'>
                        <div className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer flex justify-between items-center'>
                            <div>{t('Navbar.More')}</div>
                            &nbsp;
                            <FaAngleDown />
                        </div>
                        {/* Dropdown Menu */}
                        <div className='absolute hidden group-hover:flex flex-col right-0 pt-2 w-48'>
                            <div className='bg-white rounded-md shadow-md py-2 z-20'>
                                <Link
                                    to='/Game'
                                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                                    onClick={handleLinkClick} // 點擊後關閉導航
                                >
                                    {t('Navbar.Game')}
                                </Link>
                                <Link
                                    to='/ContactUs'
                                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                                    onClick={handleLinkClick} // 點擊後關閉導航
                                >
                                    {t('Navbar.Contact')}
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* 語言切換 */}
                    <div className='relative group'>
                        <div className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer flex justify-between items-center'>
                            <IoEarth fontSize='1.6rem' />
                            &nbsp;
                            {language}
                        </div>
                        {/* Dropdown Menu */}
                        <div className='absolute hidden group-hover:flex flex-col right-0 pt-2 w-48'>
                            <div className='bg-white rounded-md shadow-lg py-2 z-20'>
                                <div
                                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer'
                                    onClick={() => {
                                        changeLanguage('en');
                                        handleLinkClick();
                                        setLanguage('EN');
                                    }} // 點擊後關閉導航
                                >
                                    English
                                </div>
                                <div
                                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:cursor-pointer'
                                    onClick={() => {
                                        changeLanguage('zh');
                                        handleLinkClick();
                                        setLanguage('ZH');
                                    }} // 點擊後關閉導航
                                >
                                    繁體中文
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden bg-[#454545] mx-1 rounded-md shadow-md shadow-gray-800'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link
                            to='/'
                            className='text-gray-300 block px-3 py-2 rounded-md text-base font-medium'
                            onClick={handleLinkClick} // 點擊後關閉導航
                        >
                            {t('Navbar.Home')}
                        </Link>
                        <div>
                            <div
                                className='text-gray-300 block px-3 py-2 rounded-md text-base font-medium items-center'
                                onClick={toggleDropdown} // 點擊下拉菜單按鈕
                            >
                                <div className='flex items-center'>
                                    {t('Navbar.More')}
                                    &nbsp;
                                    <FaAngleDown />
                                </div>
                            </div>
                            {/* Dropdown Menu for Mobile */}
                            {dropdownOpen && (
                                <div className='bg-gray-600 shadow-inner shadow-gray-800'>
                                    <Link
                                        to='/Game'
                                        className='block px-4 py-2 text-gray-300 hover:bg-gray-700'
                                        onClick={handleLinkClick} // 點擊後關閉導航
                                    >
                                        {t('Navbar.Game')}
                                    </Link>
                                    <Link
                                        to='/ContactUs'
                                        className='block px-4 py-2 text-gray-300 hover:bg-gray-700'
                                        onClick={handleLinkClick} // 點擊後關閉導航
                                    >
                                        {t('Navbar.Contact')}
                                    </Link>
                                </div>
                            )}
                        </div>
                        {/* Second Dropdown for Mobile */}
                        <div>
                            <div
                                className='text-gray-300 block px-3 py-2 rounded-md text-base font-medium'
                                onClick={toggleDropdown2} // 點擊第二組下拉菜單按鈕
                            >
                                <div className='flex items-center'>
                                    <IoEarth fontSize='1.6rem' />
                                    &nbsp;
                                    {language}
                                    &nbsp;
                                    <FaAngleDown />
                                </div>
                            </div>
                            {dropdownOpen2 && (
                                <div className='bg-gray-600 shadow-inner shadow-gray-800'>
                                    <div
                                        className='block px-4 py-2 text-gray-300 hover:bg-gray-700'
                                        onClick={() => {
                                            changeLanguage('en');
                                            handleLinkClick();
                                            setLanguage('EN');
                                        }} // 點擊後關閉導航
                                    >
                                        English
                                    </div>
                                    <div
                                        className='block px-4 py-2 text-gray-300 hover:bg-gray-700'
                                        onClick={() => {
                                            changeLanguage('zh');
                                            handleLinkClick();
                                            setLanguage('ZH');
                                        }} // 點擊後關閉導航
                                    >
                                        繁體中文
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
