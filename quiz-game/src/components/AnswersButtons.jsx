import React from "react";

const correctAnswerStyle = {
    color: "green"
}
const wrongAnswerStyle = {
    color: "red"
}
const selectedAnswerStyle = {
    borderColor: "yellow"
}

function AnswersButtons({playerAnswerObj, handleAnswer, answersList}) {
    const answerButtons = answersList.map(({ id, content, is_correct }) => {
        if(!playerAnswerObj.isAnswered) {
            if(playerAnswerObj.isTimeout) {
                if (is_correct) {
                    return <button key={id} answer-id={id} disabled={true} style={correctAnswerStyle}>{content}</button>
                }
                else {
                    return <button key={id} answer-id={id} disabled={true} style={wrongAnswerStyle}>{content}</button>
                }
            }
            else {
                return <button key={id} answer-id={id} onClick={handleAnswer}>{content}</button>;
            }
        }
        else {
            const buttonStyle = playerAnswerObj.answerId === id ? { ...selectedAnswerStyle } : {};
            if(is_correct) {
                Object.assign(buttonStyle, correctAnswerStyle);
                return <button key={id} answer-id={id} disabled={true} style={buttonStyle}>{content}</button>
            }
            else {
                Object.assign(buttonStyle, wrongAnswerStyle);
                return <button key={id} answer-id={id} disabled={true} style={buttonStyle}>{content}</button>
            }
        }
    })

    return (
        <div id={answerButtons}>
            {answerButtons}
        </div>
    )
}

export default AnswersButtons;
