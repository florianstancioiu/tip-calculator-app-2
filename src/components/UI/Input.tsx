import classes from './Input.module.css';

const Input = ({ title, defaultValue, icon }) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.title}>{title}</label>
      <div className={classes['input-icon-wrapper']}>
        <input
          className={classes.input}
          type='text'
          defaultValue={defaultValue}
        />
        <img className={classes.icon} src={icon} alt='' />
      </div>
    </div>
  );
};

export default Input;
