import { React, useEffect } from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview";
import Chats from "./Chats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatView from "./ChatView";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Switch>
              <Route exact path="/">
                <WebcamCapture />
              </Route>
              <Route path="/preview">
                <Preview />
              </Route>
              <Route path="/chats/view">
                <ChatView />
              </Route>
              <Route path="/chats">
                <Chats />
              </Route>
            </Switch>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
