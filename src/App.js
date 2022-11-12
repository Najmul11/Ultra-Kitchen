import './App.css';
import Dishes from './components/Dishes/Dishes';
import Header from './components/Header/Header';
import QnA from './components/QnA/QnA';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dishes></Dishes>
      <QnA></QnA>
    </div>
  );
}

export default App;
