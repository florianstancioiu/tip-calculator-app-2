import classes from './Calculator.module.css';

import Bill from './Bill';
import SelectTip from './SelectTip';
import NumberOfPeople from './NumberOfPeople';
import TipTotal from './TipTotal';

const Calculator = () => {
  return (
    <main className={classes.wrapper}>
      <Bill />
      <SelectTip />
      <NumberOfPeople />
      <TipTotal />
    </main>
  );
};

export default Calculator;
