import { useState } from "react"
import { useDispatch } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import { login } from '../store/actions/userAction'
import Swal from 'sweetalert2'

function LoginPage() {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const access_token = localStorage.getItem('access_token')
  if (access_token) {
    return <Navigate to={'/companies'} />
  }


  const loginEvent = (e) => {
    e.preventDefault()

    dispatch(login(data))
      .then(res => {
        console.log(res)
        if (!res.err) {
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
    <section className="container">
      <div className="row login-page">
        <div className="title-login">
          <h3>LOGIN</h3>
        </div>
        
        <div className="form-login">
          <form onSubmit={loginEvent}>

            <div className="form-group mb-4">
              <div className="d-flex justify-content-between">
                <label className="text-black" htmlFor="login-email">Email:</label>
                <label className="text-danger text-end fw-bold">*</label>
              </div>
              <input 
                name="email" 
                id="login-email" 
                className="form-control" 
                placeholder="Input your email here..." 
                autoComplete="off"
                onChange={e => {
                  setData({
                    ...data,
                    email: e.target.value
                  })
                }}
                value={data.email}
              />
            </div>

            <div className="form-group mb-4">
              <div className="d-flex justify-content-between">
                <label className="text-black" htmlFor="login-password">Password:</label>
                <label className="text-danger text-end fw-bold">*</label>
              </div>
              <input 
                type="password" 
                name="password" 
                id="login-password" 
                className="form-control" 
                placeholder="Input your password here..." 
                autoComplete="off"
                onChange={e => {
                  setData({
                    ...data,
                    password: e.target.value
                  })
                }}
                value={data.password}
              />
            </div>

            <button className="btn btn-outline-primary mb-3" id="login-button" type="submit">LOGIN</button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginPage