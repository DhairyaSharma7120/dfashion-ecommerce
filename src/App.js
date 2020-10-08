import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninAndSignup from './pages/signin-and-signup/signin-and-signin.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null,
      profilePic: null
        }
  }
  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log('user:',user)
      if(user != null){
       this.setState({profilePic: user.photoURL})
      }
    })
    
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div className="App">
        {/* Check if photoURL is set or not */}
        {/* {console.log(this.state.currentUser)}
        {console.log(this.state.profilePic)} */}
        <Header currentUser={this.state.currentUser} profilePic={this.state.profilePic} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignup} />
        </Switch>
      </div>
      );
  }

}

export default App;
