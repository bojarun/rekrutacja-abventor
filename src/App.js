import React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";

import './App.css';

import Intro from "./components/Intro";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Results from "./components/Results";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch className="content">
                    <Route exact path="/"  component={Intro}/>
                    <Route exact path="/1" component={Step1}/>
                    <Route exact path="/2" component={Step2}/>
                    <Route exact path="/3" component={Step3}/>
                    <Route exact path="/4" component={Step4}/>
                    <Route exact path="/5" component={Step5}/>
                    <Route exact path="/results" component={Results}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;