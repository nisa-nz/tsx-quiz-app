import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";

// components
import QuestionCard from "./components/QuestionCard";

// types
import { QuestionState, Difficulty } from "./API";

// styles
import { GlobalStyle, Wrapper } from "./App.styles";

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
  // const [score, setScore] = useState(0);
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

  // const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   if (!gameOver) {
  // user answer
  // const answer = e.currentTarget.value;

  // check user answer against correct answer
  // const correct = questions[number].correct_answer === answer;

  // add score if correct
  // if (correct) setScore((prev) => prev + 1);

  // save answer to answer array
  //     const AnswerObject = {
  //       question: questions[number].question,
  //       answer,
  //       correct,
  //       correctAnswer: questions[number].correct_answer,
  //     };

  //     setUserAnswers((prev) => [...prev, AnswerObject]);
  //   }
  // };

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
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>NISA Quiz Bowl</h1>

        {/* conditionally render start button */}
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            start
          </button>
        ) : null}

        {/* conditionally render score */}
        {/* {!gameOver ? <p className="score">score: {score}</p> : null} */}

        {/* conditionally render loading */}
        {loading && <p>loading...</p>}

        {/* conditionally render QuestionCard */}
        {!loading && !gameOver && (
          <>
            <QuestionCard
              questionNum={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answer}
              // correctAnswer={questions[number].correct_answer}
              // userAnswer={userAnswers ? userAnswers[number] : undefined}
              // callback={showAnswer}
            />

            <button onClick={revealAnswer}> show answer </button>
          </>
        )}

        {/* conditionally render answer */}
        {!loading &&
          !gameOver &&
          showAnswer &&
          (<h3>{`${questions[number].correct_answer}`}</h3>)}

        {/* conditionally render next button */}
        {!gameOver &&
        !loading &&
        showNextBtn&& (
          <button className="next" onClick={nextQuestion}>
            next question
          </button>
        )}
      </Wrapper>
    </>
  );
};

export default App;
