import logo from './logo.jpg';
import styles from './Logo.module.css';

const Logo = () => {
	return <img src={logo} alt='logo' className={styles.logo} />;
};

export default Logo;
