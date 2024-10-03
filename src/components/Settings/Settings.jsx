import { NavLink } from 'react-router-dom';
import userPhoto from '@assets/photo/settingsPhoto.jpg';
import styles from './Settings.module.scss';

const menuLinks = [
  { to: 'profile', label: 'Данные профиля' },
  { to: 'workspace', label: 'Рабочее пространство' },
  { to: 'privacy', label: 'Приватность' },
  { to: 'security', label: 'Безопасность' },
];

export const Settings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userPhoto}>
        <img src={userPhoto} alt="user" width="280px" height="485px" />
      </div>
      <nav>
        <ul className={styles.menu}>
          {menuLinks.map(({ to, label }) => (
            <li className={styles.menuItems} key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
