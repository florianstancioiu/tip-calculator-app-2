import { useDispatch } from 'react-redux';
import { calculatorActions } from '../store/calculator';

import Input from './UI/Input';
import PersonIcon from '../images/icon-person.svg';

const NumberOfPeople = () => {
  const dispatch = useDispatch();

  const setNumberOfPeopleHandler = (event) => {
    dispatch(
      calculatorActions.setNumberOfPeople({
        numberOfPeople: event.target.value,
      })
    );
  };

  return (
    <>
      <Input
        title='Number of People'
        onChange={setNumberOfPeopleHandler}
        defaultValue={1}
        icon={PersonIcon}
      />
    </>
  );
};

export default NumberOfPeople;
