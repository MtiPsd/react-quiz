function Options({ question, dispatch, answer }) {
  //
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${defineStyleOnAnswer(
            index,
          )} ${defineStyleOnCorrectAnswer(index)} `}
          key={option}
          onClick={() =>
            dispatch({
              type: 'newAnswer',
              payload: index,
            })
          }
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );

  /////////////////////// helpers ///////////////////////

  function defineStyleOnCorrectAnswer(index) {
    return hasAnswered && index === question.correctOption
      ? 'correct'
      : 'wrong';
  }

  function defineStyleOnAnswer(index) {
    return index === answer ? 'answer' : '';
  }
}

export default Options;
