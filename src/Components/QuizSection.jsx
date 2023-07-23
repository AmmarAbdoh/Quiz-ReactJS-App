import QuestionNav from "./QuestionNav";
import QuestionSection from "./QuestionSection";
const QuizSection = ({
  randomQuestionIndices,
  currentQuestionIndex,
  handlePreviousQuestion,
  handleNextQuestion,
  currentQuestion,
  selectedOptions,
  answersSubmitted,
  handleOptionSelect,
  handleQuestionChange,
  handleSubmitAnswers,
  allQuestionsAnswered,
  setCurrentQuestionIndex,
}) => {
  return (
    <table className="quiz-table">
      <tbody>
        <tr>
          <QuestionNav
            handleQuestionChange={handleQuestionChange}
            randomQuestionIndices={randomQuestionIndices}
            currentQuestionIndex={currentQuestionIndex}
            handlePreviousQuestion={handlePreviousQuestion}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            handleNextQuestion={handleNextQuestion}
          />

          <QuestionSection
            currentQuestion={currentQuestion}
            selectedOptions={selectedOptions}
            handleOptionSelect={handleOptionSelect}
            currentQuestionIndex={currentQuestionIndex}
            answersSubmitted={answersSubmitted}
          />
        </tr>
      </tbody>
      {currentQuestionIndex === randomQuestionIndices.length - 1 && (
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn"
            onClick={handleSubmitAnswers}
            disabled={!allQuestionsAnswered || answersSubmitted}
          >
            Finish Quiz
          </button>
        </div>
      )}
    </table>
  );
};
export default QuizSection;
