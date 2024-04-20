import classes from './Calculator.module.css';

import Bill from './Bill';
import SelectTip from './SelectTip';
import NumberOfPeople from './NumberOfPeople';
import TipTotal from './TipTotal';

const Calculator = () => {
  return (
    <main className={classes.wrapper}>
      <div className={classes['left-inner-wrapper']}>
        <Bill />
        <SelectTip />
        <NumberOfPeople />
      </div>
      <div className={classes['right-inner-wrapper']}>
        <TipTotal />
      </div>
    </main>
  );
};

export default Calculator;
