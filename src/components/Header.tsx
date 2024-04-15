import classes from './Header.module.css';
import LogoSvg from '../images/logo.svg';

const Header = () => {
  return (
    <div className={classes['logo-wrapper']}>
      <img className={classes.logo} src={LogoSvg} alt='Logo Image' />
    </div>
  );
};

export default Header;
