import { useRoutes } from 'react-router-dom'
import LayuotRegistor from './Layouts/LayoutRegistor'
import Login from './Page/Login'
import Register from './Page/Registor'
import MainLayout from './Layouts/MainLayout'
import MainPage from './Page/MainPage'

export default function useRouterElement() {
  const RouteElements = useRoutes([
    {
      path: '/login',
      element: (
        <LayuotRegistor>
          <Login />
        </LayuotRegistor>
      )
    },
    {
      path: '/register',
      element: (
        <LayuotRegistor>
          <Register />
        </LayuotRegistor>
      )
    },
    {
      path: '',
      element: (
        <MainLayout>
          <MainPage />
        </MainLayout>
      )
    }
  ])
  return RouteElements
}
