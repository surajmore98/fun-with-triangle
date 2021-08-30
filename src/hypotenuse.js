import { useState } from "react";
import { HypotenuseMessage } from "./data";

const Hypotenuse = () => {
    const [base, setBase] = useState(0);
    const [height, setHeight] = useState(0);
    const [result, setResult] = useState("");

    const CalculateHypotenuse = () => {
        const  hypotenuse = Math.sqrt(base*base + height*height);
        const message = HypotenuseMessage + hypotenuse;
        setResult(message);
    };

    return(
        <div>
            <h2>Calculate Hypotenuse of a triangle</h2>
            <div>
                <div>
                    <h3>Enter base value (a) =</h3>
                    <input className="input-field" type="number" onChange={(event) => setBase(parseInt(event.target.value))}  title="base"/>
                </div>
                <div>
                    <h3>Enter height value (b) =</h3>
                    <input className="input-field" type="number" onChange={(event) => setHeight(parseInt(event.target.value))}  title="height"/>
                </div>
            </div>
            <div>
                <div>
                    <button onClick={CalculateHypotenuse}>Calculate hypotenuse</button>
                </div>
            </div>
            <div>
                <h2>Hypotenuse formula</h2>
                <h2>√(base² + height²)</h2>
            </div>
            <div>
                <h2>{result}</h2>
            </div>
        </div>
    );
}

export default Hypotenuse;