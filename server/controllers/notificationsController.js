import { db } from "../mysql.js";
import Notification from "../models/Notification.js";

export async function getNotifications(req, res) {
    const query = `
        SELECT NotificationID, UserRole, Message, Timestamp
        FROM Notifications
        WHERE UserRole = 'regular'
        ORDER BY Timestamp DESC
    `;

    const [notificationRows,] = await db.query(query);
    const notifications = notificationRows.map(row => new Notification(
        row.NotificationID,
        row.UserRole,
        row.Message,
        row.Timestamp
    ));

    res.json(notifications);
}
