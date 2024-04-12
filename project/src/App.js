import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h1>Ola Mundo</h1>
      <FirstComponent />
      <Hooks/>
      <List/>
      <RenderCond x={8}/>
      <Fragment/>
      <Container>
        <h1>Oiii</h1>
      </Container>
    </div>
  );
}

export default App;
