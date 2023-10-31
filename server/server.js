import express from 'express'
import cors from 'cors'
import {db} from './mysql.js'
import { getNotifications } from './controllers/notificationsController.js'
import { getUsers } from './controllers/userController.js'
import { authenticateUser } from './controllers/loginController.js'


const app = express()
app.use(cors())
app.use(express.json());

// app.get('/users', (req, res) => {
//   const sql = "SELECT * FROM  users";
//   db.query(sql, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   })
// })

app.get('/notifications', getNotifications)
app.get('/users', getUsers)
app.post('/login', authenticateUser)

app.listen(5000, () => { console.log("Server started on port 5000") })