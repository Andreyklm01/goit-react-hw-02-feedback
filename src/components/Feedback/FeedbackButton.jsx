import PropTypes from 'prop-types';
import s from './FeedbackButton.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.feedback}>
    {options.map(option => (
      <button
        className={s.button}
        key={option}
        type="button"
        value={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
