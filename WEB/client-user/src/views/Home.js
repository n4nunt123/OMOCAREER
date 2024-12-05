import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getDataJobs } from '../store/actions/jobAction'
import ListJob from '../components/ListJob'
import jobImage from '../assets/job.png'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { jobs } = useSelector((state) => {
    return state.jobReducer
  })

  const location = useLocation()
  useEffect(() => {
    dispatch(getDataJobs())
  }, [])


  const getDetail = (id, e) => {
    e.preventDefault()
    navigate(`jobs/${id}`)
  }

  return (
    <div className='HomePage'>
      <section className="data-entity">
        <div className="card-jobs">
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="title-list-group">Discover your opportunity</li>
              {jobs.map(el => {
                return <li 
                  className="list-group-item"
                  key={el.id}
                  onClick={(e) => getDetail(el.id, e)} 
                > 
                  <ListJob job={el} /> 
                </li> 
              })}
            </ul>
          </div>
        </div>

        <div className="card-data">
          <div className={`filler-job ${location.pathname !== '/home' && 'hide-display'}`}>
            <h1>Discover your opportunity</h1>
            <img src={jobImage} width="100%" className='image-job'/>
          </div>
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Home;
