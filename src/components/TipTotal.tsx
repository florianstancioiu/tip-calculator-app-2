import { useDispatch, useSelector } from 'react-redux';
import { calculatorActions } from '../store/calculator';

import classes from './TipTotal.module.css';

import TipValue from './UI/TipValue';
import Button from './UI/Button';

const TipTotal = () => {
  const dispatch = useDispatch();
  const tipAmount = useSelector((state) => state.calculator.tipAmount);
  const total = useSelector((state) => state.calculator.total);

  const resetCalculatorHandler = () => {
    dispatch(calculatorActions.resetState());
  };

  return (
    <div className={classes.wrapper}>
      <TipValue title='Tip Amount' value={tipAmount} />
      <TipValue title='Total' value={total} />
      <Button onClick={resetCalculatorHandler} title='Reset' />
    </div>
  );
};

export default TipTotal;
