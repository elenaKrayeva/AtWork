import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Popup.module.scss';
import ClosePopupIcon from '@assets/icons/cross.svg?react';
import ChekedIcon from '@assets/icons/checked.svg?react';

export const Popup = ({ message, onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return ReactDOM.createPortal(
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <div className={styles.popupContent}>
          <ChekedIcon />
          <p className={styles.text}>{message}</p>
          <button className={styles.closePopupButton} onClick={onClose}>
            <ClosePopupIcon width="40px" height="40px" />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};
