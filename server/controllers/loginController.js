import { db } from "../mysql.js";
import User from "../models/User.js";

export async function authenticateUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    const query = `
        SELECT UserID FROM User WHERE Email = ? AND Password = ?
    `;
    try {
        const result = await db.query(query, [email, password]);
        if (result[0].length > 0) {
            console.log(result);
            return res.status(200).json({ message: "Success" });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
