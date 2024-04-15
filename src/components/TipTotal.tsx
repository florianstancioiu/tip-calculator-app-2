import classes from './TipTotal.module.css';

import TipValue from './UI/TipValue';
import Button from './UI/Button';

const TipTotal = () => {
  return (
    <div className={classes.wrapper}>
      <TipValue title='Tip Amount' value={4.27} />
      <TipValue title='Total' value={32.79} />
      <Button title='Reset' />
    </div>
  );
};

export default TipTotal;
