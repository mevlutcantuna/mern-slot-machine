import React from "react";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {router} from "./routers/router"
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
    return <> 
    <Router>
        <Switch>
            <PrivateRoute exact path={router.home.path} component={router.home.component}/>
            <Route exact path={router.login.path} component={router.login.component}/>
            <Route exact path={router.signup.path} component={router.signup.component}/>
        </Switch>
    </Router>
    </>
}
 
export default App; 