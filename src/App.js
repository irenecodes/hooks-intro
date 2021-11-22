import StateTutorial from './components/StateTutorial';
import ReducerTutorial from './components/ReducerTutorial';
import './App.css';
import EffectTutorial from './components/EffectTutorial';
import RefTutorial from './components/RefTutorial';
import LayoutTutorial from './components/LayoutTutorial';

function App() {
  return (
    <div className="App">
      <h1>React Hooks Intro</h1>
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutTutorial />
    </div>
  );
}

export default App;
