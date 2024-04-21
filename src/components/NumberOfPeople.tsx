import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculatorActions } from '../store/calculator';
import { IRootState } from '../store';

import Input from './UI/Input';
import PersonIcon from '../images/icon-person.svg';

const NumberOfPeople = () => {
  const dispatch = useDispatch();
  const numberOfPeople = useSelector(
    (state: IRootState) => state.calculator.numberOfPeople
  );

  const setNumberOfPeopleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      calculatorActions.setNumberOfPeople({
        numberOfPeople: event.target.value,
      })
    );
    dispatch(calculatorActions.calculateTipAmountAndTotal());
  };

  return (
    <>
      <Input
        title='Number of People'
        onChange={setNumberOfPeopleHandler}
        defaultValue={numberOfPeople}
        icon={PersonIcon}
      />
    </>
  );
};

export default NumberOfPeople;
