import { useEffect, useState } from "react";
import axios from "axios";

import QuestionList from "./components/QuestionList";
import { Question } from "./assets/types";
import { decodeHTMLEntities } from "./assets/functions";
import "./App.css";
import QuestionTitle from "./components/QuestionTitle";
import QuizComplete from "./components/QuizComplete";

function App() {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    // when app first loads to this
    axios
      .get("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => {
        return res.data.results;
      })
      .then((questions) => {
        //console.log(questions);
        const newQuestions = [] as Question[];
        questions.map((question: Question) =>
          newQuestions.push({
            question: decodeHTMLEntities(question.question),
            type: question.type,
            category: question.category,
            correct_answer: decodeHTMLEntities(question.correct_answer),
            incorrect_answers: question.incorrect_answers.map((answer) =>
              decodeHTMLEntities(answer)
            ),
          })
        );

        setQuestions(newQuestions);
      });
  }, []);

  const handleQuestionClick = (answer: string, questionNumber: number) => {
    if (questions && questionNumber === questions?.length - 1) {
      setPlaying(false);
      return;
    }
    if (questions && questionNumber < questions?.length - 1) {
      answer === questions[questionNumber].correct_answer &&
        setScore(score + 1);
      setQuestionNumber(questionNumber + 1);
    }
  };

  return (
    <>
      <div className="container text-center pb-4">
        <h1>Quiz App</h1>
      </div>
      {questions && (
        <>
          {playing ? (
            <div
              className="container text-center bg-primary-subtle pb-2"
              style={{ borderRadius: "15px" }}
            >
              <QuestionTitle
                question={questions[questionNumber]}
                questionNumber={questionNumber}
              ></QuestionTitle>

              <QuestionList
                question={questions[questionNumber]}
                questionNumber={questionNumber}
                onClick={handleQuestionClick}
              ></QuestionList>
              <h3>Score: {score}</h3>
            </div>
          ) : (
            <QuizComplete score={score}></QuizComplete>
          )}
        </>
      )}
    </>
  );
}

export default App;
