import { Question } from "../assets/types";
import { shuffle } from "../assets/functions";

interface Props {
  question: Question;
  questionNumber: number;
  onClick: (answer: string, questionNum: number) => void;
}

const QuestionList = ({ question, questionNumber, onClick }: Props) => {
  // randomize incorrect answers with correct;
  const answers = shuffle([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);

  return (
    <>
      <ul className="list-group pb-2">
        {answers.map((answer, index) => (
          <li
            key={index}
            className="list-group-item list-group-item-action"
            style={{ fontSize: "1.2em" }}
            onClick={() => onClick(answer, questionNumber)}
          >
            {answer}
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuestionList;
