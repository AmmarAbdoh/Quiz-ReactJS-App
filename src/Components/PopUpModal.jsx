import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
useEffect;
const PopUpModal = ({
  answersSubmitted,
  correctAnswers,
  showPopup,
  displayedScore,
  handleRetakeQuiz,
  setDisplayedScore,
  setShowPopup,
}) => {
  useEffect(() => {
    let animationTimeout;
    if (answersSubmitted) {
      const step = correctAnswers / 50;
      let currentScore = 0;
      const animateScore = () => {
        if (currentScore + step < correctAnswers) {
          currentScore += step;
          setDisplayedScore(currentScore.toFixed(2));
          animationTimeout = setTimeout(animateScore, 30);
        } else {
          setDisplayedScore(correctAnswers);
        }
      };
      animateScore();
    }

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [answersSubmitted, correctAnswers]);

  return (
    <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
      <Modal.Body>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h4 style={{ color: "black" }}>
            Your mark is {displayedScore} out of 10.
          </h4>
          <div className="score-bar">
            <div
              className="score-fill"
              style={{ width: `${(displayedScore / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-center w-100">
          <button className="btn" onClick={handleRetakeQuiz}>
            Retake Quiz
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
export default PopUpModal;
