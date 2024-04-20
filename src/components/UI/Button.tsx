import classes from './Button.module.css';

export interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={classes.btn}>
      {title}
    </button>
  );
};

export default Button;
