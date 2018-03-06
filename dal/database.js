const config = require('config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var dbConfig = config.get('dbConfig');

let useUsername = dbConfig.username;
let usePassword = dbConfig.password;
if(dbConfig.username !== '' && dbConfig.password !== null) {
  useUsername = useUsername + ':';
  usePassword = usePassword + '@';
}
const dbConnStr = `mongodb://${useUsername}${usePassword}${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`

mongoose.connect(dbConnStr, {useMongoClient: true}).then(
  () => {
    console.log('Connected to MongoDb');
  },
  err => {
    console.log('MongoDb connection failure');
  }
)