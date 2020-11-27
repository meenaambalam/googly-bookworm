import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Button } from '@material-ui/core';
import NavigationBar from "../src/components/NavigationBar/NavigationBar";
import Jumbotron from "../src/components/Jumbotron/Jumbotron";
import SearchBooks from "../src/pages/SearchBooks";
import SavedBooks from "../src/pages/SavedBooks";
import NoMatch from "../src/pages/NoMatch";


function App(){
    console.log("Printing from App");
    return (
        <Router>
            <div>
                <NavigationBar />
                <Jumbotron />
                <Switch>
                    <Route exact path={["/", "/search"]}>
                        <SearchBooks />
                    </Route>
                    <Route exact path="/saved">
                        <SavedBooks />
                    </Route>
                    {/* <Route>
                        <NoMatch />
                    </Route> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;