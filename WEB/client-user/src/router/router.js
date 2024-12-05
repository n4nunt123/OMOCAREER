import { createBrowserRouter } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import Home from '../views/Home'
import LandingPage from '../views/LandingPage'
import DetailJob from '../components/DetailJob'
import Discover from '../views/Discover'

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: 'home',
        element: <Home />,
        children: [
          {
            path: 'jobs/:jobId',
            element: <DetailJob />
          }
        ]
      },
      {
        path: 'discover',
        element: <Discover />
      }
    ]
  },
  {
    path: '/',
    element: <LandingPage />
  }
])

export default router