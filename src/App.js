import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigninAndSignup from './pages/signin-and-signup/signin-and-signin.component'
import { auth } from './firebase/firebase.utils'
import { createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      profilePic: null
    }
  }
 
  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props; 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
        setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      }
      setCurrentUser(userAuth)
      if(userAuth!= null){
        this.setState({ profilePic: userAuth.photoURL})
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
        <Header profilePic={this.state.profilePic}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <SigninAndSignup />} />
        </Switch>
      </div>
      );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
