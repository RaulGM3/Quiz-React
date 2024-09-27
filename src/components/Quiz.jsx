import { useCallback, useState } from "react"

import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz () {
  const [userAnswers, setUserAnswers] = useState ([])

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  
  // useCallback previene que esta función se cree cada vez que se renderiza el componente
  // para llamarla, simplemente se llama a handleSelect
  const handleSelectAnswer = useCallback (function handleSelectAnswer (selectedAnswer) {
    setUserAnswers ((prevUserAnswers) => {
      console.log ('prevUserAnswers', prevUserAnswers, selectedAnswer)
      return [...prevUserAnswers, selectedAnswer]
    })
  }, [])

  const handleSkipAnswer = useCallback (() => handleSelectAnswer(null), [handleSelectAnswer])
  
  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} />
    )
  }

  return (
    <div id="quiz">
      <Question 
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer} 
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  )
}