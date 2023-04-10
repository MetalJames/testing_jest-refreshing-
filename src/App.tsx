import './App.css';
import { AppProviders } from './providers/app-providers';
import { MuiMode } from './components/mui/MuiMode';
// import { Application } from './components/application/Application';
// import { Counter } from './components/counter/Counter';
// import { Skills } from './components/skills/Skills';

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application />
      <Skills skills={['HTML', 'CSS']} /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
