import knex, { Client, Knex } from 'knex';

const dbConfig: Knex.Config = {
    client: 'mysql2',
    connection: {
      host : process.env.DB_HOST,
      port : +`${process.env.DB_PORT}`,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE,
      multipleStatements: false
    },
    useNullAsDefault: false,
    log: {
      warn(message) {
        console.log(message)
      },
      error(message) {
        console.log(message)
      },
      deprecate(message) {
        console.log(message)
      },
      debug(message) {
        console.log(message)
      }
    }
}
export const DB = knex(dbConfig)

