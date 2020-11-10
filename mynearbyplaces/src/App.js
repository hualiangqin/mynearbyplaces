import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import AddReview from './components/AddReview';
import AddPlace from './components/AddPlace';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/mynearbyplaces' component={Home}/>
        <Route path='/addreview' component={AddReview}/>
        <Route path='/addplace' component={AddPlace}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
