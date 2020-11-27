import './App.css';
import {CalendarLayout} from './components/calendar.js';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-premium"></div>
        <div className="title">Calendário do Advento Premium</div>
      </header>
      <CalendarLayout />
    </div>
  );
}

export default App;
