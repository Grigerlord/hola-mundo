import logo from './logo.svg';
import './App.css';
// import Greeting from './pure/Greeting';
// import GreetingF from './components/pure/GreetingF.jsx';
import TaskListComponent from './components/container/Task_list';
import { ContactComponent } from './components/container/ContactComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ContactComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <TaskListComponent />
      </header>
    </div>
  );
}

export default App;
