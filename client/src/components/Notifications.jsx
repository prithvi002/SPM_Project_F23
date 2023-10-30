import { useEffect, useState } from "react";
import { apiFetch } from "../api";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    (async () => {
      //   const response = await apiFetch("/notifications");
      //   const data = await response.json();
      // Dummy data for testing
      const data = [
        { message: "Ongoing offer: use code NEW for 20% off." },
        {
          message:
            "See US NIH Travel Guidelines for safe travels during the COVID-19 pandemic.",
        },
      ];
      setNotifications(data);
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
