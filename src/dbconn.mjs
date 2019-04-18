import MySql from 'mysql'

let dbConfig = {
      host: process.env.AROMO_DB_HOST,
      user: process.env.AROMO_DB_USER,
      password: process.env.AROMO_DB_PASSWORD,
      port: parseInt(process.env.AROMO_DB_PORT),
      db: process.env.AROMO_DB_NAME
    },
    con = MySql.createConnection(dbConfig)

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

export default con
