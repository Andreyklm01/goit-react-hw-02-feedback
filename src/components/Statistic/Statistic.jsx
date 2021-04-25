import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, percentage }) => (
  <>
    {!total ? (
      <Notification message="No feedback given" />
    ) : (
      <section className={s.container}>
        <p className={s.text}>Good: {good}</p>
        <p className={s.text}>Neutral: {neutral}</p>
        <p className={s.text}>Bad: {bad}</p>
        <p className={s.total}>Total: {total}</p>
        <p className={s.percentage}>Positive feedback: {percentage}%</p>
      </section>
    )}
  </>
);
Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};

export default Statistic;
