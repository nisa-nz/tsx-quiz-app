import React from "react";

type Props = {
  question: string;
  answers: string[];
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  questionNum,
  totalQuestions,
}) => (
  <div className="bg-near-black moon-gray">
    <dl className="f3 lh-title mv3 bb b--light-green tc pv2">
      <dt className="dib b">Question:</dt>
      <dd className="dib ml1 light-red">
        {questionNum} of {totalQuestions}
      </dd>
    </dl>

    <article className="pa2 mw9 center">
      <h1
        className="f2 bold tc mb3"
        dangerouslySetInnerHTML={{ __html: question }}
      ></h1>
      <ul className="list pl0 mt4 center mw8 ba b--light-red br2">
        {answers.map((answer, idx) => (
          <li className="f3 ph3 pv3 bb b--light-red light-green" key={answer}>
             <span> {idx} : </span>  
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </li>
        ))}
      </ul>
    </article>
  </div>
);

export default QuestionCard;
