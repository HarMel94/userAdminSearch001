import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import User from './User';
import Admin from './Admin';
import Search from './Search';
import List from './List';
import ListAdd from './ListAdd';

export default function App() {

  const [list, setList] = useState([
    {
        name : 'Kaen',
    },
    {
        name : 'Abel',
    }
]);

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path='/' component={Search}/>

          <Route path='/user'  render={() => {
            return(
              <User li={list.name} list={<List list={list}/>}/>
            )
          }}/> 

          <Route path='/admin' render={() => {
            return(
              <Admin li={<ListAdd
              Add = {(val) => {
                setList([
                  ...list,
                  {
                    name : val
                  }
                ])}}/>
              } 
              list={<List list={list}/>}/>
            )
          }}/>
          
        </Switch>
      </div>
    </Router>
  );
};


