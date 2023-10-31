import { db } from "../mysql.js";
import Notification from "../models/Notification.js";

export async function getUsers(req, res) {
    const query = `
        SELECT * FROM USER
    `;
    const users = await db.query(query);

    res.json(users);
}