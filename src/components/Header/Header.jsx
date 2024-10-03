import { Navbar } from './Navbar/Navbar';
import styles from './Header.module.scss';
import Logo from '@assets/icons/logo.svg?react';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <Logo width="124" height="24" />
        <Navbar />
      </div>
    </div>
  );
};
