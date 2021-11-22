import StateTutorial from './components/StateTutorial';
import ReducerTutorial from './components/ReducerTutorial';
import './App.css';
import EffectTutorial from './components/EffectTutorial';

function App() {
  return (
    <div className="App">
      <h1>React Hooks Intro</h1>
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
    </div>
  );
}

export default App;
