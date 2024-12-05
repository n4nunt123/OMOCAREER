import TableRow from "../components/TableRow"
import { getDataCompanies } from '../store/actions/companyAction'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function ListCompany() {
  const dispatch = useDispatch()
  const { companies, loadingCompanies } = useSelector((state) => {
    return state.companyReducer
  })

  useEffect(() => {
    dispatch(getDataCompanies())
  }, [loadingCompanies])

  const renderData = () => {
    if (!loadingCompanies) {
      return (
        <div className="table-data">
          <div className="title-table">
            <h2>List Company</h2>
            <Link to={'add'} className="btn btn-outline-secondary">Add New Company</Link>
          </div>
          <table className="table table-striped table-hover mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Company Name</th>
                <th scope="col">Location</th>
                <th scope="col">Email</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {companies && companies.map(el => {
                return <TableRow key={el.id} company={el} />
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

export default ListCompany