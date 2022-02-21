import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.logoutAndName}>
				<p className={styles.name}> James </p>
				<Button className={styles.logoutButton} buttonText={'Logout'}></Button>
			</div>
		</header>
	);
};

export default Header;
