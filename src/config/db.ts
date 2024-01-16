import mysql, { ConnectionOptions } from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD
const db_database = process.env.DB_DATABASE
const db_port = process.env.DB_PORT;



export const mysqlConnect = async () => {
    const connectionConfig: ConnectionOptions = {
        host: db_host,
        user: db_user,
        password: db_password,
        database: db_database
    }
    const connection = mysql.createConnection(connectionConfig)

    try {
        console.log('Success connection...')
        return connection;
    } catch (e) {
        console.error('DB error: ', e)
        throw e;
    }
}


export const executeQuery = async (query: string, params?: any[]) => {
    const connection = await mysqlConnect();
    try {
      return await connection.execute(query, params);
    } finally {
      connection.end();
    }
  };