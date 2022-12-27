import { useState } from "react";
import "./index.scss";
import { Game } from "./Game";
import { Result } from "./Result";
import { QUESTIONS } from "./constants";


const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = QUESTIONS[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  const percentage = Math.round((step / QUESTIONS.length) * 100);

  return (
    <div className="App">
      {step !== QUESTIONS.length ? (
        <Game percentage={percentage} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} questions={QUESTIONS} />
      )}
    </div>
  );
};

export default App;
