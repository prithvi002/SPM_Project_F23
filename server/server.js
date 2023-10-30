import express from 'express'
import cors from 'cors'
import db from './db.js'
import { getNotifications } from './controllers/notificationsController.js'

const app = express()
app.use(cors())

app.get('/users', (req, res) => {
  const sql = "SELECT * FROM  users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.get('/notifications', getNotifications)

app.listen(5000, () => { console.log("Server started on port 5000") })
