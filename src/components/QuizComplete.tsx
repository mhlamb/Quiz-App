interface Props {
  score: number;
}

const QuizComplete = ({ score }: Props) => {
  return (
    <>
      <div
        className="container text-center bg-primary-subtle pb-2 d-grid"
        style={{ borderRadius: "15px", height: "300px" }}
      >
        <h2>Quiz complete!</h2>
        <h1>Final score: {score} / 10</h1>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Play again
        </button>
      </div>
    </>
  );
};

export default QuizComplete;
