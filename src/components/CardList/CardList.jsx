import { UserCard } from '../UserCard/UserCard';
import styles from './CardList.module.scss';

export const CardList = ({ title, users, isArchived }) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <div className={styles.cardList}>
        {users?.map((user) => (
          <UserCard key={user.id} user={user} isArchived={isArchived} />
        ))}
      </div>
    </div>
  );
};
