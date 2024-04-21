import { IRootState } from '../store';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatorActions } from '../store/calculator';

import Input from './UI/Input';
import DollarIcon from '../images/icon-dollar.svg';

const Bill = () => {
  const dispatch = useDispatch();
  const bill = useSelector((state: IRootState) => state.calculator.bill);
  const billChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(calculatorActions.setBill({ bill: event.target.value }));
    dispatch(calculatorActions.calculateTipAmountAndTotal());
  };

  return (
    <>
      <Input
        title='Bill'
        defaultValue={bill}
        onChange={billChangeHandler}
        icon={DollarIcon}
      />
    </>
  );
};

export default Bill;
