import classes from './TipValue.module.css';

export interface TipValueProps {
  title: string;
  value: number;
}

const TipValue = ({ title, value }: TipValueProps) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <p className={classes.title}>{title}</p>
        <p className={classes.person}>/ person</p>
      </div>
      <div className={classes.value}>{value}</div>
    </div>
  );
};

export default TipValue;
