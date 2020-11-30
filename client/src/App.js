import {React} from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "../src/components/NavigationBar/NavigationBar";
import Jumbotron from "../src/components/Jumbotron/Jumbotron";
import SearchBooks from "../src/pages/SearchBooks";
import SavedBooks from "../src/pages/SavedBooks";
import NoMatch from "../src/pages/NoMatch";


// App component is the main component which acts as a container for all other components
function App(){
    console.log("Printing from App");
    return (
        // Dynamic client-side routing, allows to build a single-page web application with navigation without the page regreshing as the user navigates.
        <Router>
            <div>
                <NavigationBar />
                <Jumbotron />
                <Switch>
                    <Route exact path={["/", "/search"]} component={SearchBooks}>
                        <SearchBooks />
                    </Route>
                    <Route exact path="/saved" component={SavedBooks}>
                        <SavedBooks />
                    </Route>
                    <Route>
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;