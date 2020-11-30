import './App.css';
import './app.scss';
import {CalendarLayout} from './components/calendar.js';
import {SnowElement} from './components/snow-item.js';

function App() {

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-premium"></div>
        <div className="title">Calendário Premium do Advento</div>
      </header>
      <CalendarLayout />
      <div className="snow-container">
        <SnowElement />
      </div>
    </div>
  );
}

export default App;
