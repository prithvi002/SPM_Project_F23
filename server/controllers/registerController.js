import { db } from "../mysql.js";
import User from "../models/User.js";

export async function registerUser(req, res) {
    const { name, email, password } = req.body;

    // Check if email already exists in the database
    const checkQuery = `
        SELECT UserID FROM User WHERE Email = ?
    `;

    const userExists = await db.query(checkQuery, [email]);

    if (userExists[0].length > 0) {
        return res.status(400).json({ message: 'User with this email already exists' });
    }

    // If the email is unique, proceed with user registration
    const insertQuery = `
        INSERT INTO User (Username, Password, Email, RegistrationDate, UserRole)
        VALUES (?, ?, ?, NOW(), 'regular')
    `;

    try {
        await db.query(insertQuery, [name, password, email]);

        // You can optionally return a success message or the newly created user's information
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
