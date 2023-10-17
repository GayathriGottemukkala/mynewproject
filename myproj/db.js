import mysql from "mysql"
export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Gayathri@123",
    database:"blog"
})