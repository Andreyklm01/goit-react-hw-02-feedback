import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from './components/FeedbackButton';
import options from './components/options';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = ({ target }) => {
    const value = target.value;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  // countTotalFeedback()
  // countPositiveFeedbackPercentage()

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please Leave Feedback</h2>

        <FeedbackOptions
          // key={options}
          options={options}
          onLeaveFeedback={this.handleIncrement}
        />

        <h2> Statistic </h2>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
      </div>
    );
  }
}

export default App;
