import classes from './SelectTip.module.css';

const SelectTip = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Select Tip %</p>
      <div className={classes['tip-percentages-wrapper']}>
        <div className={classes['tip-percentage']}>5%</div>
        <div className={classes['tip-percentage']}>10%</div>
        <div className={classes['tip-percentage']}>15%</div>
        <div className={classes['tip-percentage']}>25%</div>
        <div className={classes['tip-percentage']}>50%</div>
        <input
          type='text'
          className={classes['tip-percentage-input']}
          placeholder='Custom'
        />
      </div>
    </div>
  );
};

export default SelectTip;
