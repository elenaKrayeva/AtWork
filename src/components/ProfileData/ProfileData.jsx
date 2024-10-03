import { EditForm } from '../EditForm/EditForm';
import styles from './ProfileData.module.scss';


export const ProfileData = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Данные профиля</h2>
      <EditForm />
    </div>
  )
}
