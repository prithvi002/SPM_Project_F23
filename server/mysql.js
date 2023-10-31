import mysql2 from 'mysql2/promise';

export const db = mysql2.createPool({
    host: "127.0.0.1",
    user: 'root',
    password: 'SunnyHi5$',
    database: 'crud'
})
