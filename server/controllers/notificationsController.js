import { db } from "../mysql.js";
import Notification from "../models/Notification.js";

export async function getNotifications(req, res) {
    if (!req.session.user) {
        return res.status(401).json({ message: 'Not logged in' });
    }

    const query = `
        SELECT NotificationID, UserRole, Message, Timestamp
        FROM Notifications
        WHERE UserRole = ?
        ORDER BY Timestamp DESC
    `;

    console.log(req.session);

    const userRole = req.session.user.UserRole || 'regular';

    const [notificationRows,] = await db.query(query, [userRole]);
    const notifications = notificationRows.map(row => new Notification(
        row.NotificationID,
        row.UserRole,
        row.Message,
        row.Timestamp
    ));

    res.json(notifications);
}
