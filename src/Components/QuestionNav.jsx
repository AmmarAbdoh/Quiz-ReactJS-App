import classnames from "classnames";
const QuestionNav = ({
  handleQuestionChange,
  randomQuestionIndices,
  currentQuestionIndex,
  handlePreviousQuestion,
  setCurrentQuestionIndex,
  handleNextQuestion,
}) => {
  return (
    <>
      <div className="d-none d-md-flex justify-content-center question-nav">
        {randomQuestionIndices.map((_, index) => (
          <button
            key={index}
            className={classnames("question-button", {
              active: currentQuestionIndex === index,
            })}
            onClick={() => handleQuestionChange(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="d-md-none">
        <button
          className="mr-2"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <select
          value={currentQuestionIndex}
          onChange={(e) => setCurrentQuestionIndex(parseInt(e.target.value))}
        >
          {randomQuestionIndices.map((_, index) => (
            <option key={index} value={index}>
              Question {index + 1}
            </option>
          ))}
        </select>
        <button
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === randomQuestionIndices.length - 1}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default QuestionNav;
