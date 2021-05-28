import './App.css';
import Footer from './Footer';
import Header from './Header';
import Title from './Title';
import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Visualization from './Visualization';
import Home from './Home';
import KnowMore from './KnowMore';

function App() {

  let [mode, setMode] = useState(false)

  const toggleMode = () => {
    setMode(!mode)
    console.log(mode)
  }

  return (
    <div className="App">
      <Header toggleMode = {toggleMode} mode = {mode} />
        <Router>
          <Switch>
            <Route exact path = "/home" component = {()=><Home mode = {mode}/>}></Route>
            <Route exact path = "/knowmore" component = {KnowMore}></Route>
            <Route path = "/*" component = {()=><Home mode = {mode}/>}></Route>
          </Switch>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
