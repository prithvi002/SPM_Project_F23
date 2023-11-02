import express from 'express'
import cors from 'cors'
import session from 'cookie-session'
import { getNotifications } from './controllers/notificationsController.js'
import { getUsers } from './controllers/userController.js'
import { authenticateUser, logout } from './controllers/loginController.js'
import { registerUser } from './controllers/registerController.js'


const app = express()
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsOptions))

app.use(session({
    name: 'session',
    keys: ['samplesecret'],
    maxAge: 7 * 24 * 60 * 60 * 1000,
}))

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
app.post('/register', registerUser)
app.post('/logout', logout)

app.listen(5000, () => { console.log("Server started on port 5000") })
