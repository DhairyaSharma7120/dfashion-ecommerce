import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

const HatsPage = (props)=>{
  console.log(props)
  return (<div>
    <h1>Hats Page</h1>
  </div>);
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/caps" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
