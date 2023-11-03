import { useEffect, useState } from "react";
import { apiFetch } from "../api";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await apiFetch(`/notifications`);
      if (response.status === 200) {
        const data = await response.json();
        setNotifications(data);
      }
    })();
  }, []);

  return (
    <div className="notifications-wrapper">
      {notifications.map((notification) => (
        <div className="notification">{notification.message}</div>
      ))}
    </div>
  );
};

export default Notifications;
