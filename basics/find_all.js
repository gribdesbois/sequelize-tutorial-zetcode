const Sequelize = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()
const {
  DIALECT, DB_USER, WORD, TEST_DB, DB_URL,
} = process.env

const path = `${DIALECT}://${DB_USER}:${WORD}@${DB_URL}${TEST_DB}`
const sequelize = new Sequelize(path, { operatorsAliases: false })

const Note = sequelize.define('notes', {
  description: Sequelize.STRING,
})
exports.findAllRows = async () => {
  const notes = await Note.findAll({ raw: true })
  console.log(notes)
  sequelize.close()
}