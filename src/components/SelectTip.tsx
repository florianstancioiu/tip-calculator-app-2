import { ChangeEvent } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { calculatorActions } from '../store/calculator';

import classes from './SelectTip.module.css';

const availablePercentages = [5, 10, 15, 25, 50];

const SelectTip = () => {
  const [activeTip, setActiveTip] = useState<number>();
  const dispatch = useDispatch();
  const setPercentage = (percentage: number, index: number) => {
    setActiveTip(index);
    dispatch(calculatorActions.setTipPercentage({ tipPercentage: percentage }));
  };
  const setPercentageFromInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      calculatorActions.setTipPercentage({ tipPercentage: event.target.value })
    );
  };

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Select Tip %</p>
      <div className={classes['tip-percentages-wrapper']}>
        {availablePercentages.map((percentage, index) => {
          const percentageClass =
            index === activeTip
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
