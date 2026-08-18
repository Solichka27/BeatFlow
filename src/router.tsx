import { createBrowserRouter } from 'react-router-dom';

import Layout from './layout/layout/Layout';
import Home from './pages/home/Home';
import Favorites from './pages/favorites/Favorites';
import Album from './pages/album/Album';
import Artist from './pages/artist/Artist';
import NotFoundPage from './pages/notFound/NotFound';
import Search from './pages/search/Search';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'search',
                element: <Search />,
            },
            {
                path: 'favorites',
                element: <Favorites />,
            },
            {
                path: 'album/:id',
                element: <Album />,
            },
            {
                path: 'artist/:id',
                element: <Artist />,
            },
            {
                path: 's*',
                element: <NotFoundPage />,
            }
        ]
    }
])