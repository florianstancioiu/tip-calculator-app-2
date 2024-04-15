import Input from './UI/Input';
import PersonIcon from '../images/icon-person.svg';

const NumberOfPeople = () => {
  return (
    <>
      <Input title='Number of People' defaultValue='1' icon={PersonIcon} />
    </>
  );
};

export default NumberOfPeople;
