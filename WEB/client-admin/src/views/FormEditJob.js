import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDataCompanies } from "../store/actions/companyAction"
import { addJob, editJob, getDataJob } from '../store/actions/jobAction'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

function FormJob() {
  const [data, setData] = useState({
    title: '',
    description: '',
    jobType: '',
    companyId: '',
  })

  const { loadingJob } = useSelector(state => {
    return state.jobReducer
  })

  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { companies } = useSelector((state) => {
    return state.companyReducer
  })
  

  useEffect(() => {
    dispatch(getDataCompanies())
    dispatch(getDataJob(id))
      .then(res => {
        setData(res.data)
      })
  }, [loadingJob])

  const sumbitForm = async (e) => {
    e.preventDefault()
    await dispatch(editJob(data, id))
      .then(res => {
        if (!res.err) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You success saved data',
            showConfirmButton: false,
            timer: 1500
          })
  
          navigate('/jobs')
        } else {
          throw new Error('Please Complate your Input')
        }
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        })
      })
  }

  const renderData = () => {
    if (!loadingJob) {
      return (
        <div className="container form-container">
          <form onSubmit={sumbitForm}>

            <div className="mb-3">
              <label htmlFor="title-job" className="form-label">Job Title</label>
              <input 
                type="text"
                className="form-control"
                id="title-job"
                placeholder='Input your job title...'
                onChange={e => {
                  setData({
                    ...data,
                    title: e.target.value
                  })
                }}
                value={data.title}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description-job" className="form-label">Job Description</label>
              <input 
                type="text" 
                className="form-control" 
                id="description-job" 
                placeholder='Input your job description...'
                onChange={e => {
                  setData({
                    ...data,
                    description: e.target.value
                  })
                }}
                value={data.description}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="type-job" className="form-label">Job Type</label>
              <input 
                type="text" 
                className="form-control" 
                id="type-job" 
                placeholder='Input your job type...'
                onChange={e => {
                  setData({
                    ...data,
                    jobType: e.target.value
                  })
                }}
                value={data.jobType}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="Company-job" className="form-label">Company</label>
              <select 
                className="form-select"
                onChange={e => {
                  setData({
                    ...data,
                    companyId: e.target.value
                  })
                }}
                value={data.companyId}
              >
                <option selected hidden>Select Company</option>
                {companies.map(el => {
                  return <option key={el.id} value={el.id}>{el.name}</option>
                })}
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
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
  )
}

export default FormJob