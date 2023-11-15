import { useEffect, useState } from "react";
import { apiFetch } from "../api";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

    const handleNotification = (message) => () => {

    console.log(message);
//         await apiFetch("/logout", { method: "POST" });
//         setUser(null);
//
//         navigate("/");
      };

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
        <div className="notification" onClick={handleNotification(notification.message)}>{notification.message}</div>
      ))}
    </div>
  );
};

export default Notifications;
