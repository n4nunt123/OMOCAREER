import TableRow from "../components/TableRow"
import { getDataJobs } from '../store/actions/jobAction'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Link } from 'react-router-dom'

function ListJob() {
  const dispatch = useDispatch()
  const { jobs, loadingJobs } = useSelector((state) => {
    return state.jobReducer
  })

  useEffect(() => {
    dispatch(getDataJobs())
  },[loadingJobs])

  const renderData = () => {
    if (!loadingJobs) {
      return (
        <div className="table-data">
          <div className="title-table">
            <h2>List Job</h2>
            <Link to={'add'} className="btn btn-outline-secondary ">Add New Job</Link>
          </div>
          <table className="table table-striped table-hover mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" width="120px">Title Job</th>
                <th scope="col" width="250px">Description</th>
                <th scope="col" width="150px">Skills Requirement</th>
                <th scope="col">Type</th>
                <th scope="col">Company</th>
                <th scope="col">Author</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(el => {
                return <TableRow key={el.id} job={el}/>
              })}
            </tbody>
          </table>
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

export default ListJob