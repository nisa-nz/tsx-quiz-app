import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";

// components
import QuestionCard from "./components/QuestionCard";
import Header from "./components/Header";

// types
import { QuestionState, Difficulty } from "./API";

// styles
import { GlobalStyle } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  // states
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    try {
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.HARD
      );
      setQuestions(newQuestions);
    } catch (err) {
      console.log(err);
    }

    // setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const revealAnswer = () => {
    setShowAnswer(true);
    setShowNextBtn(true);
  };

  const nextQuestion = () => {
    // move to the next question, check not last
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
      setShowAnswer(false);
      setShowNextBtn(false);
    }
  };

  return (
    <div className="w-100 vh-100 bg-near-black">
      <GlobalStyle />
      <Header />

      <div className="db pt6 mb2"></div>
      {/* conditionally render start button */}
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <div
          className="f3 w-50 tc center link br2 ph3 pv2 mb2 near-black bg-light-green pointer dim"
          onClick={startTrivia}
        >
          start
        </div>
      ) : null}

      {/* conditionally render loading */}
      {loading && (
        <p className="f3 w-50 tc center link br2 ph3 pv2 mb2 light-green">
          loading...
        </p>
      )}

      {/* conditionally render QuestionCard */}
      {!loading && !gameOver && (
        <>
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answer}
          />
          <div
            className="f3 w-50 tc center link br2 ph3 pv2 mb2 near-black bg-light-red pointer dim"
            onClick={revealAnswer}
          >
            {" "}
            show answer{" "}
          </div>
        </>
      )}

      {/* conditionally render answer */}
      {!loading && !gameOver && showAnswer && (
        <h3 className="f1 green tc">{`${questions[number].correct_answer}`}</h3>
      )}

      {/* conditionally render next button */}
      {!gameOver && !loading && showNextBtn && (
        <div
          className="f3 w-50 tc center link br2 ph3 pv2 mb2 near-black bg-light-green pointer dim"
          onClick={nextQuestion}
        >
          next question
        </div>
      )}
    </div>
  );
};

export default App;
