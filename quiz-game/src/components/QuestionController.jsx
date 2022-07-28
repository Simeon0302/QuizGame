import React, {useEffect, useRef} from "react";

function QuestionController({handleTimeout, handleAnswer, questionObj, maxTime}) {
    const question = questionObj.content;
    const answers = questionObj.answers;
    const answerButtons = answers.map(({id, content}) => {
        return (<button key={id} answer-id={id} onClick={onAnswer}>{content}</button>);
    })
    const timerId = useRef(null);
    const remainingTime = useRef(maxTime);

    function onAnswer(event) {
        clearTimeout(timerId.current);
        handleAnswer(event, remainingTime.current);
    }

    useEffect(() => {
        timerId.current = setInterval(() => {
            remainingTime.current--;
            console.log(remainingTime.current);
            
            if(remainingTime.current <= 0) {
                handleTimeout();
                clearInterval(timerId.current);
            }
        }, 1000)

        return () => {
            remainingTime.current = maxTime;
            clearInterval(timerId.current);
        }
    }, [questionObj]);
    

    return (
        <div>
            <h1>{question}</h1>
            {answerButtons}
        </div>
    )
}

export default QuestionController;
