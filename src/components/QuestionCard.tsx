import React from "react";

// types
import { AnswerObject } from '../App';

// styles
import { QuestionCardWrapper } from '../App.styles'

type Props = {
  question: string;
  answers: string[];
  // correctAnswer: string;
  // callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  // correctAnswer,
  // callback,
  // userAnswer,
  questionNum,
  totalQuestions,
}) => (
  <QuestionCardWrapper>
    <p className="number">
      question: {questionNum} / {totalQuestions}
    </p>

    <p dangerouslySetInnerHTML={{ __html: question }}></p>

      {answers.map((answer) => (
        <h4 key={answer}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
        </h4>
      ))}


 
  </QuestionCardWrapper>
);

export default QuestionCard;
