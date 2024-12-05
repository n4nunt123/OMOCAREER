import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [url])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error('Internal Server Error')
      const datas = await response.json()
      setData(datas)
    } catch (err) {
      setErr(err)
    } finally {
      setLoading(true)
    }
  }

  return [data, err, loading]
}

export default useFetch