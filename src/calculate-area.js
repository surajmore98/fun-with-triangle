import { calculateAreaErrorMsg, calculateAreaResultMsg } from "./data";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CalculateArea = () => {
    const [firstSideValue, setFirstSideValue] = useState(0);
    const [secondSideValue, setSecondSideValue] = useState(0);
    const [thirdSideValue, setThirdSideValue] = useState(0);
    const [result, setResult] = useState("");

    const calculate = (event) => {
        event.preventDefault();
        let message = "";      
        if (
          firstSideValue + secondSideValue > thirdSideValue &&
          secondSideValue + thirdSideValue > firstSideValue &&
          firstSideValue + thirdSideValue > secondSideValue
        ) {
          const semiPerimeter =
            (firstSideValue + secondSideValue + thirdSideValue) / 2;
      
          const result = Math.sqrt(
            semiPerimeter *
              (semiPerimeter - firstSideValue) *
              (semiPerimeter - secondSideValue) *
              (semiPerimeter - thirdSideValue)
          ).toFixed(4);
         message = calculateAreaResultMsg + result;
        } else {
          message = calculateAreaErrorMsg;
        }
        setResult(message);
      }

    return(
        <div>
            <h2>Calculate Area of a triangle</h2>
            <form onSubmit={calculate}>
              <div>
                  <div>
                      <h3>Enter first side of a triangle</h3>
                      <input required="required" className="input-field" type="number" onChange={(event) => setFirstSideValue(parseInt(event.target.value))}  title="first" />
                  </div>
                  <div>
                      <h3>Enter second side of a triangle</h3>
                      <input required="required" className="input-field" type="number" onChange={(event) => setSecondSideValue(parseInt(event.target.value))}  title="second"/>
                  </div>
                  <div>
                      <h3>Enter third side of a triangle</h3>
                      <input required="required" className="input-field" type="number" onChange={(event) => setThirdSideValue(parseInt(event.target.value))}  title="third"/>
                  </div>
              </div>
              <div>
                  <div>
                      <button type="submit">Calculate</button>
                  </div>
              </div>
            </form>
            <div>
                <h2>{result}</h2>
            </div>
        </div>
    );
}

export default CalculateArea;