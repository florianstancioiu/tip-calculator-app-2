import Input from './UI/Input';
import DollarIcon from '../images/icon-dollar.svg';

const Bill = () => {
  return (
    <>
      <Input title='Bill' defaultValue='0' icon={DollarIcon} />
    </>
  );
};

export default Bill;
