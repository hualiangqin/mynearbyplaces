import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import AddReview from './components/AddReview';
import AddPlace from './components/AddPlace';
import UpdatePlace from './components/UpdatePlace';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/mynearbyplaces' component={Home}/>
        <Route path='/addreview' component={AddReview}/>
        <Route path='/addplace' component={AddPlace}/>
        <Route path='/updateplace' component={UpdatePlace}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
