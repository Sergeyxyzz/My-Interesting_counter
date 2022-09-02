import './App.css';
import Counter from './components/Counter';
import PropTypes from 'prop-types';

function App() {
  const max = 5;
  const min = -5;

  return (
    <div className="App">
      <Counter min={min} max={max} />
    </div>
  );
}

export default App;
