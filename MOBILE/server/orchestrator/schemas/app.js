const { gql } = require('apollo-server');
const { default: axios } = require('axios');
const { appUrl } = require('../constants/servicesUrl')
const redis = require('../config/redis')

// App
const typeDefsApp = gql`
  type getJobs {
    id: ID
    title: String
    description: String
    jobType: String
    Company: Company
    Skills: [Skill]
    userMongoId: String
    companyId: Int
  }

  type getJob {
    id: ID
    title: String
    description: String
    jobType: String
    Company: Company
    Skills: [Skill]
    userMongo: userMongo
    userMongoId: String
    companyId: Int
  }

  type userMongo {
    _id: ID
    username: String
    email: String
    role: String
    phoneNumber: String
    address: String
  }

  type Company {
    id: ID
    name: String
    description: String
    location: String
    email: String
    companyLogo: String
  }

  type Skill {
    id: ID
    name: String
    level: String
  }

  type message {
    message: String
  }

  type getCompanies {
    id: ID
    name: String
    description: String
    location: String
    email: String
    companyLogo: String
  }
  
  type Query {
    jobs: [getJobs]
    job(id: Int): getJob
    companies: [getCompanies]
    message: message
  }

  input inputJob {
    title: String!
    description: String!
    jobType: String!
    Skills: [inputSkill]
    userMongoId: String!
    companyId: Int!
  }

  input inputSkill {
    name: String
    level: String
  }

  input inputUpdate {
    title: String
    description: String
    jobType: String
    companyId: Int
  }

  type Mutation {
    addJob(input: inputJob): message
    updateJob(input: inputUpdate, id: Int): message
    deleteJob(id: Int): message
  }
`

const resolversApp = {
  Query: {
    jobs: async () => {
      try {
        const dataJob = await redis.get('app:jobs')
        if(dataJob) {
          const data = JSON.parse(dataJob)
          return data
        } else {
          const { data } = await axios.get(`${appUrl}/jobs`)
          await redis.set('app:jobs', JSON.stringify(data))
          return data
        }
      } catch (err) {
        return err
      }
    },
    job: async (_, args) => {
      try {
        const { data } = await axios.get(`${appUrl}/jobs/${args.id}`)
        return data
      } catch (err) {
        return err
      }
    },
    companies: async () => {
      try {
        const dataCompanies = await redis.get('app:companies')
        if(dataCompanies) {
          const data = JSON.parse(dataCompanies)
          return data
        } else {
          const { data } = await axios.get(`${appUrl}/companies`)
          await redis.set('app:companies', JSON.stringify(data))
          return data
        }
      } catch (err) {
        return err
      }
    }
  },
  Mutation: {
    addJob: async (_, args) => {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${appUrl}/jobs`,
          data: args.input
        })
        await redis.del('app:jobs')
        return data
      } catch (err) {
        return err
      }
    },
    updateJob: async (_, args) => {
      try {
        const { data } = await axios({
          method: 'PUT',
          url: `${appUrl}/jobs/${args.id}`,
          data: args.input
        })
        await redis.del('app:jobs')
        return data
      } catch (err) {
        return err
      }
    },
    deleteJob: async (_, args) => {
      try {
        const { data } = await axios({
          method: 'DELETE',
          url: `${appUrl}/jobs/${args.id}`,
        })
        await redis.del('app:jobs')
        return data
      } catch (err) {
        return err
      }
    }
  }
}

module.exports = { typeDefsApp, resolversApp }