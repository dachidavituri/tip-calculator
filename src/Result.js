const Result = (props) => {
  let tip = "Tip Amount";
  let person = "/ person";
  let total = "Total";
  let reset = "RESET";
  return (
    <div className="result">
      <div className="amount">
        <div>
          <h2 style={styles.amount}>{tip}</h2>
          <span style={styles.person}>{person}</span>
        </div>
        <div style={styles.number} className="tip-amount">
          {props.tip + "$"}
        </div>
      </div>
      <div className="amount">
        <div>
          <h2 style={styles.amount}>{total}</h2>
          <span style={styles.person}>{person}</span>
        </div>
        <div style={styles.number} className="total-amount">
          {props.total + "$"}
        </div>
      </div>
      <button className="reset-btn" onClick={() => props.resetValues()}>
        {reset}
      </button>
    </div>
  );
};
const styles = {
  amount: {
    color: "#FFF",
    fontSize: "16px",
  },
  person: {
    color: "#7F9D9F",
    fontSize: "13px",
  },
  number: {
    color: "#26C2AE",
    letterSpacing: "-0.667px",
  },
};

export default Result;
