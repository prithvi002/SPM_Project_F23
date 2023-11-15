import mysql2 from 'mysql2/promise';

export const db = mysql2.createPool({
    host: "127.0.0.1",
    user: 'spm_f23',
    password: 'password',
    database: 'spm_f23'
})
