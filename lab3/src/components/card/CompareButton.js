import {useCallback, useEffect, useRef, useState} from "react";
import {Notification} from "../utils/notifications";

const FavouriteButton = ({ title }) => {
  const [showNotification, setShowNotification] = useState(false);
  const timeoutRef = useRef();

  const onClick = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    setShowNotification(true);
    timeoutRef.current = setTimeout(() => setShowNotification(false), 1000);
  }, [showNotification]);

  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
      setShowNotification(false);
    }
  }, []);

  return (
    <>
      <div onClick={onClick} className="compare">
        💹
      </div>
      {showNotification && <Notification message={`Зараз порівняєм ${title}!`} />}
    </>
  )
}

export default FavouriteButton;