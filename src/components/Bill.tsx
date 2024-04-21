import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { calculatorActions } from '../store/calculator';

import Input from './UI/Input';
import DollarIcon from '../images/icon-dollar.svg';

const Bill = () => {
  const dispatch = useDispatch();
  const billChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(calculatorActions.setBill({ bill: event.target.value }));
  };

  return (
    <>
      <Input
        title='Bill'
        defaultValue={0}
        onChange={billChangeHandler}
        icon={DollarIcon}
      />
    </>
  );
};

export default Bill;
