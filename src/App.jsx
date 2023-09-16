import { useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import { useReducer } from 'react';
// http://localhost:8000/questions

const initialState = {
  questions: [],
  // 'loading', 'active', 'error', 'ready', 'finished'
  status: 'loading',
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };

    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };

    default:
      throw new Error('action is not defined !');
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch(err => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className='app'>
      <Header />

      <Main>
        <p>1/15</p>
        <p>Questions?</p>
      </Main>
    </div>
  );
}
