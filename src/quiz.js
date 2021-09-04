import {QuizData} from "./data";
import { useState } from "react";

function Quiz() {
    const [answerList, setAnswerList] = useState([]);
    const [msg, setMsg] = useState("");

    const valueChange = (value, id) => {
        let answers = answerList;
        let current = answers.find(a => a.id === id);
        if(current) {
            answers.splice(answers.indexOf(current), 1);
        }
        answers.push({ id: id , value: value });
        setAnswerList(answers);
    };

    const checkAnswer = () => {
        let score = 0;
        answerList.forEach(ans => {
            const data = QuizData.find(a => a.id === ans.id);
            if(data) {
                score = ans.value === data.answer ? score + 1 : score;    
            }            
        });
        const msg = "The score is " + score;
        setMsg(msg);
    }
    return(
        <div>
            <h1>Quiz on triangles</h1>
            <h2>For each correct answer you will get 1 point</h2>
            <div>                
                {
                    QuizData.map((a) => {
                        return(
                            <div key={a.id}>
                                <h3>{a.question}</h3>
                                <div className="answer-list">
                                    {
                                        a.answerList.map((ans, index) => {
                                            return (
                                                <div className="answer-section">   
                                                    <input className="radio-input" type="radio"  key={index} name={"question" + a.id} 
                                                     onChange={(event) => {
                                                        valueChange(event.target.value, a.id)
                                                    }}  value={ans}/><p>{ans}</p>
                                                </div>

                                            );
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }   
            </div>
            <div>
                <button onClick={checkAnswer}>Submit Answer</button>
                <h2>{msg}</h2>
            </div>
        </div>
    );
}

export default Quiz;