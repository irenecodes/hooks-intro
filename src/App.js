import StateTutorial from './components/StateTutorial';
import ReducerTutorial from './components/ReducerTutorial';
import './App.css';
import EffectTutorial from './components/EffectTutorial';
import RefTutorial from './components/RefTutorial';
import LayoutTutorial from './components/LayoutTutorial';
import ImperativeHandleTutorial from './components/ImperativeHandleTutorial';
import ContextTutorial from './components/ContextTutorial';

function App() {
  return (
    <div className="App">
      <h1>React Hooks Intro</h1>
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutTutorial />
      <ImperativeHandleTutorial />
      <ContextTutorial />
    </div>
  );
}

export default App;
