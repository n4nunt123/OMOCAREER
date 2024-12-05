import TableRow from "../components/TableRow"
import { getDataUsers } from '../store/actions/userAction'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

function ListUser() {
  const dispatch = useDispatch()
  const { users, loading } = useSelector((state) => {
    return state.userReducer
  })

  useEffect(() => {
    dispatch(getDataUsers())
  }, [loading])

  const renderData = () => {
    if (!loading) {
      return (
        <div className="table-data">
          <div className="title-table">
            <h1>List User</h1>
          </div>
          <table className="table table-striped table-hover mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map(el => {
                return <TableRow key={el.id} user={el}/>
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

export default ListUser