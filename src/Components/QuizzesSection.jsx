import React, { useState } from "react";
import QuizOption from "./QuizOption";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Quiz from "./Quiz"; // Import the Quiz component

const QuizzesSection = () => {
  const Frontend_Quiz = {
    name: "Frontend Quiz",
    img: "/src/assets/pictures/front-end.png",
    questions: "data",
  };

  const [showQuiz, setShowQuiz] = useState(false);

  const handleShowQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <>
      {!showQuiz && (
        <Row
          className="justify-content-around"
          style={{ height: "30rem", width: "50rem" }}
        >
          <Col sm={12} md={6}>
            <a href="#" onClick={handleShowQuiz}>
              <QuizOption data={Frontend_Quiz} />
            </a>
          </Col>
        </Row>
      )}

      {showQuiz && <Quiz />}
    </>
  );
};

export default QuizzesSection;
