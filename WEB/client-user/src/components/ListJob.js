function ListJob(props) {
  return (
    <div className="company-content">
      <div className="img-company">
        <img src={props.job.Company.companyLogo} alt="" className="img-fluid"/>
      </div>
      <div className="name-company">
        <p><b>{props.job.Company.name}</b><br/>{props.job.title}<br/><br/>{props.job.description}</p>
      </div>
      <div className="line-ex"></div>
      <div className="extra-information">
        <p className="small">Type: {props.job.jobType}</p>
      </div>
    </div>
  );
}

export default ListJob;
