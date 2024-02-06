const People = (props) => {
  let people = "Number of People";
  let inputError = "Can’t be zero";
  const inputStyle = props.error
    ? { ...styles.amount, outline: "2px solid #E17457" }
    : styles.amount;
  return (
    <div className="people-container">
      <div className="error">
        <h2 style={styles.txt}>{people}</h2>
        {props.error ? <p style={styles.error}>{inputError}</p> : ""}
      </div>

      <input
        style={inputStyle}
        type="text"
        placeholder="0"
        required
        className="people-amount"
        onKeyDown={(e) => {
          if(!(e.key >= '0' && e.key <= '9' || e.key === 'Backspace')){
            e.preventDefault()
          }
        }}
        value={props.people}
        onChange={props.peopleChange}
      />
    </div>
  );
};
const styles = {
  txt: {
    color: "#5E7A7D",
    fontSize: "16px",
    textAlign: "left",
  },
  amount: {
    borderRadius: "5px",
    backgroundColor: "#f3f9fa",
    border: "none",
    textAlign: "right",
    padding: "6px 18px",
    marginTop: "6px",
    color: "#00474B",
    fontSize: "24px",
    fontWeight: 700,
    width: "100%",
  },
  error: {
    color: "#E17457",
    fontSize: "16px",
  },
};
export default People;
