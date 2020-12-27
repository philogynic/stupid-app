import {BrowserRouter, Switch, Route} from 'react-router-dom'
import "../node_modules/bulma/css/bulma.css"
import Landing from './components/Landing'
import LoggedIn from './components/LoggedIn';
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';

import firebase from 'firebase/app';
import AuthContextProvider from './contexts/AuthContext';
import UserDashboard from './components/UserDashboard';
import UserContextProvider from './contexts/UserContext';

firebase.initializeApp({
  apiKey: "AIzaSyDKBTsk8kt5CJsmF5WLmxNp-h-2tDIZWtE",
  authDomain: "stupid-bank-demo.firebaseapp.com",
  projectId: "stupid-bank-demo",
  storageBucket: "stupid-bank-demo.appspot.com",
  messagingSenderId: "350867621122",
  appId: "1:350867621122:web:c9f17f0c1bde2ddccd2e1b"
})



const App = () => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/login' component={SignIn} />
              <Route exact path='/daftar' component={SignUp} />
              <Route exact path='/loggedin' component={LoggedIn} />
              <Route exact path='/dashboard' component={UserDashboard}/>
            </Switch>
          </div>
        </BrowserRouter>
      </UserContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;
