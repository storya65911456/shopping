import { RouterProvider } from 'react-router-dom';
import './i18n';
import router from './routers/routes';

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
