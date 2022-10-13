import {createPortal} from "react-dom";

const Notification = ({ message }) => {
  return createPortal(
    <div className="notification">
      {message}
    </div>,
    document.querySelector('.notificationContainer')
  );
};

export default Notification;