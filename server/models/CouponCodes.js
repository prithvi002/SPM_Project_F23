// Schema:
//
// CREATE TABLE Notifications (
//     NotificationID INT AUTO_INCREMENT PRIMARY KEY,
//     UserRole ENUM('regular', 'admin'),
//     Message TEXT,
//     Timestamp DATETIME,
// );
export default class {
    constructor(notificationId, userRole, message, timestamp) {
        this.notificationId = notificationId;
        this.userRole = userRole;
        this.message = message;
        this.timestamp = timestamp;
    }
}
