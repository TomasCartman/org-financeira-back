import mysql, { ConnectionOptions } from 'mysql2'

export default function database()  {
    const access: ConnectionOptions = {
        user: process.env.MYSQL_USERNAME,
        database: process.env.MYSQL_DATABASE,
        password: process.env.MYSQL_PASSWORD
    }
    
    const conn = mysql.createConnection(access)
    
    conn.query('SELECT 1 + 1 AS `test`;', (_err, rows) => {
        /**
         * @rows: [ { test: 2 } ]
         */
    
        console.log(rows)
    })
}