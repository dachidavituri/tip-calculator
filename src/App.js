import logo from "./images/logo.svg";
import "./App.css";
import Bill from "./Bill";
import TipBtns from "./TipBtns";
import People from "./People";
import Result from "./Result";
import { useState, useEffect } from "react";

function App() {
  const [resetClicked, setResetClicked] = useState(false);
  // for percent 5 10 15  25 50 function
  const [percent, setPercent] = useState(null);
  const changePercent = (percent) => {
    console.log(`select ${percent}`);
    setPercent(percent);
    setInputValue('')
  };
  // custom percent function
  const [inputValue, setInputValue] = useState("");
  const inputChange = (e) => {
    const value = e.target.value;
    if (parseInt(value, 10) >= 0 || value === "") {
      setInputValue(value);
    }
  };
  // bill amount function
  const [bill, setbillValue] = useState("");
  const billChange = (e) => {
    const value = e.target.value;
    if (parseInt(value, 10) >= 0 || value === "") {
      setbillValue(value);
    }
  };
  // people amount input
  const [peopleValue, setPeopleValue] = useState("");
  const [isError, setIsError] = useState(false);
  const peopleAmountChange = (event) => {
    const value = event.target.value;
    if (parseInt(value) === 0) {
      setPeopleValue(value);
      setIsError(true);
    } else {
      setIsError(false);
      setPeopleValue(value);
    }
  };
  // calculate total and tip
  const calculate = () => {
    const billAmount = parseFloat(bill);
    const numberOfPeople = parseInt(peopleValue);
    const tipPercent = inputValue
      ? parseFloat(inputValue)
      : percent
      ? parseFloat(percent)
      : 0;
    if (!isNaN(bill) && !isNaN(numberOfPeople) && !isNaN(tipPercent)) {
      const tipAmount = (
        ((billAmount / numberOfPeople) * tipPercent) /
        100
      ).toFixed(2);
      const totalAmount = (billAmount + numberOfPeople * tipAmount).toFixed(2);
      if (!isNaN(tipAmount) && !isNaN(totalAmount)) {
        return {
          tipAmount,
          totalAmount,
        };
      }
    }
    return {
      tipAmount: 0,
      totalAmount: 0,
    };
  };

  const result = calculate();
  // reset button function
  const reset = () => {
    setPercent(null);
    setInputValue("");
    setbillValue("");
    setPeopleValue("");
    setResetClicked(true);
  };
  // use effect change listener
  useEffect(() => {
    console.log("Updated inputValue:", inputValue);
    console.log("updated bill amount: ", bill);
    console.log("updated people value", peopleValue);
    console.log("updated percent value", percent);
  }, [inputValue, bill, peopleValue, percent]);
  // reset use effect
  useEffect(() => {
    if (resetClicked) {
      console.log("reset occured");
      setResetClicked(false);
    }
  }, [resetClicked]);
  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />
      <div className="main-container">
        <div className="amount-container">
          <Bill inputValue={bill} inputChange={billChange} />
          <TipBtns
            percented={percent}
            handle={changePercent}
            inputValue={inputValue}
            inputChange={inputChange}
          />
          <People
            error={isError}
            people={peopleValue}
            peopleChange={peopleAmountChange}
          />
        </div>
        <div>
          <Result
            tip={result.tipAmount}
            total={result.totalAmount}
            resetValues={reset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
