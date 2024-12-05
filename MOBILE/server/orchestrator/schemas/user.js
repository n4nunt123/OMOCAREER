const { gql } = require('apollo-server');
const { default: axios } = require('axios');
const { userUrl } = require('../constants/servicesUrl')
const redis = require('../config/redis')

// User
const typeDefUser = gql`
  type getUsers {
    _id: ID
    username: String
    email: String
    phoneNumber: String
    role: String
    address: String
  }

  type getUser {
    _id: ID
    username: String
    email: String
    phoneNumber: String
    role: String
    address: String
  }

  type message {
    message: String
  }

  type Query {
    users: [getUsers]
    user(id: String): getUser
    message: message
  }

  input inputUser {
    username: String!
    password: String!
    phoneNumber: String
    email: String!
    address: String
  }

  type Mutation {
    addUser(input: inputUser): message
    deleteUser(id: String): message
  }
`

const resolversUser = {
  Query: {
    users: async () => {
      try {
        const dataUsers = await redis.get('user:datas')
        if (dataUsers) {
          const data = JSON.parse(dataUsers)
          return data
        } else {
          const { data } = await axios.get(`${userUrl}/users`)
          await redis.set('user:datas', JSON.stringify(data))
          return data
        }

      } catch (err) {
        return err
      }
    },
    user: async (_, args) => {
      try {
        const { data } = await axios.get(`${userUrl}/users/${args.id}`)
        return data
      } catch (err) {
        return err
      }
    }
  },
  Mutation: {
    addUser: async (_, args) => {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${userUrl}/users`,
          data: args.input
        })
        await redis.del('user:datas')
        return data
      } catch (err) {
        return err
      }
    },
    deleteUser: async (_, args) => {
      try {
        const { data } = await axios({
          method: 'DELETE',
          url: `${userUrl}/users/${args.id}`,
        })
        await redis.del('user:datas')
        return data
      } catch (err) {
        return err
      }
    }
  }
}

module.exports = { typeDefUser, resolversUser }