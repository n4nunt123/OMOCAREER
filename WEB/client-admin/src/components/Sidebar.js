import { Link, Navigate } from 'react-router-dom'

function Sidebar() {
  const logout = () => {
    localStorage.clear()
  }

  return (
    <div className="filter-card">
      <div className="filter-area">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to={'companies'} className='sidebar-btn'>List Company</Link>
          </li>
          <li className="list-group-item">
            <Link to={'jobs'} className='sidebar-btn'>List Job</Link>
          </li>
          <li className="list-group-item">
            <Link to={'users'} className='sidebar-btn'>List User</Link>
          </li>
          <li className="list-group-item">
            <Link onClick={logout} to={'login'} className='sidebar-btn'>Logout</Link>
          </li>
          <li className="list-group-item"></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar