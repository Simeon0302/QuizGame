import React, {useEffect, useRef} from "react";

function QuestionController({handleTimeout, handleAnswer, questionObj, maxTime}) {
    const question = questionObj.content;
    const answers = questionObj.answers;
    const answerButtons = answers.map(({id, content}) => {
        return (<button key={id} answer-id={id} onClick={onAnswer}>{content}</button>);
    })
    const timerId = useRef(null);
    const time = useRef(0);

    function onAnswer(event) {
        clearTimeout(timerId.current);
        handleAnswer(event, time.current);
    }

    useEffect(() => {
        timerId.current = setInterval(() => {
            time.current++;
            console.log(time.current);
            
            if(time.current === maxTime) {
                handleTimeout();
                clearInterval(timerId.current);
            }
        }, 1000)

        return () => {
            clearInterval(timerId.current);
        }
    }, []);
    

    return (
        <div>
            <h1>{question}</h1>
            {answerButtons}
        </div>
    )
}

export default QuestionController;
