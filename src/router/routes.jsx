import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home } from '../pages/Home/Home';
import { EditUser } from '../pages/EditUser/EditUser';
import { ProfileData } from '../components/ProfileData/ProfileData';
import { Workspace } from '../components/Workspace/Workspace';
import { Privacy } from '../components/Privacy/Privacy';
import { Security } from '../components/Security/Security';
import { NotFound } from '../pages/NotFound/NotFound';

export const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/edit/:userId',
        element: <EditUser />,
        children: [
          { path: 'profile', element: <ProfileData /> },
          { path: 'workspace', element: <Workspace /> },
          { path: 'privacy', element: <Privacy /> },
          { path: 'security', element: <Security /> },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
