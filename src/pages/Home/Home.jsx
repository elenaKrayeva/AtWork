import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/usersSlice';
import { Loader } from '../../components/Loader/Loader';

import { CardList } from '../../components/CardList/CardList';
import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useDispatch();
  const { users, archive, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') return <Loader />;
  if (status === 'failed') return <p className={styles.error}>Ошибка: {error}</p>;
  return (
    <div className={styles.container}>
      <div>
        <CardList title="Активные" users={users} isArchived={false} />
      </div>

      <div>
        <CardList title="Архив" users={archive} isArchived={true} />
      </div>
    </div>
  );
};
