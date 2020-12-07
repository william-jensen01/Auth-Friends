import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import FriendProfile from './components/FriendProfile';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  const [addFriend, setAddFriend] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>Auth-Friends</h1>
        <nav>
          <Link className='navLink' to='/login'>Login</Link>
          <Link className='navLink' to='/friends'>Friends List</Link>
          <Link className='navLink' to='/add'>Add Friend</Link>
          <Link to='/edit/id'></Link>
          <Link to='/friends/id'></Link>
        </nav>
      </header>
      <Switch>
        <PrivateRoute exact path='/friends'>
          <FriendsList addFriend={addFriend} />
        </PrivateRoute>

        <Route path='/login' component={Login} />

        {/* Form to add friend */}
        <PrivateRoute exact path='/add'>
          <FriendForm setAddFriend={setAddFriend} />
        </PrivateRoute>

        {/* Form to edit friend (gather info from param id) */}
        <PrivateRoute exact path='/edit/:id'>
          <FriendForm />
        </PrivateRoute>

        <Route exact path='/friends/:id' component={FriendProfile} />
        
      </Switch>
    </div>
  );
}

export default App;
