import Header from './Header';
import Main from './Main';

// http://localhost:8000/questions

export default function App() {
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
