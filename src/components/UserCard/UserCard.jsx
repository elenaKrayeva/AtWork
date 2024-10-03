import { useUserActions } from '../../hooks/useUserCardActions';
import styles from './UserCard.module.scss';
import userPhoto from '@assets/photo/userPhoto.jpg';
import Dots from '@assets/icons/dots.svg?react';

export const UserCard = ({ user, isArchived }) => {
  const { isDropdownOpen, toggleDropdown, handleArchive, handleHide, handleEdit, handleActivate } =
    useUserActions(user);

  return (
    <div className={styles.container}>
      <img
        src={userPhoto}
        alt="avatar"
        className={`${styles.avatar} ${isArchived ? styles.grayscale : ''}`}
      />
      <div className={styles.infoContainer}>
        <div className={styles.infoBlock}>
          <div>
            <p className={`${styles.userName} ${isArchived ? styles.grayname : ''}`}>
              {user.username}
            </p>
            <p className={`${styles.companyName} ${isArchived ? styles.graycompany : ''}`}>
              {user.address.city}
            </p>
          </div>
          <div className={styles.dropdownBlock}>
            <button className={styles.dotsButton} onClick={toggleDropdown}>
              <Dots />
            </button>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {!isArchived ? (
                  <>
                    <button onClick={handleEdit} className={styles.dropBtn}>
                      Редактировать
                    </button>
                    <button onClick={handleArchive} className={styles.dropBtn}>
                      Архивировать
                    </button>
                    <button onClick={handleHide} className={styles.dropBtn}>
                      Скрыть
                    </button>
                  </>
                ) : (
                  <button onClick={handleActivate} className={styles.dropBtn}>
                    Активировать
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <p className={`${styles.userCity} ${isArchived ? styles.grayCity : ''}`}>
          {user.company.name}
        </p>
      </div>
    </div>
  );
};
