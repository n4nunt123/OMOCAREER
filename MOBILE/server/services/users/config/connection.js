const { MongoClient } = require("mongodb")

const uri = `mongodb+srv://omocareer:omocareer@omocareer.vctw0cw.mongodb.net`;
const dbName = 'omocareer'
let dbConnection

const client = new MongoClient(uri);

async function connection() {
  try {
    await client.connect();
    const database = client.db(dbName);
    dbConnection = database
    console.log(dbConnection, 'connected ')
    return database
  } catch(err) {
    console.log(err)
    await client.close();
    return err
  } 
}

function connectdb() {
  console.log('CONNECT DB TEST')
  console.log(dbConnection)
  return dbConnection
}

module.exports = { connection, connectdb }