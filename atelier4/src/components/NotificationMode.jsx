import React, { useState } from "react";

function NotificationMode({ setNotification }) {
  const [message, setMessage] = useState("");

  const handleRadioChange = (e) => {
    const value = e.target.value;

    setMessage(value);
    setNotification(value);
  };

  return (
    <div>
      <h2>Mode de notification</h2>

      <form>
        <label>
          <input
            type="radio"
            name="notification"
            value="Vous recevrez vos notifications par email"
            onChange={handleRadioChange}
          />
          Email
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="notification"
            value="Vous recevrez vos notifications par SMS"
            onChange={handleRadioChange}
          />
          SMS
        </label>
      </form>

      {message ? (
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</p>
      ) : null}
    </div>
  );
}

export default NotificationMode;
