const QuestionSection = ({
  currentQuestion,
  selectedOptions,
  handleOptionSelect,
  currentQuestionIndex,
  answersSubmitted,
}) => {
  return (
    <>
      {currentQuestion && (
        <tr>
          <td className="question">
            <p className="question-title">{currentQuestion.question}</p>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedOptions[currentQuestionIndex] === index
                    ? "active"
                    : ""
                }`}
                onClick={() => handleOptionSelect(index)}
                disabled={answersSubmitted}
              >
                {index + 1}. {option}
              </button>
            ))}
          </td>
        </tr>
      )}
    </>
  );
};
export default QuestionSection;
