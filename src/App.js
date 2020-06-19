import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";

const App = (props) => {

  return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/content' render={()=> <Content post={props.state.contentPage} addPost={props.addPost} newPostText={props.newPostText} newTextPost={props.state.newTextPost}/>}/>
                <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
  );
}

export default App;
