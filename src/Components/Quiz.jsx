import React, { useState, useEffect } from "react";
import frontend from "../QuizzesData/frontend.json";
import PopUpModal from "./PopUpModal";
import QuizSection from "./QuizSection";

const Quiz = () => {
  const questionsNumber = 10;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questionsNumber).fill(null)
  );
  const [randomQuestionIndices, setRandomQuestionIndices] = useState([]);
  const [answersSubmitted, setAnswersSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [displayedScore, setDisplayedScore] = useState(0);

  const totalQuestions = frontend.questions.length;
  const currentQuestion =
    randomQuestionIndices.length === questionsNumber
      ? frontend.questions[randomQuestionIndices[currentQuestionIndex]]
      : null;

  const generateRandomQuestion = () => {
    const randomIndices = new Set();
    while (randomIndices.size < questionsNumber) {
      const randomIndex = Math.floor(Math.random() * totalQuestions);
      randomIndices.add(randomIndex);
    }
    setRandomQuestionIndices(Array.from(randomIndices));
  };

  useEffect(() => {
    generateRandomQuestion();
  }, [totalQuestions]);

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setAnswersSubmitted(false);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, randomQuestionIndices.length - 1)
    );
    setAnswersSubmitted(false);
  };

  const handleQuestionChange = (index) => {
    setCurrentQuestionIndex(index);
    setAnswersSubmitted(false);
  };

  const handleOptionSelect = (index) => {
    if (answersSubmitted) {
      return;
    }

    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = index;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmitAnswers = () => {
    setAnswersSubmitted(true);
    setShowPopup(true);

    const marks = selectedOptions.reduce(
      (acc, selectedOptionIndex, questionIndex) => {
        const correctOptionIndex =
          frontend.questions[randomQuestionIndices[questionIndex]]
            .correctOption - 1;
        if (selectedOptionIndex === correctOptionIndex) {
          return acc + 1;
        }
        return acc;
      },
      0
    );

    setCorrectAnswers(marks);
  };

  const allQuestionsAnswered = selectedOptions.every(
    (selectedOptionIndex) => selectedOptionIndex !== null
  );

  if (randomQuestionIndices.length !== questionsNumber) {
    return <div>Loading...</div>;
  }

  const handleRetakeQuiz = () => {
    generateRandomQuestion();
    setCurrentQuestionIndex(0);
    setSelectedOptions(new Array(questionsNumber).fill(null));
    setAnswersSubmitted(false);
    setCorrectAnswers(0);
    setShowPopup(false);
    setDisplayedScore(0);
  };

  return (
    <div>
      <QuizSection
        randomQuestionIndices={randomQuestionIndices}
        currentQuestionIndex={currentQuestionIndex}
        handlePreviousQuestion={handlePreviousQuestion}
        handleNextQuestion={handleNextQuestion}
        currentQuestion={currentQuestion}
        selectedOptions={selectedOptions}
        answersSubmitted={answersSubmitted}
        handleOptionSelect={handleOptionSelect}
        handleQuestionChange={handleQuestionChange}
        handleSubmitAnswers={handleSubmitAnswers}
        allQuestionsAnswered={allQuestionsAnswered}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
      />

      <PopUpModal
        answersSubmitted={answersSubmitted}
        correctAnswers={correctAnswers}
        showPopup={showPopup}
        displayedScore={displayedScore}
        handleRetakeQuiz={handleRetakeQuiz}
        setDisplayedScore={setDisplayedScore}
        setShowPopup={setShowPopup}
      />
    </div>
  );
};

export default Quiz;
