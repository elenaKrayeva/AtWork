import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Settings } from '../../components/Settings/Settings';
import Backarrow from '@assets/icons/backarrow.svg?react';
import styles from './EditUser.module.scss';

export const EditUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('profile');
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.arrowBack}>
        <Link to="/" className={styles.arrowBlock}>
          <Backarrow />
          <span>Назад</span>
        </Link>
      </div>
      <div className={styles.profileContainer}>
        <Settings />
        <Outlet />
      </div>
    </div>
  );
};
