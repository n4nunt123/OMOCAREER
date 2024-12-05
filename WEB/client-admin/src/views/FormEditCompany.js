import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editCompany, getDataCompany } from "../store/actions/companyAction"
import Swal from 'sweetalert2'

function FormEditCompany() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [dataCompany, setDataCompany] = useState({
    name: '',
    companyLogo: '',
    location: '',
    email: '',
    description: ''
  })

  const { loadingCompany } = useSelector(state => {
    return state.companyReducer
  })

  useEffect(() => {
    dispatch(getDataCompany(id))
    .then(res => {
      setDataCompany(res.data)
    })
  }, [loadingCompany])
  
  const submitForm = (e) => {
    e.preventDefault()
    dispatch(editCompany(dataCompany, id))
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

  const renderData = () => {
    if (!loadingCompany) {
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
                  setDataCompany({
                    ...dataCompany,
                    name: e.target.value
                  })
                }}
                value={dataCompany.name}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="logo-company" className="form-label">Company Logo</label>
              <input 
                type="url" 
                className="form-control" 
                id="logo-company"
                onChange={e => {
                  setDataCompany({
                    ...dataCompany,
                    companyLogo: e.target.value
                  })
                }}
                value={dataCompany.companyLogo}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="email-company" className="form-label">Company Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email-company"
                onChange={e => {
                  setDataCompany({
                    ...dataCompany,
                    email: e.target.value
                  })
                }}
                value={dataCompany.email}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="description-company" className="form-label">Company Description</label>
              <input 
                type="text" 
                className="form-control" 
                id="description-company"
                onChange={e => {
                  setDataCompany({
                    ...dataCompany,
                    description: e.target.value
                  })
                }}
                value={dataCompany.description}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="location-company" className="form-label">Company Location</label>
              <input 
                type="text" 
                className="form-control" 
                id="location-company"
                onChange={e => {
                  setDataCompany({
                    ...dataCompany,
                    location: e.target.value
                  })
                }}
                value={dataCompany.location}
              />
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

export default FormEditCompany