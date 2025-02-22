import quizCompleteImg from "../assets/quiz-complete.png"
import QUESTIONS from "../questions.js"

export default function Summary ({ userAnswers }) {
  const skippedAnswers = userAnswers.filter ((answer) => answer === null).length;
  const correctAnswers = userAnswers.filter ((answer, index) => answer === QUESTIONS[index].answers[0]).length;
  const skippedAnswersShare = Math.floor (skippedAnswers / userAnswers.length * 100);
  const correctAnswersShare = Math.floor (correctAnswers / userAnswers.length * 100);
  const incorrectAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{incorrectAnswersShare}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
        <ol>
          {userAnswers.map ((answer, index) => {
            let cssClass = 'user-answer';
            if (answer === null) {
              cssClass = 'skipped';
            } else if (answer !== QUESTIONS[index].answers[0]) {
              cssClass = 'incorrect';
            } else {
              cssClass = 'correct';
            }

            return (
              <li key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer ?? 'Skipped'}</p>
              </li>

            )
          })
          }
        </ol>
    </div>
  )
}