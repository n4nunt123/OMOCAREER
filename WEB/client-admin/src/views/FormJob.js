import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDataCompanies } from "../store/actions/companyAction"
import { addJob } from '../store/actions/jobAction'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function FormJob() {
  const [data, setData] = useState({
    title: '',
    description: '',
    jobType: '',
    companyId: ''
  })
  const [skills, setSkills] = useState({
    skillOne: {
      skill: '',
      level: ''
    },
    skillTwo: {
      skill: '',
      level: ''
    },
    skillThree: {
      skill: '',
      level: ''
    },
    skillFour: {
      skill: '',
      level: ''
    },
    skillFive: {
      skill: '',
      level: ''
    }
  })
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { companies } = useSelector((state) => {
    return state.companyReducer
  })

  useEffect(() => {
    dispatch(getDataCompanies())
  }, [])

  const payload = { data, skills }

  const sumbitForm = async (e) => {
    e.preventDefault()

    await dispatch(addJob(payload))
      .then(res => {
        if (!res.err) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You success saved data',
            showConfirmButton: false,
            timer: 1500
          })
  
          navigate('/jobs')
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
      <form onSubmit={sumbitForm}>

        <div className="mb-3">
          <label htmlFor="title-job" className="form-label">Job Title</label>
          <input 
            type="text"
            className="form-control"
            id="title-job"
            placeholder='Input your job title...'
            onChange={e => {
              setData({
                ...data,
                title: e.target.value
              })
            }}
            value={data.title}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description-job" className="form-label">Job Description</label>
          <input 
            type="text" 
            className="form-control" 
            id="description-job" 
            placeholder='Input your job description...'
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
          <label htmlFor="type-job" className="form-label">Job Type</label>
          <input 
            type="text" 
            className="form-control" 
            id="type-job" 
            placeholder='Input your job type...'
            onChange={e => {
              setData({
                ...data,
                jobType: e.target.value
              })
            }}
            value={data.jobType}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="Company-job" className="form-label">Company</label>
          <select 
            className="form-select"
            onChange={e => {
              setData({
                ...data,
                companyId: e.target.value
              })
            }}
            value={data.companyId}
          >
            <option selected hidden>Select Company</option>
            {companies.map(el => {
              return <option key={el.id} value={el.id}>{el.name}</option>
            })}
          </select>
        </div>

        {/* <h2>{JSON.stringify(skills, null, 2)}</h2> */}
        <div className="mb-3">
          <label className="form-label">Job Skills <span className="small text-danger">(min 2 skill)</span></label>
          <div className="row">
            <div className="col">
              <input 
                type="text" 
                className="form-control mb-3" 
                id="skill-one-job" 
                placeholder='Skill 1...'
                onChange={e => {
                  setSkills({
                    ...skills,
                    skillOne: {
                      ...skills.skillOne,
                      skill: e.target.value
                    }
                  })
                }}
                value={skills.skillOne.skill}
              />
            </div>
            <div className="col">
              <select 
                className="form-select"
                onChange={e => {
                  setSkills({
                    ...skills,
                    skillOne: {
                      ...skills.skillOne,
                      level: e.target.value
                    }
                  })
                }}
                value={skills.skillOne.level}
              >
                <option selected hidden>Select Level</option>
                <option value="beginer">Beginer</option>
                <option value="intermediate">Intermediate</option>
                <option value="advance">Advance</option>
              </select>
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <input type="text" 
                className="form-control mb-3" 
                id="skill-two-job" 
                placeholder='Skill 2...'
                onChange={e => {
                  setSkills({
                    ...skills,
                    skillTwo: {
                      ...skills.skillTwo,
                      skill: e.target.value
                    }
                  })
                }}
                value={skills.skillTwo.skill}
              />
            </div>
            <div className="col">
              <select 
                className="form-select"
                onChange={e => {
                  setSkills({
                    ...skills,
                    skillTwo: {
                      ...skills.skillTwo,
                      level: e.target.value
                    }
                  })
                }}
                value={skills.skillTwo.level}
              >
                <option selected hidden>Select Level</option>
                <option value="beginer">Beginer</option>
                <option value="intermediate">Intermediate</option>
                <option value="advance">Advance</option>
              </select>
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <input type="text" className="form-control mb-3" 
                id="skill-three-job" 
                placeholder='Skill 3...'
                onChange={e => {
                  setSkills({
                    ...skills,
                    skillThree: {
                      ...skills.skillThree,
                      skill: e.target.value
                    }
                  })
                }}
                value={skills.skillThree.skill}
              />
            </div>
            <div className="col">
              <select 
                className="form-select"
                onChange={e => {
                  setSkills({
                    ...skills,
                    skillThree: {
                      ...skills.skillThree,
                      level: e.target.value
                    }
                  })
                }}
                value={skills.skillThree.level}
              >
                <option selected hidden>Select Level</option>
                <option value="beginer">Beginer</option>
                <option value="intermediate">Intermediate</option>
                <option value="advance">Advance</option>
              </select>
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <input type="text" 
                className="form-control mb-3" 
                id="skill-four-job" 
                placeholder='Skill 4...'
                onChange={e => {
                  setSkills({
                    ...skills,
                    skillFour: {
                      ...skills.skillFour,
                      skill: e.target.value
                    }
                  })
                }}
                value={skills.skillFour.skill}
              />
            </div>
            <div className="col">
              <select 
                className="form-select"
                onChange={e => {
                  setSkills({
                    ...skills,
                    skillFour: {
                      ...skills.skillFour,
                      level: e.target.value
                    }
                  })
                }}
                value={skills.skillFour.level}
              >
                <option selected hidden>Select Level</option>
                <option value="beginer">Beginer</option>
                <option value="intermediate">Intermediate</option>
                <option value="advance">Advance</option>
              </select>
            </div>
          </div>
          
          <div className="row">
            <div className="col">
              <input type="text" 
                className="form-control mb-3" 
                id="skill-five-job" 
                placeholder='Skill 5...'
                onChange={e => {
                  setSkills({
                    ...skills,
                    skillFive: {
                      ...skills.skillFive,
                      skill: e.target.value
                    }
                  })
                }}
                value={skills.skillFive.skill}
              />
            </div>
            <div className="col">
              <select 
                className="form-select"
                onChange={e => {
                  setSkills({
                    ...skills,
                    skillFive: {
                      ...skills.skillFive,
                      level: e.target.value
                    }
                  })
                }}
                value={skills.skillFive.level}
              >
                <option selected hidden>Select Level</option>
                <option value="beginer">Beginer</option>
                <option value="intermediate">Intermediate</option>
                <option value="advance">Advance</option>
              </select>
            </div>
          </div>
          
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default FormJob