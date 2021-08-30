import { useState } from "react";
import './App.css';

const notTriangleMsg = "Oh Oh! The angle doesn't form a triangle";
const triangleMsg = "Yay, the angles form a triangle!";
const triangleSum = 180;

function AnglesTriangles() {
    const [angle1, setAngle1] = useState(0);
    const [angle2, setAngle2] = useState(0);
    const [angle3, setAngle3] = useState(0);
    const [result, setResult] = useState("");

    const isTriangle  = () => {
        const total = angle1 + angle2 + angle3;
        setResult(total === triangleSum ? triangleMsg : notTriangleMsg);
    };

    return (
        <div>
            <h2>Angles of triangles</h2>
            <div>
                <h3>Angle1</h3>
                <input className="input-field" type="number" onChange={(event) => setAngle1(parseInt(event.target.value))}  title="angle1"/>
            </div>
            <div>
                <h3>Angle2</h3>
                <input className="input-field" type="number" onChange={(event) => setAngle2(parseInt(event.target.value))}  title="angle2"/>
            </div>
            <div>
                <h3>Angle3</h3>
                <input className="input-field" type="number" onChange={(event) => setAngle3(parseInt(event.target.value))}  title="angle3"/>
            </div>
            <div>
                <button onClick={isTriangle}>Is Triangle?</button>
            </div>
            <div>
                <h2>{result}</h2>
            </div>
        </div>
    );
}

export default AnglesTriangles;