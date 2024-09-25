import { useRef } from "react";

export default function Answers ({
                                answers, 
                                selectedAnswer, 
                                answerState,
                                onSelect}) {
  const shuffledAnswers = useRef ();

  console.log ('answers', answers)
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers]
      .sort (() => Math.random () - 0.5)
  }

   return (
    <ul id="answers">
      {shuffledAnswers.current.map(answer => {
        // console.log ('answer', answer)
        const isSelected = selectedAnswer === answer;
        // console.log ('isSelected', isSelected)
        let cssClass = '';
        // console.log (answerState)
        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
          cssClass = answerState;
        }
        return (<li key={answer} className="answer">
          <button className={cssClass} onClick={()=> onSelect (answer)}>
            {answer}
          </button>
        </li>)

      }
      )}
    </ul>
   )
}