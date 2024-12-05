import { gql } from '@apollo/client'

export const GET_COMPANIES = gql`
  query Companies {
    companies {
      id
      name
      description
      location
      email
      companyLogo
    }
  }
`

export const GET_JOBS = gql`
  query Jobs {
    jobs {
      id
      title
      description
      jobType
      Company {
        name
        companyLogo
      }
    }
  }
`

export const GET_DETAIL_JOB = gql`
  query Job($jobId: Int) {
    job(id: $jobId) {
      id
      title
      description
      jobType
      Company {
        name
        description
        location
        email
        companyLogo
      }
      Skills {
        name
        level
      }
      userMongo {
        email
      }
    }
  }
`