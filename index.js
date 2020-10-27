const {DataTypes, Sequelize} = require('sequelize')
const sqlite = require('sqlite3').verbose()
const sequelize = new Sequelize('sqlite::memory:')

  // if (sequelize.authenticate())
  //   console.log('Connection Successful')  
  // else
  // console.log('Connection Failed!!')

const User = sequelize.define('User', {
  firstName : { type: DataTypes.STRING, allowNull: false },
  firstName : { type: DataTypes.STRING }
})

console.log(User)
console.log(sequelize.model.User)

