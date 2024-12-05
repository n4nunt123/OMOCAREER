import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { deleteCompany } from '../store/actions/companyAction'
import { deleteJob } from '../store/actions/jobAction'
import Swal from 'sweetalert2'

function TableRow(props) {
  const dispatch = useDispatch()
  
  const eventDeleteCompany = (e, id) => {
    e.preventDefault()
    dispatch(deleteCompany(id))
      .then(res => {
        if (!res.err) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You success deleted data',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          throw new Error('Internal Server Error')
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
  
  const eventDeleteJob = (e, id) => {
    e.preventDefault()
    dispatch(deleteJob(id))
      .then(res => {
        if (!res.err) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You success deleted data',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          throw new Error('Internal Server Error')
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

  const location = useLocation()
  if (location.pathname.toLocaleLowerCase() == '/companies') {
    return <tr>
      <th scope="row">{props.company.id}</th>
      <td>{props.company.name}</td>
      <td>{props.company.location}</td>
      <td>{props.company.email}</td>
      <td>{props.company.description}</td>
      <td>
        <Link to={`edit/${props.company.id}`} className='btn btn-outline-warning'>Edit</Link> 
        <button onClick={ e => eventDeleteCompany(e, props.company.id)} className='btn btn-outline-danger'>Delete</button>
      </td>
    </tr>
  } else if (location.pathname.toLocaleLowerCase() == '/jobs') {
    return <tr>
      <th scope="row">{props.job.id}</th>
      <td>{props.job.title}</td>
      <td>{props.job.description}</td>
      <td>{props.job.Skills.map(el => el.name).join(', ')}</td>
      <td>{props.job.jobType}</td>
      <td>{props.job.Company.name}</td>
      <td>{props.job.User.email}</td>
      <td>
        <Link to={`edit/${props.job.id}`} className='btn btn-outline-warning'>Edit</Link> 
        <button onClick={ e => eventDeleteJob(e, props.job.id)} className='btn btn-outline-danger'>Delete</button></td>
      </tr>
  } else if (location.pathname.toLocaleLowerCase() == '/users') {
    return <tr>
      <th scope="row">{props.user.id}</th>
      <td>{props.user.username}</td>
      <td>{props.user.email}</td>
      <td>{props.user.phoneNumber}</td>
      <td>{props.user.address}</td>
      <td>{props.user.role}</td>
    </tr>
  }

  return (
    <tr>
      <td>DATA NOT FOUND</td>
    </tr>
  )
}

export default TableRow