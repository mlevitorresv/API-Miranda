const mysql = require('mysql2');

const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD
const db_database = process.env.DB_DATABASE
const db_port = process.env.DB_PORT;



export const mysqlConnect = async () => {
    const connection = mysql.createConnection({
        host: db_host,
        user: db_user,
        password: db_password,
        port: db_port
    })

    try {
        await connection.promise().query(`
            CREATE DATABASE IF NOT EXISTS ${db_database}
        `)
        await connection.promise().query(`USE ${db_database}`)
        console.log('Success connection...')
    } catch (e) {
        console.error('DB error: ', e)
    }
}