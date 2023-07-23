const QuizOption = ({ data }) => {
  const { name, img, questions } = data;
  return (
    <div
      className="quiz-block"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <p className="quiz-title">{name}</p>
    </div>
  );
};
export default QuizOption;
