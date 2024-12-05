import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCompanies } from '../store/actions/companyAction'

function useFetch(url) {
  const [data, setData] = useState([])
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchData()
  }, [url])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error('Internal Server Error')
      const datas = await response.json()
      setData(datas)
      const payload = { data: datas }
      dispatch(getCompanies(payload))
    } catch (err) {
      setErr(err)
    } finally {
      setLoading(true)
    }
  }

  return [data, err, loading]
}

export default useFetch