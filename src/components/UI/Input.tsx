import classes from './Input.module.css';

export interface InputProps {
  title: string;
  defaultValue: number;
  icon: string;
  onChange?: () => void;
}

const Input = ({ title, defaultValue, icon, onChange }: InputProps) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.title}>{title}</label>
      <div className={classes['input-icon-wrapper']}>
        <input
          className={classes.input}
          onChange={onChange}
          type='text'
          defaultValue={defaultValue}
        />
        <img className={classes.icon} src={icon} alt='' />
      </div>
    </div>
  );
};

export default Input;
