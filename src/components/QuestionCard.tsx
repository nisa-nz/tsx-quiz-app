import React from "react";

// types
import { AnswerObject } from '../App';

// styles
import { QuestionCardWrapper } from '../App.styles'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => (
  <QuestionCardWrapper>
    <p className="number">
      question: {questionNum} / {totalQuestions}
    </p>

    <p dangerouslySetInnerHTML={{ __html: question }}></p>

    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </QuestionCardWrapper>
);

export default QuestionCard;
