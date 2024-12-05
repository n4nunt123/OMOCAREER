import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDataJob } from '../store/actions/jobAction'

function DetailJob() {
  const { jobId } = useParams()
  const dispatch = useDispatch()
  const { job, loadingJob } = useSelector((state) => {
    return state.jobReducer
  })

  useEffect(()=> {
    dispatch(getDataJob(jobId))
  }, [jobId, loadingJob])

  const renderData = () => {
    if (!loadingJob) {
      return (
        <div className={`card card-detail ${!job.Company && 'hide-display'}`}>
          <img src={job.Company.companyLogo} className="card-img-top" alt=""/>
          <div className="card-body">
            <h1 className="card-text">{job.Company.name}</h1>
            <p className='card-text'>{job.Company.description}</p><br/>
            <h4 className="card-text">{job.title}</h4>
            <p className="card-text">Location: {job.Company.location}<br/>Description: {job.description}</p>
            <p className='card-text'>Skills Requirement:
            <ul>
            {job.Skills.map(el => {
              return <li>{el.name} - {el.level}</li>
            })}
            </ul></p><br/>
            <p className="card-text">Email: {job.Company.email}<br/>Written By: {job.User.email}</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="loading-loading">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    }
  }

  return (
    renderData()
  );
}

export default DetailJob;
