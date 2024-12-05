import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import LoginPage from '../views/LoginPage'
import ListCompany from '../views/ListCompany'
import ListJob from '../views/ListJob'
import PageLayout from '../components/PageLayout'
import SideLayout from '../components/SidebarLayout'
import ListUser from '../views/ListUser'
import FormJob from '../views/FormJob'
import FormCompany from '../views/FormCompany'
import FormEditCompany from '../views/FormEditCompany'
import FormEditJob from '../views/FormEditJob'

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <LoginPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        element: <SideLayout />,
        children: [
          {
            path: 'companies',
            element: <ListCompany />
          },
          {
            path: 'jobs',
            element: <ListJob />
          },
          {
            path: 'users',
            element: <ListUser />
          },
          {
            path: 'jobs/add',
            element: <FormJob />
          },
          {
            path: 'companies/add',
            element: <FormCompany />
          },
          {
            path: 'companies/edit/:id',
            element: <FormEditCompany />
          },
          {
            path: 'jobs/edit/:id',
            element: <FormEditJob />
          },
        ]
      },
    ]
  }
])

export default router