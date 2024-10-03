import styles from './IconButton.module.scss';


export const IconButton = ({ icon: Icon, label }) => {
  return (
    <button aria-label={label} className={styles.btn}>
      <Icon width={24} height={24} />
    </button>
  );
};
