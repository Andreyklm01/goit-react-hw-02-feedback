const Statistic = ({ good, neutral, bad, total, percentage }) => (
  <section>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {percentage}%</p>
  </section>
);

export default Statistic;
