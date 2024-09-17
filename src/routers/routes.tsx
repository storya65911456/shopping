import { createBrowserRouter } from 'react-router-dom';
import About from '../page/About';
import ContactUs from '../page/ContactUs';
import Game from '../page/Game';
import Home from '../page/Home';
import Login from '../page/Login';
import NotFound from '../page/NotFound';

const router = createBrowserRouter([
    // 登入
    {
        path: '/',
        element: <Login />,
        errorElement: <NotFound />,
        children: []
    },
    // 入口
    {
        path: '/Home',
        element: <Home />,
        children: [
            { path: '', element: <About /> },
            { path: 'Game', element: <Game /> },
            { path: 'ContactUs', element: <ContactUs /> }
        ]
    }
]);

export default router;
