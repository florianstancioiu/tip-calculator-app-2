import { IRootState } from '../store';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatorActions } from '../store/calculator';

import classes from './SelectTip.module.css';

const availablePercentages = [5, 10, 15, 25, 50];

const SelectTip = () => {
  const tipPercentage = useSelector(
    (state: IRootState) => state.calculator.tipPercentage
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTip, setActiveTip] = useState<number>(tipPercentage);

  const dispatch = useDispatch();
  const setPercentage = (percentage: number, index: number) => {
    setActiveTip(index);
    dispatch(calculatorActions.setTipPercentage({ tipPercentage: percentage }));
    dispatch(calculatorActions.calculateTipAmountAndTotal());
  };
  const setPercentageFromInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      calculatorActions.setTipPercentage({ tipPercentage: event.target.value })
    );
    dispatch(calculatorActions.calculateTipAmountAndTotal());
  };

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Select Tip %</p>
      <div className={classes['tip-percentages-wrapper']}>
        {availablePercentages.map((percentage, index) => {
          const percentageClass =
            percentage === tipPercentage
              ? `${classes['tip-percentage']} ${classes.active}`
              : classes['tip-percentage'];

          return (
            <div
              onClick={() => setPercentage(percentage, index)}
              key={index}
              className={percentageClass}
            >
              {percentage}%
            </div>
          );
        })}
        <input
          type='text'
          className={classes['tip-percentage-input']}
          onClick={() => setActiveTip(-1)}
          onChange={setPercentageFromInput}
          placeholder='Custom'
        />
      </div>
    </div>
  );
};

export default SelectTip;
