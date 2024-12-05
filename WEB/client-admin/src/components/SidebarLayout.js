import Sidebar from "./Sidebar"
import { Navigate, Outlet } from 'react-router-dom'

function SideLayout() {
  const access_token = localStorage.getItem('access_token')
  if (!access_token) {
    return <Navigate to={'login'} />
  }
  return (
    <section className="data-entity">
      <Sidebar />
      <Outlet />
    </section>
  )
}

export default SideLayout