import './App.css';
import GoalList from './components/GoalList';
import Header from './components/Header';
import CalculatorAdd from './components/Calculator';
import TermsOfUse from './components/TermsOfUse';


function App() {
  return (
    <div className="App">

    <Header/>

        <h1>Hi,this is me Rene!</h1>
        <p>I'm a webdeveloper from Estonia.</p>


    <GoalList/>

    <CalculatorAdd/>

    <TermsOfUse/>

    </div>
  );
}

export default App;
