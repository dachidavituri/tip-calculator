const TipBtns = (props) => {
  let tip = "Select Tip %";
  const buttonData = [
    { id: 5, text: "5%" },
    { id: 10, text: "10%" },
    { id: 15, text: "15%" },
    { id: 25, text: "25%" },
    { id: 50, text: "50%" },
  ];
  const getBtnStyles = (button) => ({
    backgroundColor: props.percented === button.id ? "#26C2Ae" : "",
    color: props.percented === button.id ? "#00474B" : "",
  });
  return (
    <div>
      <h2 style={styles.txt}>{tip}</h2>
      <div className="btn-section">
        {buttonData.map((button) => (
          <button
            key={button.id}
            className="btn"
            onClick={() => props.handle(button.id)}
            style={getBtnStyles(button)}
          >
            {button.text}
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          className="custom-percent"
          value={props.inputValue}
          onChange={props.inputChange}
        ></input>
      </div>
    </div>
  );
};
const styles = {
  txt: {
    color: "#5E7A7D",
    fontSize: "16px",
    fontWeight: 700,
    textAlign: "left",
  },
};
export default TipBtns;
