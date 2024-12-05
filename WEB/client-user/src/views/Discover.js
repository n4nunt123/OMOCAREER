import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getDataCompanies } from '../store/actions/companyAction'
import CardDiscover from "../components/CardDiscover";

function Discover() {
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
        companies.map(el => {
          return (
            <CardDiscover data={el} key={el.id}/>
          )
        })
        
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
    <div className="container-discover">
      <div className="title-discover">
        <h1>Discover Our Partners</h1>
      </div>
      <div className="line-ex"></div>
      <section className="discover-page">
        {renderData()}
      </section>
    </div>
  );
}

export default Discover;
