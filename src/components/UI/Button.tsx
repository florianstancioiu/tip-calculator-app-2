import classes from './Button.module.css';

export interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return <button className={classes.btn}>{title}</button>;
};

export default Button;
