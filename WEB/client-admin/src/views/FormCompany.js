import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addCompany } from "../store/actions/companyAction"
import Swal from 'sweetalert2'

function FormCompany() {
  const [data, setData] = useState({
    name: '',
    companyLogo: '',
    location: '',
    email: '',
    description: ''
  })
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  const submitForm = async (e) => {
    e.preventDefault()

    await dispatch(addCompany(data))
      .then((res) => {
        if (!res.err) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You success saved data',
            showConfirmButton: false,
            timer: 1500
          })
  
          navigate('/companies')
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

  return (
    <div className="container form-container">
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="name-company" className="form-label">Company Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name-company"
            onChange={e => {
              setData({
                ...data,
                name: e.target.value
              })
            }}
            value={data.name}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="logo-company" className="form-label">Company Logo</label>
          <input 
            type="url" 
            className="form-control" 
            id="logo-company"
            onChange={e => {
              setData({
                ...data,
                companyLogo: e.target.value
              })
            }}
            value={data.companyLogo}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email-company" className="form-label">Company Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email-company"
            onChange={e => {
              setData({
                ...data,
                email: e.target.value
              })
            }}
            value={data.email}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="description-company" className="form-label">Company Description</label>
          <input 
            type="text" 
            className="form-control" 
            id="description-company"
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
          <label htmlFor="location-company" className="form-label">Company Location</label>
          <input 
            type="text" 
            className="form-control" 
            id="location-company"
            onChange={e => {
              setData({
                ...data,
                location: e.target.value
              })
            }}
            value={data.location}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default FormCompany