const Bill = (props) => {
  let billTxt = "Bill";
  return (
    <div>
      <h2 style={styles.txt}>{billTxt}</h2>
      <input style={styles.amount} type="text" placeholder="0" required className='bill-amount' value={props.inputValue} onChange={props.inputChange}/>
    </div>
  );
};
const styles = {
  txt: {
    color: "#5E7A7D",
    fontSize: "16px",
    textAlign: 'left'
  },
  amount: {
    borderRadius: "5px",
    backgroundColor: "#f3f9fa",
    border: "none",
    textAlign: "right",
    padding: "6px 18px",
    marginTop: '6px',
    color: '#00474B',
    fontSize: "24px",
    fontWeight: 700,
    width: '100%'
  },

};
export default Bill;
