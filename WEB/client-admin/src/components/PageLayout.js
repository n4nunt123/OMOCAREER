import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'

function PageLayout() {
  return <div>
    <Navbar />
    <Outlet />
  </div>
}

export default PageLayout