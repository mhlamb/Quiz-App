import { Question } from "../assets/types";

interface Props {
  question: Question;
  questionNumber: number;
}

const QuestionTitle = ({ question, questionNumber }: Props) => {
  return (
    <>
      <h4 style={{ fontStyle: "italic" }}>Category: {question.category}</h4>
      <h2>Question: {questionNumber + 1}</h2>
      <h2 className="pb-2">{question.question}</h2>
    </>
  );
};

export default QuestionTitle;
