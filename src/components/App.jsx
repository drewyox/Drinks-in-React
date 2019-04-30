import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Whiskey from './Whiskey';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/whiskey' component={Whiskey} />
        <Route component={Error404}/>
      </Switch>
      <h1 style={{height: '50px'}}></h1>
    </div>
  );
}

export default App;
