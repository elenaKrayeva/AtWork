import { IconButton } from '../../IconButton/IconButton';
import HeartIcon from '@assets/icons/heart.svg?react';
import BellIcon from '@assets/icons/notification.svg?react';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const avatarUrl = useSelector((state) => state.user.avatarUrl);
  const userName = useSelector((state) => state.user.userName);

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.icons}>
          <IconButton icon={HeartIcon} label="Добавить в избранное" />
          <IconButton icon={BellIcon} label="Уведомления" />
        </div>
        <div className={styles.registeredMenu}>
          <div>
            {avatarUrl ? (
              <img src={avatarUrl} alt="User Avatar" className={styles.avat} />
            ) : (
              <p>No Avatar</p>
            )}
          </div>
          <div>
            {userName ? (
              <p className={styles.userName}>{userName}</p>
            ) : (
              <p className={styles.userName}>Anon</p>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
