import { db } from "../mysql.js";

export async function authenticateUser(req, res) {
    if (req.session.user) {
        return res.status(200).json({ message: "Success", data: req.session.user });
    }

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    const query = `
        SELECT * FROM User WHERE Email = ? AND Password = ?
    `;
    try {
        const result = await db.query(query, [email, password]);
        if (result[0].length > 0) {
            const user = result[0][0];
            req.session.user = user;
            return res.status(200).json({ message: "Success", data: user });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export async function logout(req, res) {
    req.session = null;
    return res.status(200).json({ message: "Success" });
}

export async function check(req, res) {
    if (req.session.user) {
        return res.status(200).json({ message: "Success", data: req.session.user });
    } else {
        return res.status(401).json({ message: "Unauthorized" });
    }
}
