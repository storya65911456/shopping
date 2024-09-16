import { createBrowserRouter } from 'react-router-dom';
import About from '../page/About';
import ContactUs from '../page/ContactUs';
import Game from '../page/Game';
import Home from '../page/Home';
import NotFound from '../page/NotFound';

const router = createBrowserRouter([
    // 入口
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
        children: [
            { path: '', element: <About /> },
            { path: '/Game', element: <Game /> },
            { path: '/ContactUs', element: <ContactUs /> }
        ]
    }
]);

export default router;
